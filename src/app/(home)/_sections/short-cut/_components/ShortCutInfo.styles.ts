import { tv } from "tailwind-variants";


const outLine = tv({
    base:"rounded-full w-[100px] h-[100px] m-auto bg-icon-gray flex justify-center items-center"
})
const innerLine = tv({
    base:"bg-logo-blue w-[50px] h-[50px] rounded-full text-white flex justify-center items-center",
    variants:{
        color: {
            blue:'bg-logo-blue',
            red:'bg-logo-red',
            green:'bg-logo-green',
            yell:'bg-logo-yell'
        },
        size:{
            lg:'text-lg',

        }
    }
})



 const shortCutStyle = {
    outLine,innerLine
}
export default shortCutStyle