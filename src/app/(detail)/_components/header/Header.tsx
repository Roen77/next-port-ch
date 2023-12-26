"use client"
import MenuModal from '@/app/_components/Modal/MenuModal/MenuModal';
import MenuWidthModal from '@/app/_components/Modal/MenuWidthModal/MenuWidthModal';
import { ProfileModal } from '@/app/_components/Modal/ProfileModal';
import Typing from '@/app/_components/TypingInput/TypingInput';
import Logo from '@/app/_ui/logo/Logo';
import TypingAnimation from '@/app/_ui/typing/TypingAnimation';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'


function Header() {


  return (
    <div className="w-full py-2 min-w-[360px] bg-white z-[600] h-[80px]">
      <div className="relative max-w-[1400px] m-auto w-full h-full px-5 flex justify-between items-center">
        <div className="flex justify-center items-center relative z-[600]">
          <div className='mr-5 max-[1340px]:hidden block'>
            <Link href="/">
              <Logo size='lg2' bold='base' />
            </Link>
          </div>
        </div>
        <div className="max-[1340px]:block hidden absolute left-0 top-0 w-full h-[60px]">
          <div className='h-full flex justify-center items-center'>
            <Link href="/">
              <Logo size='lg2' bold='base' />
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute  z-[100] right-[2px] top-0 flex justify-between items-center px-8 py-4 max-[570px]:px-0'>
        <MenuWidthModal RenderMenuItem={MenuModal} RenderProfileItem={ProfileModal} />
      </div>
    </div>
  )
}

export default Header