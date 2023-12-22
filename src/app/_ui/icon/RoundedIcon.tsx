
import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'


const roundedIcon = tv({
    base: 'flex justify-center items-center',
    variants: {
        round: {
            md: 'rounded-md',
            full: 'rounded-full'
        },
        size: {
            sm: "w-[20px] h-[20px]",
            md: "w-[40px] h-[40px]",
            lg: "w-[80px] h-[80px]",
        },
        bg: {
            green: 'bg-[#02897B]',
            gray: 'bg-slate-300'
        },

    },
    defaultVariants: {
        round: 'full',
        size: 'md',
        bg: 'gray'
    }
})

interface Props extends VariantProps<typeof roundedIcon> {
    children: React.ReactNode
}
function RoundedIcon({ children, ...rest }: Props) {

    return (
        <div className={roundedIcon(rest)}>{children}</div>
    )
}

export default RoundedIcon