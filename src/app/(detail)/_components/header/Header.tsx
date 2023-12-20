"use client"
import Typing from '@/app/_components/TypingInput/TypingInput';
import Logo from '@/app/_ui/logo/Logo';
import TypingAnimation from '@/app/_ui/typing/TypingAnimation';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


function Header() {
  const pathname = usePathname()
  return (
    <div className="w-full py-5 bg-white">
      <div className="relative max-w-[1400px] m-auto w-full px-5 flex justify-between items-end">
        <div className="flex justify-center items-center">
          <div className='mr-5'>
            <Link href="/">
              <Logo size='lg2' bold='base' />
            </Link>
          </div>
          <Typing.Wrapper width={820}>
            <Typing.Icon position="left5" >
              <Image
                src="/icon_search.svg"
                alt="search icon"
                width={24}
                height={24}
                priority
              />
            </Typing.Icon>
            <TypingAnimation sequence={[
              pathname.split('/')[1],
              1000, // Waits 1s

            ]} />
            <Typing.Icon state='ab' position="right5" >
              <div className="px-3">
                <Image
                  src="/googlemic_clr_24px.svg"
                  alt="googlemic_clr icon"
                  width={26}
                  height={24}
                  priority
                />
              </div>
              <Image
                src="/lens_icon.svg"
                alt="lens icon"
                width={26}
                height={24}
                priority
              />
            </Typing.Icon>
          </Typing.Wrapper>
        </div>
      </div>
    </div>
  )
}

export default Header