import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import connectDb from "../../../../lib/dbConnect";
import UserModel from "../../../../model/user";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
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
            if (user) token.id = user.id;
            return token;
        },
        async session({ session, token }) {
            return session;
        },
        async signIn({ profile }) {
            if (!profile?.email) return false;
            await connectDb();
            const existingUser = await UserModel.findOne({ email: profile.email });
            if (!existingUser) {
                const [firstName] = profile.name?.split(" ") || [""];
                await UserModel.create({
                    firstName,
                    email: profile.email,
                });
            }
            return true;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
        error: "/auth/error",
    },
};

// Export NextAuth handler using authOptions
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
