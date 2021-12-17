import React from 'react'

import * as S from './style.markInfoWindow'
import { Property } from '../../../API'
import { SliderImage } from '../../molecules/SliderImage'
import { Grade } from '../../atoms/Grade'

interface MarkInfoWindowPorps {
    property: Property | undefined
}

export const MarkInfoWindow: React.FC<MarkInfoWindowPorps> = props => {
    return (
        <S.MarkInfoWindowContainer>
            <S.MarkInfoWindowWapper>
                <img
                    className="info_window_img"
                    src={props.property?.images[0]}
                    alt="지도 이미지"
                />
                <S.ContentWapper>
                    <Grade value={4.5} />
                    <div className="info_window_type">개인실</div>
                    <div className="info_window_title">
                        소돌 복돌이네 동물친구들 있어요~ 옛날흙집 온돌방이예요^^
                    </div>
                    <div className="price_wapper">
                        <div className="info_window_price">₩ 30,000 </div>
                        <div className="info_window_per-price"> / 박</div>
                    </div>
                </S.ContentWapper>
            </S.MarkInfoWindowWapper>
        </S.MarkInfoWindowContainer>
    )
}
