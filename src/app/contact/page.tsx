import React from "react";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="bg-gray-900 flex h-screen justify-center">
      <div className="flex flex-col gap-5 p-5 mt-20 ">
        <h1 className="text-white text-center text-6xl font-bold mt-4 ">
          Contact Us
        </h1>
        <p className="text-gray-400 sm:min-w-20 text-center">
          We're here to help with any question about our courses, program or
          events. Reach out and let us know how we can assist you in your
          musical journy.
        </p>
        <input
          type="email"
          className="rounded bg-black placeholder:text-gray-700 text-white  text-md p-4 outline-none"
          placeholder="Enter email address"
        />
        <textarea
          className="bg-black pl-5 pt-5 placeholder:text-gray-700 outline-none text-white"
          placeholder="Your message..."
          rows={8}
          cols={30}
        ></textarea>
        <button className="text-white border bg-green-600 rounded ">
          Send Message
        </button>
      </div>
      <Meteors number={100} />
    </div>
  );
}

export default page;
