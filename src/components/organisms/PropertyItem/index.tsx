import React from 'react'

import { PropertyItemContainer } from './style.property'
import { SliderImage } from '../../molecules/SliderImage'
import { Grade } from '../../atoms/Grade'
import { SliderItem } from '../../atoms/SliderImg'
import noImg from '../../../assetts/img/noImage.png'

interface PropertyItemProps {
    id: string
    title: string
    price: number
    capacity: number
    type?: {
        id: string
        name: string
    } | null
    images?: {
        items: Array<{
            id: string
            url: string
        }>
    } | null
    facility: {
        items: Array<{
            facility: {
                name: string
            }
        }>
    } | null
}

export const PropertyItem: React.FC<PropertyItemProps> = props => {
    return (
        <PropertyItemContainer>
            <SliderImage imgs={props.images?.items} />
            <div className="content">
                <div className="content-heade">
                    <div className="sub-title">{`수정중의 ${props.type?.name}`}</div>
                    <div className="title">{props.title}</div>
                </div>
                <div className="content-body">
                    <span className="capacity">
                        <span>{`· 최대인원 ${props.capacity} 명`}</span>
                        <span>{`·${props.type?.name}`}</span>
                    </span>
                    <div className="options">
                        {props.facility?.items?.map(({ facility }, index) => (
                            <span
                                className="option"
                                key={`${facility}_${index}`}
                            >{`· ${facility.name} `}</span>
                        ))}
                    </div>
                </div>
                <div className="content-footer">
                    <Grade value={4.64} />
                    <div className="price-warpper">
                        <span className="price">₩ {props.price.toLocaleString()}</span>
                        <span className="perDay">/ 일</span>
                    </div>
                </div>
            </div>
        </PropertyItemContainer>
    )
}
