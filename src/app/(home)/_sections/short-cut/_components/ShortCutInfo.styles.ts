import { tv } from "tailwind-variants";


const outLine = tv({
    base:"rounded-full w-[100px] h-[100px] m-auto bg-icon-gray flex justify-center items-center"
})
const innerLine = tv({
    base:" w-[60px] h-[60px] rounded-full text-white flex justify-center items-center",
    variants:{
        color: {
            default:'bg-slate-300',
            blue:'bg-logo-blue/70',
            red:'bg-logo-red/70',
            green:'bg-logo-green/70',
            yell:'bg-logo-yell/70'
        },
        size:{
            lg:'text-lg',

        },
    }
    ,defaultVariants:{
        color:'default'
    }
})



 const shortCutStyle = {
    outLine,innerLine
}
export default shortCutStyle