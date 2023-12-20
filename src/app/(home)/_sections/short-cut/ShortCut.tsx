import List from '@/app/_components/List/List'
import React from 'react'
import RenderShortCutItem from './_templates/RenderShortCutItem'


const menu = ['About Me', 'Work Experience', 'Projects', 'Skills']
const color = ['blue', 'red', 'yell', 'green']
const link = ['aboutMe', 'workExperience', 'projects', 'skills']

function ShortCut() {
  return (
    <List items={menu} color={color} link={link} renderItem={RenderShortCutItem} />
  )
}

export default ShortCut