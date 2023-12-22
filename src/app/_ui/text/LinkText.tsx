import React from 'react'

type Props = {
    link: string;
    title: string;
}
function LinkText({ link, title }: Props) {
    return (
        <a href={link}
            className='border-b-2 inline-flex items-end  text-content relative z-[700]'
            target="_blank"
            rel="noopener noreferrer" >
            {title}
            <svg className="rtl:rotate-180 w-2.5 h-2.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </a>
    )
}

export default LinkText