import React, { CSSProperties, useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';


type SequenceElement = string | number | ((element: HTMLElement | null) => void | Promise<void>);

type Wrapper = 'p' | 'div' | 'span' | 'strong' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b';

interface Props extends CSSProperties {
  sequence: SequenceElement[]
  repeat?: number;
  wrapper?: Wrapper;
  isCursor?: boolean;

}
function TypingAnimation({ sequence, repeat = 3, wrapper = "span", isCursor = true, ...props }: Props) {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={sequence}
      wrapper={wrapper}
      cursor={isCursor}
      repeat={repeat}
      style={{
        fontSize: "2em",
        display: "inline-block",
        fontWeight: 700,
        ...props
      }}
    />
  )
}


export default TypingAnimation