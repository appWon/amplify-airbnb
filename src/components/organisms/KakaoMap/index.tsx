import React from 'react'
import { debounce } from 'lodash'
import { Map, MarkerClusterer } from 'react-kakao-maps-sdk'
import { useSelector, useDispatch } from 'react-redux'

import { KakaoMapContainer, ControllerContainer } from './style.kakaoMap'
import { Spinner } from '../../molecules/Spinner'
import { FoldButton } from '../../molecules/FoldButton'
import { MapZoom } from '../../molecules/MapZoom'
import { PropertyItemsConnectionItem } from '../../../API'
import { searchSelector } from '../../../store/selector'
import { UpdateLocation } from '../../../store/search/types'
import { AutoSearchButton } from '../../molecules/AutoSearchButton'
import { Marker } from '../../atoms/Marker'

interface KakaoMapProps {
    width?: string
    height?: string
    mapFold?: boolean
    isLoading?: boolean
    propertys?: (PropertyItemsConnectionItem | null)[] | undefined
    onMapFoldChange?: (arg: boolean) => void
}

export const KakaoMap: React.FC<KakaoMapProps> = props => {
    const { mapFold, width, height, isLoading, propertys, onMapFoldChange } = props

    const dispatch = useDispatch()
    const mapRef = React.useRef<HTMLElement | null>(null)

    const [map, setMap] = React.useState<kakao.maps.Map>()
    const [autoSearch, setAutoSearch] = React.useState<boolean>(true)
    const { location } = useSelector(searchSelector)

    function onZoomIn() {
        if (!map) return
        map.setLevel(map.getLevel() - 1)
    }

    function onZoomOut() {
        if (!map) return
        map.setLevel(map.getLevel() + 1)
    }

    function handleZoomChang(map: kakao.maps.Map) {
        map.getLevel()
    }

    function handleCenterChanged() {
        const center = map?.getCenter()

        if (autoSearch && center) {
            dispatch(
                UpdateLocation({
                    lat: center.getLat(),
                    lon: center.getLng(),
                })
            )
        }
    }

    React.useEffect(() => {
        map?.relayout()
        map?.panTo(new kakao.maps.LatLng(location.lat, location.lon))
    }, [mapFold])

    return (
        <KakaoMapContainer ref={mapRef}>
            <Map
                center={{
                    lat: location.lat,
                    lng: location.lon,
                }}
                style={{ width: width, height: height }}
                level={8}
                onCreate={setMap}
                onZoomChanged={handleZoomChang}
                onCenterChanged={debounce(handleCenterChanged, 1000)}
            >
                <MarkerClusterer averageCenter={true} minLevel={4}>
                    {propertys?.map((data, index) => {
                        if (map && data?.property) {
                            return (
                                <Marker
                                    map={map}
                                    property={data?.property}
                                    key={`kakao_mark_${index}`}
                                />
                            )
                        }
                    })}
                </MarkerClusterer>
            </Map>
            <ControllerContainer>
                <FoldButton isFold={mapFold} onChange={onMapFoldChange} />
                {isLoading ? (
                    <Spinner>지도를 움직이며 검색하기</Spinner>
                ) : (
                    <AutoSearchButton
                        checked={autoSearch}
                        onChange={setAutoSearch}
                        label={'지도를 움직이며 검색하기'}
                    />
                )}
                <MapZoom onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
            </ControllerContainer>
        </KakaoMapContainer>
    )
}

KakaoMap.defaultProps = {
    width: '100%',
    height: '100%',
}
