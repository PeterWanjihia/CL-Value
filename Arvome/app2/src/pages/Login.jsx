import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FiLoader } from "react-icons/fi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password)
        return toast.error("All input fields are required!");

      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Your login successfully.");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <main className="body-font font-alata h-screen flex flex-1 items-center justify-center">
      <form className="bg-white p-3 rounded-md w-full max-w-[500px]">
        <p className="text-3xl mb-5 text-center">Login</p>

        <div className="w-full mb-3">
          <label htmlFor="" className="text-[18px]">
            Email address
          </label>
          <input
            disabled={loading}
            onChange={(e) => setEmail(e.target.value.trim())}
            type="email"
            placeholder="abc@example.com"
            className="w-full bg-input p-4 rounded-sm mt-2 outline-none text-lblack"
          />
        </div>

        <div className="w-full mb-3">
          <label className="text-[18px]" htmlFor="">
            Password
          </label>
          <input
            disabled={loading}
            onChange={(e) => setPassword(e.target.value.trim())}
            minLength={6}
            maxLength={16}
            type="password"
            placeholder="password"
            className="w-full bg-input p-4 rounded-sm  mt-2
            outline-none text-lblack"
          />
        </div>

        <div className="flex mb-3 justify-end">
          {!loading && (
            <Link to="/forgot" className="text-red text-[17px]">
              Forgot password?
            </Link>
          )}
        </div>

        <div>
          <button
            onClick={loginUser}
            className="w-full bg-red py-3 text-white text-bold text-xl hover:opacity-[.8] rounded-sm"
          >
            {loading ? (
              <FiLoader className="mx-auto animate-spin text-3xl" />
            ) : (
              "Login"
            )}
          </button>
        </div>
        {!loading && (
          <>
            <div className="flex my-4 justify-center">
              <p className="font-bold">- OR -</p>
            </div>
            <div className="flex justify-center">
              <Link to="/register" className="text-red text-xl">
                Create an account
              </Link>
            </div>
          </>
        )}
      </form>
    </main>
  );
}

export default Login;