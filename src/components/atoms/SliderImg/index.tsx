import React from 'react'

import { SliderItemContainer } from './style.sliderImg'

interface SliderItemProps {
    src: string
    width?: string | number
    height?: string | number
}

export const SliderItem: React.FC<SliderItemProps> = props => {
    const { width, height } = props

    return (
        <SliderItemContainer>
            <img
                src={props.src}
                style={{
                    width: width,
                    height: height,
                    objectFit: 'cover',
                    objectPosition: 'center center',
                }}
                alt="썸네일이미지"
            />
        </SliderItemContainer>
    )
}

SliderItem.defaultProps = {
    width: '300px',
    height: '200px',
}
