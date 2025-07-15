//

"use client";

import { useTransition } from "react";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

export default function LogoutButton() {
    const [isPending, startTransition] = useTransition();

    const handleLogout = async () => {
        startTransition(async () => {
            try {
                await signOut({ callbackUrl: "/" });
                toast.success("👋 Logged out successfully!");
            } catch {
                toast.error("❌ Logout failed");
            }
        });
    };

    return (
        <button onClick={handleLogout} disabled={isPending} className="text-white hover:text-red-500 font-medium transition">
            {isPending ? "Logging out..." : "Logout"}
        </button>
    );
}
