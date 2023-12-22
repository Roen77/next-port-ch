import RoundedIcon from '@/app/_ui/icon/RoundedIcon';
import Image from 'next/image';
import React from 'react'


type Props = {
    item: {
        title: string;
        link: string;
        linkTitle?: string;
    }
}

function RenderContentItem({ item }: Props) {

    return (
        <div className='relative z-[600] border-t-[1px] p-2 border-gray'>
            <a href={item.link}
                target="_blank"
                rel="noopener noreferrer" className="relative flex  px-2 py-2 overflow-hidden font-medium transition-all  rounded-xl group hover:bg-slate-200">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#02897B] rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <div className="flex items-center relative w-full text-left text-black ">
                    <RoundedIcon >
                        <Image src={`${item.linkTitle || item.title}.svg`} width={20} height={20} alt={item.title} />
                    </RoundedIcon>
                    <p className='ml-3 text-sm'>{item.title}</p>
                </div>
            </a>
        </div >
    )
}

export default RenderContentItem