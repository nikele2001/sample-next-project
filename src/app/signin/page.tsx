"use client";
import React from "react";
import signIn from "@/app/firebase/auth/signin";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const router = useRouter();
    const { user } = useAuthContext();

    // Redirect to admin page if user is already logged in
    React.useEffect(() => {
        if (user != null) {
            toast.success("Already logged in. Redirecting you in 3 seconds.");
            setTimeout(() => {
                return router.push("/admin");
            }, 3000);
        }
    }, [user]);

    const handleForm = async (event: any): Promise<void> => {
        event.preventDefault();

        const { result, error } = await signIn(email, password);

        if (error) {
            toast.error(error.message + "Please try again.");
        } else {
            toast.success("Signed in successfully.");

            setTimeout(() => {
                return router.push("/admin");
            }, 1000);
        }
    };

    const handleHome = () => {
        router.push("/");
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="p-5 text-center">
                <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                    Sign in
                </h1>
                <form onSubmit={handleForm} className="mt-6">
                    <label htmlFor="email" className="block">
                        <p className="mb-2 text-sm font-bold text-gray-700">
                            Email
                        </p>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@mail.com"
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </label>
                    <label htmlFor="password" className="block mt-4">
                        <p className="mb-2 text-sm font-bold text-gray-700">
                            Password
                        </p>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </label>
                    <button
                        type="submit"
                        className="block w-full px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                        Sign in
                    </button>
                    <button
                        onClick={handleHome}
                        className="block w-full px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                        Back to Home
                    </button>
                </form>
            </div>
            <ToastContainer />
        </main>
    );
}

export default Page;
