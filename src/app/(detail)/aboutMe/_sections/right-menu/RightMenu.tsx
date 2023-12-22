import RightMenu from '@/app/(detail)/_components/right-menu/RightMenu'
import React, { useCallback } from 'react'
import RenderAboutMeItem from './templates/RenderAboutMeItem'
import { list } from '@/app/_components/Modal/ProfileModal/_components/ProfileContent'
import RenderContentItem from '@/app/_components/Modal/ProfileModal/_components/RenderContentItem'



function AboutMeRightMenu() {
  const renderItem = useCallback(({ item, i }: { item: typeof list[0], i: number }) => {
    return <RenderContentItem key={i} item={item} />
  }, [])
  return (
    <RightMenu title="이것을 찾으셨나요?" items={list} renderItem={renderItem} />
  )
}

export default AboutMeRightMenu