import React from 'react'
import shortCutStyle from './ShortCutInfo.styles'
import { VariantProps } from 'tailwind-variants'
import Link from 'next/link'
import Image from 'next/image'


export type InnerLineColorProps = Pick<VariantProps<typeof shortCutStyle.innerLine>, 'color'>['color']

type Props = {
  children: React.ReactNode
}
interface LinkProps extends VariantProps<typeof shortCutStyle.linkWrapper> {
  children: React.ReactNode
  link: string
}
interface InnerLineProps extends VariantProps<typeof shortCutStyle.innerLine> {
  children: React.ReactNode

}

interface InnerIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  icon: string;
  width?: number;
  height?: number;
}

interface ShortCutTitleProps extends VariantProps<typeof shortCutStyle.title> {
  title: string;

}

function LinkWrapper({ link, children }: LinkProps) {
  return <Link className={shortCutStyle.linkWrapper()} href={`${link}`}>{children}</Link>



}

function OuterLine({ children }: Props) {
  return <div className={shortCutStyle.outLine()}>
    {children}
  </div>

}
function InnerLine({ children, color, size }: InnerLineProps) {
  return <span className={shortCutStyle.innerLine({ color, size })}>
    {children}</span>
}

function InnerIcon({ icon, width = 30, height = 30, ...props }: InnerIconProps) {
  return <Image src={`${icon}.svg`} width={width} height={height} {...props} alt={icon as string} priority />
}
function ShortCutTitle({ title, size }: ShortCutTitleProps) {
  return (
    <p className={shortCutStyle.title({ size })}>{title}</p>
  )
}

const ShortCutInfo = {
  LinkWrapper,
  OuterLine,
  InnerLine,
  ShortCutTitle,
  InnerIcon
}

export default ShortCutInfo