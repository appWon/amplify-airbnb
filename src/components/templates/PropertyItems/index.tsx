import React from 'react'
import { Pagination } from '@mui/material'

import { PropertyItemsContainer } from './style.propertyList'
import { PropertyItem } from '../../organisms/PropertyItem'
import { ListPropertiesQuery } from '../../../API'
import { PropertySkeleton } from '../../molecules/PropertySkeleton'

interface PropertyItemsProps extends ListPropertiesQuery {
    mapFold: boolean
}

export const PropertyItems: React.FC<PropertyItemsProps> = props => {
    const { mapFold, listProperties } = props

    // React.useEffect(() => {
    //     console.log(1)
    //     navigator.geolocation.getCurrentPosition(position => {
    //         console.log(position.coords.latitude, position.coords.longitude)
    //     })
    //     console.log(2)
    // }, [])

    return (
        <PropertyItemsContainer mapFold={mapFold}>
            <h4>300개 이상의 숙소</h4>
            <h1>지도에서 선택한 지역의 숙소</h1>
            {/* <PlaceFilterPlaceList
        facility={facility}
        houseType={houseType}
        priceValue={priceValue}
        setfacility={setfacility}
        setHouseType={setHouseType}
        setPriceValue={setPriceValue}
      /> */}
            <span className="notice">
                여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
                있습니다.
            </span>
            <div className="layoutLine"></div>
            {/* 리스트 시작 */}
            {/* {listProperties?.items.length
                ? listProperties?.items.map(item => (
                      <PropertyItem key={`item_${item.id}`} {...item} />
                  ))
                : [...Array(3)].map((_, index) => (
                      <PropertySkeleton key={`skeleton_${index}`} />
                  ))} */}
            <PropertySkeleton />
            {/* 리스트 끝 */}
            <div className="pageNate">
                <Pagination count={40} />
            </div>
        </PropertyItemsContainer>
    )
}
