import React from 'react'
import { VariantProps, tv } from "tailwind-variants";

const inputWrapper = tv({
  base: 'border-gray border-[1px] rounded-[44px] pl-14 pr-10 py-1 leading-10 shadow-3xl relative max-[1340px]:w-full max-[720px]:pt-2',
  variants: {
    width: {
      700: 'w-[700px]',
      820: 'w-[820px]'
    },
    height: {
      61: 'h-[61px]'
    },
    color: {
      orange: 'bg-orange-300'
    }
  },
  defaultVariants: {
    width: 700,
    height: 61
  }
})
const icon = tv({
  base: "top-0 h-full flex justify-center items-center",
  variants: {
    state: {
      ab: 'absolute',
      rl: 'relative'
    },
    position: {
      left5: 'left-5',
      right5: 'right-5'
    }
  },
  defaultVariants: {
    state: 'ab'
  }
});

type WrapperVariants = VariantProps<typeof inputWrapper>
type IconVariants = VariantProps<typeof icon>


interface WrapperProps extends WrapperVariants {
  children: React.ReactNode
}
interface IconProps extends IconVariants {
  children: React.ReactNode
}

function Icon({ children, ...rest }: IconProps) {
  return <div className={icon(rest)}>{children}</div>
}

function Wrapper({ children, ...rest }: WrapperProps) {
  return <div className={inputWrapper(rest)}>{children}</div>
}



const Typing = {
  Icon,
  Wrapper,
}
export default Typing