import React, { MouseEventHandler } from 'react'
import HeaderPopupModal from '../HeaderPopupModal/HeaderPopupModal'
import MenuList from './_components/MenuList'




function MenuModal() {
    return <HeaderPopupModal>
        <div className='p-3 rounded-2xl bg-[#D2D2D2] min-w-[200px]'>
            <div className='bg-[#F8FAFD] rounded-2xl flex justify-center items-center flex-wrap p-2'>
                <MenuList />
            </div>
        </div>
    </HeaderPopupModal>
}

export default MenuModal