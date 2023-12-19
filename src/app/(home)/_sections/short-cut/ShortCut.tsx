import List from '@/app/_components/List/List'
import React from 'react'
import RenderShortCutItem from './_templates/RenderShortCutItem'


const menu = ['AboutMe','Work Experience','Projects','Skills']
const color = ['blue','red','yell','green']
const link = ['search','search','searach','search']

function ShortCut() {
  return (
    <List items={menu} color={color} link={link} renderItem={RenderShortCutItem} />
  )
}

export default ShortCut