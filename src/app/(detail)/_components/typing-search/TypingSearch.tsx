"use client"
import Typing from '@/app/_components/TypingInput/TypingInput'
import TypingAnimation from '@/app/_ui/typing/TypingAnimation'
import Image from 'next/image'
import React from 'react'

type Props = {
    typing: string
}
function TypingSearch({ typing }: Props) {
    return (
        <div className='absolute top-[-66px] z-[600] max-[1340px]:relative max-[1340px]:top-0 max-[464px]:text-[10px]'>
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
                    typing,
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
    )
}

export default TypingSearch