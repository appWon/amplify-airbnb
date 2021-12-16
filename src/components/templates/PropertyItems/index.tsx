import React from 'react'
import { Pagination } from '@mui/material'

import { PropertyItemsContainer, PropertyListWapper, MapWapper } from './style.propertyList'
import { PropertyItem } from '../../organisms/PropertyItem'
import { PropertySkeleton } from '../../molecules/PropertySkeleton'
import { KakaoMap } from '../../organisms/KakaoMap'
import { PropertyItemsConnection } from '../../../API'

interface PropertyItemsProps {
    isLoading: boolean
    pageCount: number
    fetchData: PropertyItemsConnection | null
    onChangePage: (arg: number) => void
}

export const PropertyItems: React.FC<PropertyItemsProps> = props => {
    const { fetchData, isLoading, pageCount, onChangePage } = props

    const [mapFold, setMapFold] = React.useState<boolean>(false)

    return (
        <PropertyItemsContainer>
            <PropertyListWapper mapFold={mapFold}>
                <h4>300개 이상의 숙소</h4>
                <h1>지도에서 선택한 지역의 숙소</h1>
                <span className="notice">
                    여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.
                </span>
                <div className="layoutLine"></div>
                {fetchData?.items?.length
                    ? fetchData?.items.map(
                          (item, index) => item && <PropertyItem key={`item_${index}`} {...item} />
                      )
                    : [...Array(3)].map((_, index) => (
                          <PropertySkeleton key={`skeleton_${index}`} />
                      ))}
                <div className="pageNate">
                    <Pagination
                        page={pageCount}
                        onChange={(_, page) => onChangePage(page)}
                        count={fetchData?.total ? Math.ceil(fetchData.total / 10) : 0}
                    />
                </div>
            </PropertyListWapper>
            <MapWapper>
                <KakaoMap
                    mapFold={mapFold}
                    isLoading={isLoading}
                    propertys={fetchData?.items}
                    onMapFoldChange={setMapFold}
                />
            </MapWapper>
        </PropertyItemsContainer>
    )
}
