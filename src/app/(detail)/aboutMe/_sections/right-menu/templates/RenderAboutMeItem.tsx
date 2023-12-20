import React from 'react'

interface Props  {
    item:string,
    i:number;
}

function RenderAboutMeItem() {
  return (
    <div className="flex justify-between items-center border-t-[1px] px-5 py-3 border-gray">RenderAboutMeItem</div>
  )
}

export default RenderAboutMeItem