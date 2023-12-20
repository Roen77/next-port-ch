import RightMenu from '@/app/(detail)/_components/right-menu/RightMenu'
import React from 'react'
import RenderAboutMeItem from './templates/RenderAboutMeItem'

const menuItems = ['github','blog']
function AboutMeRightMenu() {
  return (
    <RightMenu title="이것을 찾으셨나요?" items={menuItems} renderItem={RenderAboutMeItem}/>
  )
}

export default AboutMeRightMenu