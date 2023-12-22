import MenuModal from "@/app/_components/Modal/MenuModal/MenuModal";
import MenuWidthModal from "@/app/_components/Modal/MenuWidthModal/MenuWidthModal";
import { ProfileModal } from "@/app/_components/Modal/ProfileModal";
import React from "react";
import { tv } from "tailwind-variants";

const header = tv({
  slots: {
    base: "absolute z-[100] left-0 top-0 w-full flex justify-between items-center px-12 py-4 max-[720px]:px-4",
  },
});

const { base } = header()


function Header() {
  return (
    <header className={base()}>
      <div className="left"></div>
      <MenuWidthModal RenderMenuItem={MenuModal} RenderProfileItem={ProfileModal} />
    </header>
  );
}

export default Header;
