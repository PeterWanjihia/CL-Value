import React from "react";
import { FiLoader } from "react-icons/fi";

function PreLoader() {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-white">
      <FiLoader className="text-6xl text-red animate-spin" />
    </div>
  );
}

export default PreLoader;
