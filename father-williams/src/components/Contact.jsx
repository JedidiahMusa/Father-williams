import React from "react";

function Contact() {
  return (
    <div className=" w-full p-4">
      <p className="w-full h-[4rem] flex items-center justify-center font-bold text-3xl ">
        CONTACT US
      </p>
      <p className="text-2xl ">
        Father Williams Abba Charitable Trust 14301 N. 87 St., Ste. 208 th
        Scottsdale, AZ 85260 480-584-3517
      </p>
      <p className="underline cursor-pointer text-blue-900 text-2xl">info@abbacharitabletrust.org</p>
      <div className="w-full flex items-center justify-center">
        <button className="bg-[#ffb300] flex w-full md:w-[50%] hover:scale-102 md:text-[1.1rem] text-black font-bold py-5 px-4 items-center justify-center rounded-full mt-4">DOWNLOAD SCHOLARSHIP FORMS</button>
      </div>
      
    </div>
  );
}

export default Contact;
