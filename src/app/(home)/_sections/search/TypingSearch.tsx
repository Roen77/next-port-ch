import Typing from '@/app/_components/TypingInput/TypingInput';
import TypingAnimation from '@/app/_ui/typing/TypingAnimation';
import Image from 'next/image';
import React from 'react'

function TypingSearch() {
  return (
    <Typing.Wrapper>
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
        "I'm a Frontend Developer.", // Types 'One'
        1000, // Waits 1s
        "My name is Han Taegyeong.", // Types 'One'
        1000, // Waits 1s
        () => {
            console.log("Sequence completed");
        },
        ]}/>
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
  )
}

export default TypingSearch