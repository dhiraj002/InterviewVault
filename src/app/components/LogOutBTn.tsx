"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

export default function LogoutButton() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleLogout = async () => {
        const res = await fetch("/api/logout", { method: "POST" });

        if (res.ok) {
            toast.success("👋 Logged out");

            router.push("/"); // Optional: redirect to home
            router.refresh(); // Refresh NavBar or any server component
            startTransition(() => {});
        } else {
            toast.error("Logout failed");
        }
    };

    return (
        <button onClick={handleLogout} disabled={isPending} className="text-white-500 hover:text-red-500 font-semibold transition">
            {isPending ? "Logging out..." : "Logout"}
        </button>
    );
}
