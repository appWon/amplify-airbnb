import React from 'react'
import { Map } from 'react-kakao-maps-sdk'
import { debounce } from 'lodash'

import { Spinner } from '../../molecules/Spinner'
import { FoldButton } from '../../molecules/FoldButton'
import { MapZoom } from '../../molecules/MapZoom'
import { KakaoMapContainer, ControllerContainer } from './style.kakaoMap'
import { ListPropertiesQuery } from '../../../API'

import onResizeEvent from 'element-resize-event'

interface KakaoMapProps {
    isLoading?: boolean
    properties?: ListPropertiesQuery | null
    mapFold?: boolean
    onMapFoldChange?: (arg: boolean) => void
}

export const KakaoMap: React.FC<KakaoMapProps> = props => {
    const mapRef = React.useRef<HTMLDivElement | null>(null)
    const [map, setMap] = React.useState<kakao.maps.Map>()
    const [viewLevel, setViewLevel] = React.useState<number>(5)

    const onZoomIn = () => {
        if (!map) return
        map.setLevel(map.getLevel() - 1)
    }
    const onZoomOut = () => {
        if (!map) return
        map.setLevel(map.getLevel() + 1)
    }

    const handleResized = () => {
        map?.relayout()
    }

    React.useEffect(() => {
        const element = mapRef?.current
        if (element) {
            onResizeEvent(element, debounce(handleResized, 100))
        }
    }, [map, mapRef])

    return (
        <KakaoMapContainer ref={mapRef}>
            <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: '100%', height: '100%' }}
                level={viewLevel}
                onCreate={setMap}
                onZoomChanged={map => setViewLevel(map.getLevel())}
            >
                {/* {!isLoading
                    ? ItemList?.listProperties?.items.map(item => (
                        <Marker
                            key={item.id}
                            latitude={item.latitude}
                            longitude={item.longitude}
                        />
                        ))
                    : ''} */}
            </Map>
            <ControllerContainer>
                <FoldButton
                    isFold={props.mapFold}
                    onChange={props.onMapFoldChange}
                />
                <Spinner onClick={handleResized}>
                    지도를 움직이며 검색하기
                </Spinner>
                <MapZoom onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
            </ControllerContainer>
        </KakaoMapContainer>
    )
}
