import { tv } from "tailwind-variants";

const star = tv({
    base:'ms-1',
    variants:{
        size:{
            sm:'w-4 h-4',
            md:'w-6 h-6'
        },
        color:{
            yellow:'text-yellow-300',
            gray:'text-gray-300 '
        }
    },
    defaultVariants:{
        size:'md',
        color:'yellow'
    }

})

export default star