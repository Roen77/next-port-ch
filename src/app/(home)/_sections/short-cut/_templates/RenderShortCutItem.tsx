import React from 'react'
import ShortCutInfo, { InnerLineColorProps } from '../_components/ShortCutInfo'
import { title } from 'process'


type RestProps = {
    link: string[]
    color: string[]
}
interface Props {
    item: string,
    i: number;
}

function RenderShortCutItem({ item, i, ...restProps }: Props) {
    const { color, link } = restProps as RestProps;

    return (
        <div key={i} className=" basis-1/4 max-[720px]:basis-1/2 relative">
            <ShortCutInfo.LinkWrapper link={link[i]}>
                <ShortCutInfo.OuterLine>
                    <ShortCutInfo.InnerLine color={color[i] as InnerLineColorProps} >
                        <ShortCutInfo.InnerIcon icon={link[i]} />
                    </ShortCutInfo.InnerLine>
                </ShortCutInfo.OuterLine>
                <div className='h-[50px]'>
                    <ShortCutInfo.ShortCutTitle title={item} />
                </div>
            </ShortCutInfo.LinkWrapper>
        </div>
    )
}

export default RenderShortCutItem