import React from 'react'

type Props = {
  title: React.ReactNode
  renderContent: React.ReactNode
}
function ContentBox({ title, renderContent }: Props) {
  return (
    <div className="pr-10 pt-5  max-[570px]:pr-5">
      <h3 className="text-2xl text-content">
        {title}
      </h3>
      <p className="py-3">
        {renderContent}
      </p>
    </div>
  )
}

export default ContentBox