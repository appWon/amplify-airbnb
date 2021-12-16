import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { SliderImageContainer } from './style.sliderImage'
import { SliderItem } from '../../atoms/SliderImg'
import noImg from '../../../assetts/img/noImage.png'

interface SliderImageProps {
    imgs?: Array<string | null>
}

export const SliderImage = (props: SliderImageProps) => {
    const settings = {
        dotsClass: 'slick-dots',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        initialSlide: 0,
        autoplay: false,
        arrows: true,
        nextArrow: (
            <MdKeyboardArrowRight style={{ width: '50px', height: '50px', color: 'black' }} />
        ),
        prevArrow: <MdKeyboardArrowLeft style={{ width: '50px', height: '50px' }} />,
    }

    return (
        <SliderImageContainer>
            <Slider {...settings}>
                {props.imgs?.length ? (
                    props.imgs.map(url => url && <SliderItem src={url} key={url} />)
                ) : (
                    <SliderItem src={noImg} width="50px" height="50px" />
                )}
            </Slider>
        </SliderImageContainer>
    )
}
