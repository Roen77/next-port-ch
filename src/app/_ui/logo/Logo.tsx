import React from 'react'
import { VariantProps, tv } from "tailwind-variants";

const logoWrapper = tv({ slots:{
    container:'flex justify-center items-center'
}})
const logo = tv({
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
        lg: "text-7xl",
      },
      bold:{
        base:'font-normal',
        semi:'font-semibold'
      }
    },
    defaultVariants: {
      size: "lg",
      color: "blue",
    }
  });

const {container} = logoWrapper()

type LogoVariants = VariantProps<typeof logo>

interface Props extends LogoVariants {

}
function Logo(props:Props) {

const logoStyle = (style:LogoVariants) => logo({...style,...props})

  return (
    <div className={container()}>
    <h1 className={logo(({bold:'semi'}))}>
      <span className={logoStyle({color:'blue'})}>P</span>
      <span className={logoStyle({color:'red'})}>o</span>
      <span className={logoStyle({color:'yell'})}>r</span>
      <span className={logoStyle({color:'green'})}>t</span>
      <span className={logoStyle({color:'red'})}>p</span>
      <span className={logoStyle({color:'yell'})}>o</span>
      <span className={logoStyle({color:'blue'})}>l</span>
      <span className={logoStyle({color:'green'})}>i</span>
      <span className={logoStyle({color:'yell'})}>o</span>
    </h1>
  </div>
  )
}

export default Logo