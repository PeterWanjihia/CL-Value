import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";

const img = "https://www.bubbaleads.com/up/noimage.jpg";

function Home() {
  const [scrollP, setScrollP] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = window.addEventListener("scroll", () => {
      setScrollP(window.pageYOffset);
    });
    return unsub;
  }, []);

  return (
    <div className="relative">
      {/* navbar */}
      <header
        className={`w-full bg-white z-[1000] ${
          scrollP > 300 &&
          "sticky top-0 border-b-[1px] border-solid border-bcolor ease-in-out duration-[.5s]"
        }`}
      >
        <div className="flex justify-between items-center p-4 max-w-[1400px] mx-auto">
          <h1 className="font-bold text-red text-3xl">ARVOME</h1>
          <Link to="/contact">
            <button className="bg-red hidden md:block text-white px-5 p-2 text-xl rounded-full hover:scale-[98%]">
              Leave message
            </button>
            <button className="bg-red md:hidden w-[50px] h-[50px] rounded-full hover:scale-[98%]">
              <RiMessage3Fill className="text-white text-2xl m-auto" />
            </button>
          </Link>
        </div>
      </header>

      {/* section1 */}
      <section className="relative grid gap-[50px] lg:grid-cols-2 sm:grid-cols-1 max-w-[1300px] mx-auto p-5 min-h-[600px] py-30">
        <div className="w-full h-full flex flex-col justify-center md:mx-4 sm:mx-4 ">
          <h1 className="md:text-6xl mb-4 font-bold sm:text-center sm:text-3xl">
            Stay healthy with <br /> ARV delivery!
          </h1>
          <h2 className="text-2xl text-lblack sm:text-center">
            Take the hassle out of getting your ARV medications and have them
            delivered to you quickly and easily.
          </h2>
          <button
            onClick={() => navigate("/login")}
            className="bg-red text-white px-5 p-3 text-xl rounded-full hover:scale-[98%] w-full max-w-[250px] mt-10 sm:mx-auto "
          >
            Login
          </button>
        </div>
        <div className="w-full h-full mx-auto relative">
          <div className="w-[90%] h-[90%] bg-red rounded-xl bottom-0 right-0 absolute hidden lg:block" />
          <img
            src={img}
            alt=""
            className="sm:max-w-[500px] mx-auto w-[90%] h-[90%] relative lg:absolute rounded-xl top-0 left-0"
          />
        </div>
      </section>

      {/* section2 */}
      <section className="bg-[#F1F5FD] py-[100px] px-5">
        <div className="max-w-[1300px] mx-auto">
          <h1 className="text-center text-4xl">
            ARV Delivery Services: <br />
            <span className="text-2xl text-lblack">
              Unlocking the Power of Delivery.
            </span>
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-10">
            <div className="bg-white sm:max-w-[500px] mx-auto p-3 rounded py-6 text-center shadow-xl">
              <BsCheckCircleFill className="text-3xl mx-auto mb-5 text-lblack" />
              <h1 className="font-bold text-xl mb-4">Delivery Service</h1>
              <p className="mb-4 text-lblack text-lg">
                We provide a delivery service for ARV drugs, allowing patients
                to order their drugs at the comfort of their homes.
              </p>
            </div>
            <div className="bg-white sm:max-w-[500px] mx-auto p-3 rounded py-6 text-center shadow-xl">
              <BsCheckCircleFill className="text-3xl mx-auto mb-5 text-lblack" />
              <h1 className="font-bold text-xl mb-4">Chatbot Service</h1>
              <p className="mb-4 text-lblack text-lg">
                We offer a chatbot service to answer any questions patients may
                have regarding their ARV drugs.
              </p>
            </div>
            <div className="bg-white sm:max-w-[500px] mx-auto p-3 rounded py-6 text-center shadow-xl">
              <BsCheckCircleFill className="text-3xl mx-auto mb-5 text-lblack" />
              <h1 className="font-bold text-xl mb-4">Online Payment</h1>
              <p className="mb-4 text-lblack text-lg">
                We provide online payment options for patients to pay for their
                ARV drugs.
              </p>
            </div>
            <div className="bg-white sm:max-w-[500px] mx-auto p-3 rounded py-6 text-center shadow-xl">
              <BsCheckCircleFill className="text-3xl mx-auto mb-5 text-lblack" />
              <h1 className="font-bold text-xl mb-4">Prescription Refill</h1>
              <p className="mb-4 text-lblack text-lg">
                We offer prescription refill services to ensure that patients
                get their ARV drugs on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section3 */}
      <section className="">
        <div className="max-w-[1300px] mx-auto p-5 py-[150px]">
          <h2 className="text-center text-2xl font-bold">
            Our ARV Delivery service <br /> offers convenient and reliable
            delivery of ARV drugs, with added chatbot services to answer <br />{" "}
            any questions and provide extra support.
          </h2>

          <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
            <div className="flex gap-4">
              <BsCheckCircleFill className="text-5xl mx-auto mb-5 text-lblack" />
              <div>
                <p className="text-xl font-bold mt-3">Convenience</p>
                <p className="text-lg text-lblack">
                  Patients can order their drugs from the comfort of their
                  homes, without having to visit the clinic.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <BsCheckCircleFill className="text-5xl mx-auto mb-5 text-lblack" />
              <div>
                <p className="text-xl font-bold mt-3">Ease of Access</p>
                <p className="text-lg text-lblack">
                  Patients can access their drugs easily and quickly, with no
                  need to travel to clinics.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <BsCheckCircleFill className="text-5xl mx-auto mb-5 text-lblack" />
              <div>
                <p className="text-xl font-bold mt-3">Reduced Waiting Time</p>
                <p className="text-lg text-lblack">
                  Patients can receive their drugs in a timely manner, without
                  having to wait in long queues at clinics.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-black py-[100px] px-5 text-center">
        <h1 className="text-white text-4xl font-bold">
          Convenient ARV Delivery
        </h1>
        <h2 className="text-white mt-5 text-lg">
          Enjoy the convenience of ARV Delivery <br /> Order your drugs now and
          have them delivered to your home!
        </h2>
        <Link to="/login">
          <button className="bg-red text-white px-5 p-3 text-xl rounded-full hover:scale-[98%] w-full max-w-[250px] mt-10">
            Login
          </button>
        </Link>
      </footer>

      <section className="bg-black flex items-center justify-center px-5 py-[50px]">
        <p className="text-white text-lg">Designed by : eeddue 👍</p>
      </section>
    </div>
  );
}

export default Home;
