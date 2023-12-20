import React from 'react'


type WrapperProps = {
    children: React.ReactNode
}
type LiProps = {
    content: string;
}
function Wrapper({ children }: WrapperProps) {
    return <ul className="ml-5 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">{children}</ul>
}

function LiWidthDot({ content }: LiProps) {
    return <li>{content}</li>

}

const SubUlList = {
    Wrapper,
    LiWidthDot
}
export default SubUlList