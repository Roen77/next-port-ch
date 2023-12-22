import React from 'react'
import { tv } from 'tailwind-variants';

const button = tv({
    slots: {
        base: "hover:bg-slate-200 w-[50px] h-[50px] rounded-full flex justify-center items-center ",
    },
});

const { base } = button()

type Props = {
    icon: React.ReactNode
}

function RoundHoverButton({ icon }: Props) {
    return (
        <button className={base()}>
            {icon}
        </button>
    )
}

export default RoundHoverButton