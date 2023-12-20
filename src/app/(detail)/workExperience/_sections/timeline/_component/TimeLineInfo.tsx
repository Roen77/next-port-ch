import RoundedIcon from '@/app/_ui/icon/RoundedIcon'
import React from 'react'

type Props = {
    children: React.ReactNode
}
type DotProps = {
    icon: string;
}

type HeaderProps = {
    date: string;
    title: string;
}
type TitleProps = {
    title: string;
}
function Dot({ icon }: DotProps) {
    return <span className="absolute flex items-center justify-center bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <RoundedIcon size='sm'>
            {icon}
        </RoundedIcon>
    </span>
}

function Header({ title, date }: HeaderProps) {
    return <div className="items-center justify-between mb-3 sm:flex">
        <time className="mb-1  font-normal text-gray-400 sm:order-last sm:mb-0">
            {date}</time>
        <div className=" font-normal text-gray-500 lex dark:text-gray-300">{title}</div>
    </div>
}

function Title({ title }: TitleProps) {
    return <p className='mb-3 font-bold'>{title}</p>
}

function InnerBox({ children }: Props) {
    return <div className="p-3  font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
        {children}
    </div>
}

const TimLineInfo = {
    Dot,
    Header,
    InnerBox,
    Title

}

export default TimLineInfo