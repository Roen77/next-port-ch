import React from 'react'

type Props = {
  content: string;
}
function Highlight({ content }: Props) {
  return (
    <b className="bg-highlight font-normal">
      {content}
    </b>
  )
}

export default Highlight