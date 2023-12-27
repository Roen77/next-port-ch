import React from 'react'
import { VariantProps, tv } from "tailwind-variants";

const logoWrapper = tv({
  slots: {
    container: 'flex justify-center items-center'
  }
})
const logo = tv({
  base: 'max-[445px]:text-3xl',
  variants: {
    color: {
      blue: "text-logo-blue",
      red: "text-logo-red",
      yell: "text-logo-yell",
      green: "text-logo-green",
    },
    size: {
      sm: "text-lg",
      md: "text-base",
      lg2: 'text-3xl',
      lg3: "text-7xl",
    },
    bold: {
      base: 'font-normal',
      semi: 'font-semibold'
    }
  },
  defaultVariants: {
    size: "lg3",
    color: "blue",
  }
});

const { container } = logoWrapper()

type LogoVariants = VariantProps<typeof logo>

interface Props extends LogoVariants {

}
function Logo(props: Props) {

  const logoStyle = (style: LogoVariants) => logo({ ...style, ...props })
  // portfolio
  return (
    <div className={container()}>
      <h1 className={logoStyle({ bold: 'semi' })}>
        <span className={logoStyle({ color: 'blue' })}>P</span>
        <span className={logoStyle({ color: 'red' })}>o</span>
        <span className={logoStyle({ color: 'yell' })}>r</span>
        <span className={logoStyle({ color: 'green' })}>t</span>
        <span className={logoStyle({ color: 'red' })}>f</span>
        <span className={logoStyle({ color: 'yell' })}>o</span>
        <span className={logoStyle({ color: 'blue' })}>l</span>
        <span className={logoStyle({ color: 'green' })}>i</span>
        <span className={logoStyle({ color: 'yell' })}>o</span>
      </h1>
    </div>
  )
}

export default Logo