import React from 'react'

import * as S from './style.markInfoWindow'
import { Property } from '../../../API'
import { SliderImage } from '../../molecules/SliderImage'

interface MarkInfoWindowPorps {
    property: Property | undefined
}

export const MarkInfoWindow: React.FC<MarkInfoWindowPorps> = props => {
    return (
        <S.MarkInfoWindowContainer>
            <S.MarkInfoWindowWapper>
                <SliderImage imgs={props.property?.images} />
            </S.MarkInfoWindowWapper>
        </S.MarkInfoWindowContainer>
    )
}
