import React, { MouseEventHandler } from 'react'
import IconWidthProfile from './_components/IconWidthProfile'
import ProfileContent from './_components/ProfileContent'
import RoundHoverButton from '@/app/_ui/button/RoundHoverButton'

import Image from 'next/image'
import HeaderPopupModal from '../HeaderPopupModal/HeaderPopupModal'

type Props = {
    onClose: () => void
}
function ProfileModal({ onClose }: Props) {
    const onHandleClick: MouseEventHandler = (e) => {
        e.stopPropagation()
    }
    return (
        <HeaderPopupModal>
            <div className='p-5 min-w-[400px]  min-h-[500px] rounded-2xl bg-[#EAEEF5]' >
                <div className='absolute right-3 top-3' onClick={onClose}>
                    <RoundHoverButton icon={<Image src="xIcon.svg" width={30} height={30} alt='x' />} />
                </div>
                <div className='mt-5'>
                    <IconWidthProfile />
                </div>
                <ProfileContent />
            </div>
        </HeaderPopupModal>
    )
}

export default ProfileModal