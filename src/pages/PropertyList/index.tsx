import React from 'react'
import { API } from 'aws-amplify'

import { PropertyContainer } from './style.propertyList'
import { PropertyItems } from '../../components/templates/PropertyItems'
import { KakaoMap } from '../../components/templates/KakaoMap'
import { ListPropertiesQuery } from '../../API'
import { listProperties } from '../../graphql/queries'

export const Property: React.FC = () => {
    const [mapFold, setMapFold] = React.useState<boolean>(false)
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [ItemList, setItemList] = React.useState<ListPropertiesQuery | null>(
        null
    )

    React.useEffect(() => {
        const query = async () => {
            try {
                setIsLoading(true)
                const result = (await API.graphql({
                    query: listProperties,
                })) as { data: ListPropertiesQuery }

                setItemList(result.data)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        query()
    }, [])

    return (
        <PropertyContainer>
            {!mapFold && <PropertyItems {...ItemList} mapFold={mapFold} />}
            <KakaoMap
                isLoading={isLoading}
                properties={ItemList}
                mapFold={mapFold}
                onMapFoldChange={setMapFold}
            />
        </PropertyContainer>
    )
}
