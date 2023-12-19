import React from 'react'
import ShortCutInfo, { InnerLineColorProps } from '../_components/ShortCutInfo'


type RestProps = {
    color:string[]
    link:string[]
}
interface Props  {
    item:string,
    i:number;
}

function RenderShortCutItem({item,i,...restProps}:Props) {
    const {color,link} = restProps as RestProps;

  return (
    <div key={i} className="rounded-lg basis-1/4 hover:bg-slate-200 py-5">
   <ShortCutInfo.LinkWrapper link={link[i]}>
    <ShortCutInfo.OuterLine>
        <ShortCutInfo.InnerLine title={item} color={color[i] as InnerLineColorProps}/>
    </ShortCutInfo.OuterLine>
    <ShortCutInfo.ShortCutTitle title={item}/>
   </ShortCutInfo.LinkWrapper>
  </div>
  )
}

export default RenderShortCutItem