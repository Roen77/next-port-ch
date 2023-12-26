"use client";

import Header from "./_sections/header/Header";
import Logo from "../_ui/logo/Logo";
import TypingSearch from "./_sections/search/TypingSearch";
import ShortCut from "./_sections/short-cut/ShortCut";
import { useEffect, useState } from "react";
import { Router } from "next/router";



export default function Home() {

  return (
    <>
      <Header />
      <div className="max-w-[1200px] m-auto w-full  min-h-screen relative">
        <section className="px-10 max-[720px]:p-5 min-h-screen flex justify-center items-center py-24">
          <div>
            <Logo />
            <div>
              {/* search */}
              <div className="w-full flex justify-center items-center">
                <div className="mt-10 pb-10 w-[700px]  max-[720px]:w-[445px] max-[720px]:text-[10px]  max-[450px]:w-[350px] max-[450px]:text-[8px]">
                  <TypingSearch />
                </div>
              </div>
              {/* content */}
              <div className="flex flex-wrap justify-around items-center relative z-[200]">
                <ShortCut />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
