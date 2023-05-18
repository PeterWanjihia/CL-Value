import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { FiLoader } from "react-icons/fi";

function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(
        "Check your email. A password reset link has been sent to " + email
      );
      navigate("/login", { replace: true });
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <main className="body-font font-alata h-screen flex flex-1 items-center justify-center">
      <form className="bg-white p-3 rounded-md w-full max-w-[500px]">
        <p className="text-3xl mb-5 text-center">Forgot password?</p>
        <div className="w-full mb-5">
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

        <div>
          <button
            disabled={loading}
            onClick={handleClick}
            className="w-full bg-red py-3 text-white text-bold text-xl hover:opacity-[.8] rounded-sm"
          >
            {loading ? (
              <FiLoader className="mx-auto animate-spin text-3xl" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
        <div className="flex my-4 justify-center">
          <p className="font-bold">- OR -</p>
        </div>
        <div className="flex justify-center">
          <Link to="/login" className="text-red text-xl">
            Login
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Forgot;
