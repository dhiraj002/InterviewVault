// // types/next-auth.d.ts
// import NextAuth from "next-auth";

// declare module "next-auth" {
//     interface Session {
//         user: {
//             id: string; // ✅ Add custom field
//             name?: string | null;
//             email?: string | null;
//             image?: string | null;
//         };
//     }

//     interface User {
//         id: string; // ✅ Include it here too if needed
//     }
// }

// declare module "next-auth/jwt" {
//     interface JWT {
//         id: string; // ✅ Make sure it's typed on JWT token too
//     }
// }

// types/next-auth.d.ts
import type { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
            isAdmin?: boolean; // Optional property to indicate if the user is an admin
        };
    }

    interface User extends DefaultUser {
        id: string;
        isAdmin?: boolean;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        isAdmin?: boolean;
    }
}
