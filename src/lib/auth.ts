import { cookies } from "next/headers";

/**
 * Checks if the user is logged in by verifying the presence of a token in cookies.
 *
 * @returns {Promise<boolean>} - Returns a promise that resolves to true if the user is logged in, otherwise false.
 */
export async function isUserLoggedIn(): Promise<boolean> {
    // Retrieve cookie store to access cookies
    const cookieStore = await cookies(); // cookies() is synchronous, no need for 'await'

    // Attempt to retrieve the 'token' from cookies
    const token = cookieStore.get("token")?.value;

    // Return true if token exists, otherwise false
    return Boolean(token);
}
