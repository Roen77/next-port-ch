"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function SearchHeader() {
  return (
    <div className="w-full py-5 bg-white">
      <div className="relative max-w-[1400px] m-auto w-full px-5 flex justify-between items-end">
        <div className="flex justify-center items-center">
          <Link href="/">
            <h1 className="text-3xl mr-10">
              <span className="text-logo-blue">P</span>
              <span className="text-logo-red">o</span>
              <span className="text-logo-yell">r</span>
              <span className="text-logo-green">t</span>
              <span className="text-logo-red">p</span>
              <span className="text-logo-yell">o</span>
              <span className="text-logo-blue">l</span>
              <span className="text-logo-green">i</span>
              <span className="text-logo-red">o</span>
            </h1>
          </Link>
          <div className="border-gray border-[1px] rounded-[44px] w-[810px] h-[61px]  px-10 py-1 leading-10 shadow-3xl relative">
            {/* search content */}
            <TypeAnimation
              sequence={[
                "About Me", // Types 'One'
                1000, // Waits 1s

                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={1}
              style={{
                fontSize: "2em",
                display: "inline-block",
                fontWeight: 700,
              }}
            />
            {/* icon */}
            <div className="absolute flex justify-center items-center right-5 top-0 h-full">
              <Image
                src="/googlemic_clr_24px.svg"
                alt="googlemic_clr icon"
                width={26}
                height={24}
                priority
              />

              <div className="px-3">
                <Image
                  src="/lens_icon.svg"
                  alt="lens icon"
                  width={26}
                  height={24}
                  priority
                />
              </div>
              <Image
                src="/icon_search.svg"
                alt="search icon"
                width={24}
                height={24}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
