import Image from "next/image";
import React from "react";
import { tv } from "tailwind-variants";

const header = tv({
  slots: {
    base: "absolute z-50 left-0 top-0 w-full flex justify-between items-center px-12 py-2",
    button: "hover:bg-slate-200 w-[50px] h-[50px] rounded-full flex justify-center items-center",

  },
});

const {base,button} = header()


function Header() {
  return (
    <header className={base()}>
      <div className="left"></div>
      <div className="left">
        <button className={button()}>
          <Image
            src="/menu_grid_icon.svg"
            alt="menu icon"
            width={26}
            height={28}
            priority
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
