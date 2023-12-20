"use client";

import Header from "./_sections/header/Header";
import Logo from "../_ui/logo/Logo";
import TypingSearch from "./_sections/search/TypingSearch";
import ShortCut from "./_sections/short-cut/ShortCut";



export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] m-auto w-full  h-screen relative">
        <section className="p-10 h-full flex justify-center items-center">
          <div>
            <Logo />
            <div>
              {/* search */}
              <div className="mt-10 pb-10">
                <TypingSearch />
              </div>
              {/* content */}
              <div className="flex justify-around items-center relative z-[200]">
                <ShortCut />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
