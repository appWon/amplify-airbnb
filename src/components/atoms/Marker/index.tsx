import React from 'react'
import { MapMarker } from 'react-kakao-maps-sdk'
import { renderToString } from 'react-dom/server'

import icon from '../../../assetts/img/airBnb.png'
import { Property } from '../../../API'
import { MarkerContainer } from './style.marker'
import { MarkInfoWindow } from '../../organisms/MarkInfoWindow'

interface MarkerProps {
    property?: Property
    map: kakao.maps.Map
}

export const Marker: React.FC<MarkerProps> = props => {
    const { property, map } = props
    const [mark, setMark] = React.useState<kakao.maps.Marker>()
    const [infoWindow, setInfoWindow] = React.useState<null | kakao.maps.InfoWindow>(null)

    function handleClickMap() {
        if (infoWindow && typeof infoWindow) {
            infoWindow.close()
            setInfoWindow(null)
        }
    }

    function handleClickMark() {
        if (property?.location) {
            setInfoWindow(
                new kakao.maps.InfoWindow({
                    map: map,
                    content: renderToString(<MarkInfoWindow property={props.property} />),
                    position: new kakao.maps.LatLng(
                        property?.location.lat + 0.002,
                        property?.location.lon
                    ),
                })
            )
        }
    }

    React.useEffect(() => {
        mark && kakao.maps.event.addListener(mark, 'click', handleClickMark)

        return () => mark && kakao.maps.event.addListener(mark, 'click', handleClickMark)
    }, [mark])

    React.useEffect(() => {
        kakao.maps.event.addListener(map, 'click', handleClickMap)

        return () => kakao.maps.event.addListener(map, 'click', handleClickMap)
    }, [infoWindow])

    return (
        <MarkerContainer>
            {property?.location && (
                <MapMarker
                    position={{ lat: property?.location.lat, lng: property?.location.lon }}
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
            )}
        </MarkerContainer>
    )
}
