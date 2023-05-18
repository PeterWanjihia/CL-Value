import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { FiLoader } from "react-icons/fi";

function Register() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password || !phone || !cpass)
        return toast.error("Fill in all input fields!");

      if (password !== cpass) return toast.error("Passwords don't match!");

      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(user, {
        displayName: phone,
      });
      await signOut(auth);
      toast.success(
        "Your account was successfully created. Continue to login."
      );
      navigate("/login", { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <main className="body-font font-alata h-screen flex flex-1 items-center justify-center">
      <form className="bg-white p-3 rounded-md w-full max-w-[500px]">
        <p className="text-3xl mb-5 text-center">Register</p>

        <div className="w-full mb-3">
          <label htmlFor="" className="text-[18px]">
            Email address
          </label>
          <input
            disabled={loading}
            onChange={(e) => setEmail(e.target.value.trim())}
            required
            type="email"
            placeholder="abc@example.com"
            className="w-full bg-input p-4 rounded-sm mt-2 outline-none text-lblack"
          />
        </div>

        <div className="w-full mb-3">
          <label htmlFor="" className="text-[18px]">
            Phone number
          </label>
          <input
            disabled={loading}
            onChange={(e) => setPhone(e.target.value.trim())}
            required
            type="number"
            placeholder="+123 45678912"
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
            required
            minLength={6}
            maxLength={16}
            type="password"
            placeholder="password"
            className="w-full bg-input p-4 rounded-sm  mt-2
            outline-none text-lblack"
          />
        </div>

        <div className="w-full mb-5">
          <label className="text-[18px]" htmlFor="">
            Confirm password
          </label>
          <input
            disabled={loading}
            onChange={(e) => setCpass(e.target.value.trim())}
            required
            minLength={6}
            maxLength={16}
            type="password"
            placeholder="Confirm password"
            className="w-full bg-input p-4 rounded-sm  mt-2
            outline-none text-lblack"
          />
        </div>

        <div>
          <button
            disabled={loading}
            onClick={registerUser}
            className="w-full bg-red py-3 text-white text-bold text-xl hover:opacity-[.8] rounded-sm"
          >
            {loading ? (
              <FiLoader className="mx-auto animate-spin text-3xl" />
            ) : (
              "Register"
            )}
          </button>
        </div>
        {!loading && (
          <>
            <div className="flex my-4 justify-center">
              <p className="font-bold">- OR -</p>
            </div>
            <div className="flex justify-center">
              <Link to="/login" className="text-red text-xl">
                Login to continue
              </Link>
            </div>
          </>
        )}
      </form>
    </main>
  );
}

export default Register;
