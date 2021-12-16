import React from 'react'

import { PropertyItemContainer } from './style.property'
import { SliderImage } from '../../molecules/SliderImage'
import { Grade } from '../../atoms/Grade'
import { SliderItem } from '../../atoms/SliderImg'
import noImg from '../../../assetts/img/noImage.png'
import { PropertyItemsConnectionItem } from '../../../API'

export const PropertyItem: React.FC<PropertyItemsConnectionItem> = props => {
    const { property } = props

    return (
        <PropertyItemContainer>
            <SliderImage imgs={property?.images} />
            <div className="content">
                <div className="content-heade">
                    <div className="sub-title">{`수정중의 ${'type name'}`}</div>
                    <div className="title">{property?.title}</div>
                </div>
                <div className="content-body">
                    <span className="capacity">
                        <span>{`· 최대인원 ${property?.capacity} 명`}</span>
                        <span>{`·${'type.name'}`}</span>
                    </span>
                    <div className="options">
                        {property?.facility?.map((value, index) => (
                            <span
                                className="option"
                                key={`facility_${index}`}
                            >{`· ${value} `}</span>
                        ))}
                    </div>
                </div>
                <div className="content-footer">
                    <Grade value={4.64} />
                    <div className="price-warpper">
                        <span className="price">₩ {property?.price.toLocaleString()}</span>
                        <span className="perDay">/ 일</span>
                    </div>
                </div>
            </div>
        </PropertyItemContainer>
    )
}
