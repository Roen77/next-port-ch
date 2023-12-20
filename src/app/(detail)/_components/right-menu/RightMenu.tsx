import List from '@/app/_components/List/List';
import React from 'react'

type Props = {
    title:string;
}
function RightMenu<ItemType extends any>({items,renderItem,title}:{items:ItemType[],renderItem:({item,i}:{item:ItemType,i:number})=>React.ReactNode,[key:string]: any}) {
  return (
    <div className="absolute right-[-330px] border-[1px] border-gray rounded-2xl ml-[20px] min-w-[300px]">
    <p className="px-5 py-5">{title}</p>
    <List items={items} renderItem={renderItem} />
    {/* <ul>
      <li className="flex justify-between items-center border-b-[1px] px-5 py-3 border-gray">
        <div className="flex justify-center items-center">
          <Image
            src="/googlemic_clr_24px.svg"
            alt="googlemic_clr icon"
            width={26}
            height={24}
          />
          <div>
            <p>github</p>
            <span>github 주소입니다.</span>
          </div>
        </div>
      </li>
      <li className="flex justify-between items-center border-b-[1px] px-5 py-3 border-gray">
        <div className="flex justify-center items-center">
          <Image
            src="/googlemic_clr_24px.svg"
            alt="googlemic_clr icon"
            width={26}
            height={24}
          />
          <div>
            <p>github</p>
            <span>github 주소입니다.</span>
          </div>
        </div>
      </li>
    </ul> */}
  </div>
  )
}

export default RightMenu