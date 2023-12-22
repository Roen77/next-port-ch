import RoundedIcon from '@/app/_ui/icon/RoundedIcon'
import React from 'react'

function IconWidthProfile() {
    return (
        <div className='flex justify-center items-center py-5'>
            <div>
                <div className='flex justify-center items-center'>
                    <RoundedIcon size='lg' bg='green'><span className='text-white text-3xl'>태경</span></RoundedIcon>
                </div>
                <div className='text-center my-2'>
                    <p className='text-2xl'>한태경</p>
                    <span className='text-slate-500'>@Front-End Engineer</span>
                </div>
            </div>
        </div>
    )
}

export default IconWidthProfile