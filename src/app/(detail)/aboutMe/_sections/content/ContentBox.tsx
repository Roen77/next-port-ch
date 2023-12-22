import React from 'react'

type Props = {
  title: React.ReactNode
  renderContent: React.ReactNode
}
function ContentBox({ title, renderContent }: Props) {
  return (
    <div className="pr-10 pt-5  max-[570px]:pr-5">
      <h3 className="text-2xl text-content max-[464px]:text-xl">
        {title}
      </h3>
      <p className="py-3 max-[464px]:text-sm">
        {renderContent}
      </p>
    </div>
  )
}

export default ContentBox