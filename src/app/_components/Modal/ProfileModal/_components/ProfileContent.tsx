import List from '@/app/_components/List/List'
import React, { useCallback } from 'react'
import RenderContentItem from './RenderContentItem'


export const list = [{
    title: 'github',
    link: 'https://github.com/Roen77'
}, {
    title: 'blog',
    link: 'https://roen77.github.io/'
},
{
    title: '010-4016-1730',
    link: 'tel:010-4016-1730',
    linkTitle: 'phone'
}, {
    title: 'gksthd12345@hanmail.net',
    link: 'mailto:gksthd12345@hanmail.net',
    linkTitle: 'email'
}]

function ProfileContent() {
    const renderItem = useCallback(({ item, i }: { item: typeof list[0], i: number }) => {
        return <RenderContentItem key={i} item={item} />
    }, [])
    return (
        <div className='bg-[#F8FAFE] rounded-xl'>
            <List items={list} renderItem={renderItem} />
        </div>
    )
}

export default ProfileContent