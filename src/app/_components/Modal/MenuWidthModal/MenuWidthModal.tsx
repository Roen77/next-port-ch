import RoundedIcon from '@/app/_ui/icon/RoundedIcon'
import useModal from '@/hooks/useCreateModal'
import React, { useEffect, useRef, useState } from 'react'
import Modal from '../Modal'
import RoundHoverButton from '@/app/_ui/button/RoundHoverButton'
import Image from 'next/image'
import { useParams } from 'next/navigation'





type Props = {
    modalPosition?: Element;
    RenderMenuItem: () => React.ReactNode
    RenderProfileItem: (arg: any) => React.ReactNode
}
function MenuWidthModal({ RenderMenuItem, RenderProfileItem, modalPosition }: Props) {
    const { onCloseModal, isShowModal, onShowModal, onToggleModal } = useModal()
    const [modalType, setModalType] = useState<{ type: string; element: React.ReactNode } | null>(null)

    const params = useParams()

    useEffect(() => {
        isShowModal && onCloseModal()
    }, [params])




    const onShowMenuModal = () => {
        // isProfile이고 오픈되어있다면 isProfile false로 변경
        // isProfile이 아니고 오픈되어있다면 모달 닫기
        // isProfile이 아니고 클로즈되어있다면 암것도 안함
        // if (isProfileModal && isShowModal) {
        //     setIsProfileModal(false)
        // } else if (!isProfileModal && isShowModal) {
        //     onCloseModal()
        // } else {
        //     setIsProfileModal(false)
        //     onShowModal()
        // }
        if (isShowModal) {
            modalType?.type === 'menu' ? onCloseModal() : setModalType({ type: 'menu', element: <RenderMenuItem /> })
        } else {
            setModalType({ type: 'menu', element: <RenderMenuItem /> })
            onShowModal()
        }



        // if (isShowModal) {
        //     setModalType(<MenuModal />)
        // } else {
        //     onShowModal()
        // }

    }

    const onShowProfileModal = () => {
        // isProfile이고 오픈되어있다면 close
        // isProfile이고 클로즈 되어있다면 open
        // isProfile이 아니고 오픈되어있다면 isProfile로 변경
        // isProfile이 아니고 클로즈되어있다면 암것도 안함

        if (isShowModal) {
            modalType?.type === 'profile' ? onCloseModal() : setModalType({ type: 'profile', element: <RenderProfileItem onClose={onCloseModal} /> })

        } else {
            setModalType({ type: 'profile', element: <RenderProfileItem onClose={onCloseModal} /> })
            onShowModal()
        }
        // setModalType(<ProfileModal onClose={onCloseModal} />)
        // onToggleModal()
        // if (isProfileModal && isShowModal) {
        //     onCloseModal()
        //     setIsProfileModal(false)
        // } else if (!isProfileModal && isShowModal) {
        //     setIsProfileModal(true)
        // } else {
        //     onShowModal()
        //     setIsProfileModal(true)
        // }
    }
    return (
        <>
            <div className="flex justify-center items-center relative profile z-[600]">
                <div onClick={onShowMenuModal}>
                    <RoundHoverButton icon={<Image src="menu_grid_icon.svg" alt='menu' width={30} height={30} priority />} />
                </div>

                <div className="ml-3 max-[720px]:ml-[2px]">
                    <button onClick={onShowProfileModal}>
                        <RoundedIcon bg='green'><span className='text-white'>태경</span></RoundedIcon>
                    </button>
                </div>
                {isShowModal && <Modal container={modalPosition || document.body}>
                    {modalType?.element}
                    {/* {isProfileModal ? <ProfileModal onClose={onCloseModal} /> : <MenuModal />} */}
                </Modal>}
            </div>
            {isShowModal && <div onClick={onCloseModal} className='fixed left-0 top-0 z-50 w-full h-full'></div>}
        </>
    )
}

export default MenuWidthModal