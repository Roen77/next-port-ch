import RoundedIcon from '@/app/_ui/icon/RoundedIcon'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'

function Profile() {
    const [isShowProfile, setIsShowProfile] = useState(false)

    const handleCloseProfileModal = () => {
        console.log("a")
        setIsShowProfile(false)
    }
    const handleToggleProfileModal = () => {
        setIsShowProfile(prev => !prev)
    }
    return (
        <>
            <div className='relative profile z-[600]'>
                <button onClick={handleToggleProfileModal}>
                    <RoundedIcon bg='green'><span className='text-white'>태</span></RoundedIcon>
                </button>
                {isShowProfile && <Modal container={document.body}>
                    <div onClick={(e) => {
                        e.stopPropagation()
                    }} className='absolute right-12 top-16 border min-w-[400px] z-[600] min-h-[500px]'>aa</div>
                </Modal>}
            </div >
            {isShowProfile && <div onClick={handleCloseProfileModal} className='fixed left-0 top-0 z-50 w-full h-full'></div>}</>

    )
}

export default Profile