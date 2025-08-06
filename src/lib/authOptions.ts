// src/lib/authOptions.ts

import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import connectDb from "./dbConnect";
import UserModel from "@/model/user";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "select_account",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // if (user) token.id = user.id;

            await connectDb();

            if (user?.email) {
                const fetchedUser = await UserModel.findOne({ email: user.email });

                if (process.env.ADMIN_EMAIL && user.email == process.env.ADMIN_EMAIL) {
                    token.isAdmin = true; // Add isAdmin property if user is admin
                } else {
                    token.isAdmin = false;
                }

                if (fetchedUser) {
                    token.id = fetchedUser._id.toString(); // ✅ Store MongoDB user ID
                }
            }

            return token;
        },

        async session({ session, token }) {
            if (session.user && token.id) {
                session.user.id = token.id as string; // ✅ Attach user ID to session
                session.user.isAdmin = token.isAdmin || (false as boolean | undefined); // Attach isAdmin to session
            }
            return session;
        },
        async signIn({ profile }) {
            if (!profile?.email) return false;

            await connectDb();

            const existingUser = await UserModel.findOne({ email: profile.email });
            if (!existingUser) {
                const [firstName, ...lastNameParts] = profile.name?.split(" ") || ["", ""];
                const lastName = lastNameParts.join(" ");
                await UserModel.create({ firstName, lastName, email: profile.email });
            }

            return true;
        },
    },
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
        error: "/auth/error",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
