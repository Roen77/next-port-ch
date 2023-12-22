import RoundedIcon from '@/app/_ui/icon/RoundedIcon';
import React from 'react'

type Props = {
  title: string;
  icon: React.ReactNode
}
function ContentWithIcon({ title, icon }: Props) {
  return (
    <div className="flex  items-center mb-3">
      <div className="mr-3">
        <RoundedIcon>
          {icon}
        </RoundedIcon>
      </div>
      <p>{title}</p>
    </div>
  )
}

export default ContentWithIcon