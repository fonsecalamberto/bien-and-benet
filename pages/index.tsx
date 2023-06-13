import Image from "next/image";
import React from "react";
import NavLink from "@/components/atoms/Link";

function index() {
  return (
    <>
      {/* Header */}
      <header className="flex sticky justify-center w-full h-24 border-b bg-white px-12 top-0 z-40">
        <div className="flex container justify-between items-center">
          {/* logo */}
          <div className="flex">
            <h1>Bien and Benet</h1>
          </div>
          {/* navigationmenu */}
          <nav className="hidden lg:flex  gap-x-8">
            <NavLink href="#" text="Home" />
            <NavLink href="/#invitation" text="Invitation" />
          </nav>
        </div>
      </header>
      {/* Body */}

      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="relative container min-h-screen bg-slate-600">
          <Image
            src="/images/2.jpg"
            alt="alt"
            width={1920}
            height={1080}
            style={{
              position: "absolute",
              objectFit: "cover",
              objectPosition: "bottom",
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <div className="flex flex-col container items-center justify-center w-full py-8 space-y-4">
          <p className="lg:text-3xl text-xl font-bold text-center text-[vw]">
            A classic.
            <br />
            Reimagined.
          </p>

          <p className="lg:text-sm text-gray-500 px-[30%] text-center">
            Create big, smaller, with the new Polaroid Go camera. Meet your
            portable, wearable, partner in creativity: one small camera, lots of
            big ideas, and all the features you love from our classic models.
          </p>
        </div>
        {/* grid 2x2 or flex w-1/2 */}
        {/* invitation */}
        <div
          className="container grid grid-cols-1 lg:grid-cols-2 gap-2 w-full"
          id="invitation"
        >
          <Image
            alt="invitation-1"
            src={"/images/invi1.jpg"}
            width={1000}
            height={1000}
            className="border shadow-2xl"
          />
          <Image
            alt="invitation-2"
            src={"/images/invi2.jpg"}
            width={1000}
            height={1000}
            className="border shadow-2xl"
          />

          <Image
            alt="invitation-3"
            src={"/images/invi3.jpg"}
            width={1000}
            height={1000}
            className="border shadow-2xl"
          />
          <Image
            alt="invitation-4"
            src={"/images/invi4.jpg"}
            width={1000}
            height={1000}
            className="border shadow-2xl"
          />
        </div>
        <br />
        {/* Footer */}
      </div>
    </>
  );
}

export default index;
