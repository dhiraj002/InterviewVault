import NextAuth from "next-auth";
import { authOptions } from "../../../../lib/authOptions"; // ✅ imported from separate file

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
