"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
function Page() {
    const { user } = useAuthContext();
    const router = useRouter();

    React.useEffect(() => {
        if (user == null) router.push("/");
    }, [user]);

    const handleHome = () => {
        router.push("/");
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="p-5 text-center">
                <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                    Only logged in users can view this page
                </h1>
                <button
                    onClick={handleHome}
                    className="mt-6 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                    Back to Home
                </button>
            </div>
        </main>
    );
}

export default Page;
