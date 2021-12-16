import React from 'react'
import { API } from 'aws-amplify'
import { useSelector } from 'react-redux'

import { PropertyContainer } from './style.propertyList'
import { PropertyItems } from '../../components/templates/PropertyItems'
import { propertyItems } from '../../graphql/queries'
import { searchSelector } from '../../store/selector'
import { PropertyItemsConnection } from '../../API'

export const Property: React.FC = () => {
    const { location } = useSelector(searchSelector)

    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [fetchData, setFetchData] = React.useState<PropertyItemsConnection | null>(null)
    const [pageCount, setPageCount] = React.useState<number>(0)

    React.useEffect(() => {
        const getFetch = async () => {
            try {
                setIsLoading(true)

                const result = (await API.graphql({
                    query: propertyItems,
                    variables: {
                        location: location,
                        input: {
                            km: 100,
                            from: pageCount,
                            limit: 5,
                        },
                    },
                })) as { data: { propertyItems: PropertyItemsConnection } }

                setTimeout(() => {
                    setFetchData(result.data.propertyItems)
                    setIsLoading(false)
                }, 500)
            } catch (error) {
                console.log(error)
            }
        }

        if (location.lat) {
            getFetch()
        }
    }, [location])

    return (
        <PropertyContainer>
            <PropertyItems
                fetchData={fetchData}
                isLoading={isLoading}
                pageCount={pageCount}
                onChangePage={setPageCount}
            />
        </PropertyContainer>
    )
}
