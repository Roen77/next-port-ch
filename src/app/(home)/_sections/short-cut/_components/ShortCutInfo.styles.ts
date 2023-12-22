import { tv } from "tailwind-variants";

const linkWrapper = tv({
    base:'block rounded-lg hover:bg-slate-200 py-5',

})
const outLine = tv({
    base:"rounded-full w-[100px] h-[100px] m-auto bg-icon-gray flex justify-center items-center max-[720px]:w-[70px] max-[720px]:h-[70px]"
})
const innerLine = tv({
    base:" w-[60px] h-[60px] rounded-full text-white flex justify-center items-center",
    variants:{
        color: {
            default:'bg-slate-300',
            blue:'bg-logo-blue/50',
            red:'bg-logo-red/50',
            green:'bg-logo-green/50',
            yell:'bg-logo-yell/50'
        },
        size:{
            md:'w-[50px] h-[50px]',
            lg:'w-[100px] h-[100px]',
        },
    }
    ,defaultVariants:{
        color:'default',
        size:'md'
    }
})


const title = tv({
    base:'my-2 text-center',
    variants:{
        size:{
            sm:'text-sm',
            base:'text-base',
            lg:'text-lg'
        }
    },
    defaultVariants:{
        size:'lg'
    }
})

 const shortCutStyle = {
    outLine,innerLine,title,linkWrapper
}
export default shortCutStyle