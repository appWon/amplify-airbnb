import React from 'react'
import { MapMarker } from 'react-kakao-maps-sdk'
import icon from '../../../assetts/img/airBnb.png'

interface MarkerProps {
    longitude: number
    latitude: number
}

export const Marker: React.FC<MarkerProps> = props => {
    return (
        <MapMarker
            draggable
            position={{ lat: props.latitude, lng: props.longitude }}
            image={{
                src: icon,
                size: {
                    width: 35,
                    height: 35,
                },
                options: {
                    offset: {
                        x: 10,
                        y: 10,
                    },
                    style: {
                        width: 100,
                        height: 100,
                    },
                },
            }}
        />
    )
}
