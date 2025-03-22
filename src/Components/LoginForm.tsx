"use client";
// import { useState, useEffect } from "react";
// import { loginUser } from "@/utils/actions/loginUser";
import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  // const [isClient, setIsClient] = useState(false);

  return (
    <div className="min-h-screen text-black flex justify-center items-center bg-transparent">
      <div className="backdrop-blur-2xl p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-purple-500">
        <h2 className="text-3xl font-bold text-center text-purple-500 mb-6">
          Login
        </h2>
        <form>
          <button
            type="button"
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://new-project-5-etk7.vercel.app/dashboard",
              })
            }
            className="w-full p-3 bg-red-500 text-white rounded-lg flex justify-center items-center gap-2 hover:bg-red-600 transition duration-300"
          >
            <FaGoogle className="text-white" /> Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
