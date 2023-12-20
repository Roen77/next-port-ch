import React from 'react'

type ListProps = {
    content: string;
    children?: React.ReactNode
}

type ListWrapperProps = {
    children: React.ReactNode
}
function Wrapper({ children }: ListWrapperProps) {
    return <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400">
        {children}
    </ul>
}

function LiWidthIcon({ content, children }: ListProps) {
    return <li className='pb-2'>
        <div>
            <div className='flex items-center'>
                <svg className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {content}
            </div>
            {children}
        </div>
    </li>
}

const UlList = {
    Wrapper,
    LiWidthIcon

}

export default UlList