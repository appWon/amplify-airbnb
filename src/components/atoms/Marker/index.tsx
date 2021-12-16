import React from 'react'
import { MapMarker } from 'react-kakao-maps-sdk'
import { renderToString } from 'react-dom/server'

import icon from '../../../assetts/img/airBnb.png'
import { Property } from '../../../API'
import { MarkerContainer } from './style.marker'
import { MarkInfoWindow } from '../../organisms/MarkInfoWindow'

interface MarkerProps {
    longitude: number
    latitude: number
    property?: Property
    map: kakao.maps.Map
}

export const Marker: React.FC<MarkerProps> = props => {
    const [mark, setMark] = React.useState<kakao.maps.Marker>()
    const [infoWindow, setInfoWindow] = React.useState<kakao.maps.InfoWindow | null>(null)

    const handleClickMap = () => {
        infoWindow && infoWindow.close()
        setInfoWindow(null)
    }

    const handleClickMark = () => {
        !infoWindow &&
            setInfoWindow(
                new kakao.maps.InfoWindow({
                    map: props.map,
                    content: renderToString(<MarkInfoWindow property={props.property} />),
                    position: new kakao.maps.LatLng(props.latitude + 0.002, props.longitude),
                })
            )
    }

    React.useEffect(() => {
        mark && kakao.maps.event.addListener(mark, 'click', handleClickMark)

        return () => mark && kakao.maps.event.addListener(mark, 'click', handleClickMark)
    }, [mark, infoWindow])

    React.useEffect(() => {
        kakao.maps.event.addListener(props.map, 'click', handleClickMap)

        return () => kakao.maps.event.addListener(props.map, 'click', handleClickMap)
    }, [mark, infoWindow])

    return (
        <MarkerContainer>
            <MapMarker
                position={{ lat: props.latitude, lng: props.longitude }}
                image={{
                    src: icon,
                    size: {
                        width: 30,
                        height: 30,
                    },
                    options: {
                        offset: {
                            x: 15,
                            y: 25,
                        },
                    },
                }}
                clickable={true}
                onCreate={setMark}
            />
        </MarkerContainer>
    )
}
