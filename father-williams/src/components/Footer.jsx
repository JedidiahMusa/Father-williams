import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
        <h2 className="font-[Anton] text-4xl md:text-5xl text-blue-400">
          CONTACT US
        </h2>

        <div className=" text-lg md:text-xl">
          <p>Father Williams Abba Charitable Trust</p>
          <p>14301 N. 87 St., Ste. 208</p>
          <p>Scottsdale, AZ 85260</p>
          <p>Phone: 480-584-3517</p>
        </div>

        

        <a
          href="mailto:info@abbacharitabletrust.org"
          className="text-blue-400 hover:underline text-lg md:text-xl"
        >
          info@abbacharitabletrust.org
        </a>
      </div>
    </footer>
  );
}

export default Footer;
