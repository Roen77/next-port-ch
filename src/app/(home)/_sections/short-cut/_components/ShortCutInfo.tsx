import React from 'react'
import shortCutStyle from './ShortCutInfo.styles'
import { VariantProps } from 'tailwind-variants'
import Link from 'next/link'


export type  InnerLineColorProps = Pick<VariantProps<typeof shortCutStyle.innerLine>,'color'>['color']

type Props = {
    children:React.ReactNode
}
type LinkProps = {
    children:React.ReactNode
    link:string
}
type InnerLineProps = {
    title:string;
    color:InnerLineColorProps
}
type ShortCutTitleProps = {
    title:string;

}

function LinkWrapper ({link,children}:LinkProps) {
    return <Link href={`${link}`}>{children}</Link>

}

function OuterLine ({children}:Props){
  return  <div className={shortCutStyle.outLine()}>
              {children}
        </div>

}
function InnerLine ({title,color}:InnerLineProps){
  return  <span className={shortCutStyle.innerLine({color})}>{title? title[0] : ''}</span>
}
function ShortCutTitle({title}:ShortCutTitleProps) {
  return (
    <p className="my-2 text-lg text-center">{title}</p>
  )
}

const ShortCutInfo = {
    LinkWrapper,
    OuterLine,
    InnerLine,
    ShortCutTitle
}

export default ShortCutInfo