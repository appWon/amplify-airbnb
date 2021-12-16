/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const propertyItems = /* GraphQL */ `
    query PropertyItems($location: LocationInput, $input: PropertyItemsInput) {
        propertyItems(location: $location, input: $input) {
            items {
                property {
                    id
                    title
                    price
                    capacity
                    images
                    facility
                    gade
                    location {
                        lat
                        lon
                    }
                }
                distance
            }
            total
        }
    }
`
export const searchProperties = /* GraphQL */ `
    query SearchProperties(
        $filter: SearchablePropertyFilterInput
        $sort: [SearchablePropertySortInput]
        $limit: Int
        $nextToken: String
        $from: Int
        $aggregates: [SearchablePropertyAggregationInput]
    ) {
        searchProperties(
            filter: $filter
            sort: $sort
            limit: $limit
            nextToken: $nextToken
            from: $from
            aggregates: $aggregates
        ) {
            items {
                id
                title
                price
                location {
                    lon
                    lat
                }
                capacity
                images
                facility
                gade
                createdAt
                updatedAt
            }
            nextToken
            total
            aggregateItems {
                name
                result {
                    ... on SearchableAggregateScalarResult {
                        value
                    }
                    ... on SearchableAggregateBucketResult {
                        buckets {
                            key
                            doc_count
                        }
                    }
                }
            }
        }
    }
`
export const getProperty = /* GraphQL */ `
    query GetProperty($id: ID!) {
        getProperty(id: $id) {
            id
            title
            price
            location {
                lon
                lat
            }
            capacity
            images
            facility
            gade
            createdAt
            updatedAt
        }
    }
`
export const listProperties = /* GraphQL */ `
    query ListProperties($filter: ModelPropertyFilterInput, $limit: Int, $nextToken: String) {
        listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                title
                price
                location {
                    lon
                    lat
                }
                capacity
                images
                facility
                gade
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`
