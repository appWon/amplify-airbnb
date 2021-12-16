import React from 'react'

import { PropertyDetailContainer } from './style.propertyDetail'
import { PropertyDetailInfo } from '../../components/templates/PropertyDetailInfo'

export const PropertyDetail: React.FC = () => {
    return (
        <PropertyDetailContainer>
            <PropertyDetailInfo />
        </PropertyDetailContainer>
    )
}
