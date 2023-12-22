import ShortCutInfo, { InnerLineColorProps } from '@/app/(home)/_sections/short-cut/_components/ShortCutInfo'
import List from '@/app/_components/List/List'
import React from 'react'

const menu = ['About Me', 'Work Experience', 'Projects', 'Skills']
const color = ['blue', 'red', 'yell', 'green']
const link = ['aboutMe', 'workExperience', 'projects', 'skills']

function MenuList() {
    return (
        <List items={menu} color={color} link={link} renderItem={({ item, i }) => {
            return <div className='basis-1/2  pt-5' key={i}>
                <ShortCutInfo.LinkWrapper link={link[i]}>
                    <div className='flex justify-center items-center'>
                        <ShortCutInfo.InnerLine color={color[i] as InnerLineColorProps} >
                            <ShortCutInfo.InnerIcon width={22} height={22} icon={link[i]} />
                        </ShortCutInfo.InnerLine>
                    </div>
                    <ShortCutInfo.ShortCutTitle size='sm' title={item} />
                </ShortCutInfo.LinkWrapper>
            </div>
        }} />
    )
}

export default MenuList