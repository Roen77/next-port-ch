import React, { MouseEventHandler } from 'react'


type Props = {
    children: React.ReactNode
}
function HeaderPopupModal({ children }: Props) {
    const onHandleClick: MouseEventHandler = (e) => {
        e.stopPropagation()
    }
    return (
        <div onClick={onHandleClick} className=' absolute right-5 top-[70px] shadow-lg z-[600] '>
            {children}
        </div>
    )
}

export default HeaderPopupModal