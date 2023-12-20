
import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'


const roundedIcon = tv({
    base: 'bg-orange-300 flex justify-center items-center',
    variants: {
        round: {
            md: 'rounded-md',
            full: 'rounded-full'
        },
        size: {
            sm: "w-[20px] h-[20px]",
            md: "w-[40px] h-[40px]",
        },
        bg: {
            green: 'bg-[#02897B]'
        },

    },
    defaultVariants: {
        round: 'full',
        size: 'md'
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