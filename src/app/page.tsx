"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    const handleSignUp = () => {
        router.push("/signup");
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                A sample project built using NextJS
            </h1>
            <div className="p-5 text-center">
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{" "}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>
            <button
                onClick={handleSignUp}
                className="mt-6 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
                Sign Up
            </button>
        </main>
    );
}
