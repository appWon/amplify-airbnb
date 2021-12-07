/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      title
      hostId
      content
      price
      pricePerGuest
      longitude
      latitude
      street
      capacity
      cityId
      countryId
      districtId
      provinceId
      categoryId
      refundId
      typeId
      city {
        id
        name
        latitude
        longitude
        provinceId
        province {
          id
          name
          latitude
          longitude
          countryId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      country {
        id
        name
        latitude
        longitude
        createdAt
        updatedAt
      }
      district {
        id
        name
        latitude
        longitude
        cityId
        city {
          id
          name
          latitude
          longitude
          provinceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      province {
        id
        name
        latitude
        longitude
        countryId
        country {
          id
          name
          latitude
          longitude
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      category {
        id
        name
        createdAt
        updatedAt
      }
      refund {
        id
        content
        createdAt
        updatedAt
      }
      type {
        id
        name
        createdAt
        updatedAt
      }
      images {
        items {
          id
          url
          propertyId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      facility {
        items {
          id
          facilityId
          propertyId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        hostId
        content
        price
        pricePerGuest
        longitude
        latitude
        street
        capacity
        cityId
        countryId
        districtId
        provinceId
        categoryId
        refundId
        typeId
        city {
          id
          name
          latitude
          longitude
          provinceId
          createdAt
          updatedAt
        }
        country {
          id
          name
          latitude
          longitude
          createdAt
          updatedAt
        }
        district {
          id
          name
          latitude
          longitude
          cityId
          createdAt
          updatedAt
        }
        province {
          id
          name
          latitude
          longitude
          countryId
          createdAt
          updatedAt
        }
        category {
          id
          name
          createdAt
          updatedAt
        }
        refund {
          id
          content
          createdAt
          updatedAt
        }
        type {
          id
          name
          createdAt
          updatedAt
        }
        images {
          nextToken
        }
        facility {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
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
        hostId
        content
        price
        pricePerGuest
        longitude
        latitude
        street
        capacity
        cityId
        countryId
        districtId
        provinceId
        categoryId
        refundId
        typeId
        city {
          id
          name
          latitude
          longitude
          provinceId
          createdAt
          updatedAt
        }
        country {
          id
          name
          latitude
          longitude
          createdAt
          updatedAt
        }
        district {
          id
          name
          latitude
          longitude
          cityId
          createdAt
          updatedAt
        }
        province {
          id
          name
          latitude
          longitude
          countryId
          createdAt
          updatedAt
        }
        category {
          id
          name
          createdAt
          updatedAt
        }
        refund {
          id
          content
          createdAt
          updatedAt
        }
        type {
          id
          name
          createdAt
          updatedAt
        }
        images {
          nextToken
        }
        facility {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      url
      propertyId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        propertyId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPropertyfacility = /* GraphQL */ `
  query GetPropertyfacility($id: ID!) {
    getPropertyfacility(id: $id) {
      id
      facilityId
      propertyId
      facility {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPropertyfacilities = /* GraphQL */ `
  query ListPropertyfacilities(
    $filter: ModelPropertyfacilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertyfacilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        facilityId
        propertyId
        facility {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getType = /* GraphQL */ `
  query GetType($id: ID!) {
    getType(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRefund = /* GraphQL */ `
  query GetRefund($id: ID!) {
    getRefund(id: $id) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const listRefunds = /* GraphQL */ `
  query ListRefunds(
    $filter: ModelRefundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRefunds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
      id
      name
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const listCountries = /* GraphQL */ `
  query ListCountries(
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCountries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFacility = /* GraphQL */ `
  query GetFacility($id: ID!) {
    getFacility(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listFacilities = /* GraphQL */ `
  query ListFacilities(
    $filter: ModelFacilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCity = /* GraphQL */ `
  query GetCity($id: ID!) {
    getCity(id: $id) {
      id
      name
      latitude
      longitude
      provinceId
      province {
        id
        name
        latitude
        longitude
        countryId
        country {
          id
          name
          latitude
          longitude
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCities = /* GraphQL */ `
  query ListCities(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        latitude
        longitude
        provinceId
        province {
          id
          name
          latitude
          longitude
          countryId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProvince = /* GraphQL */ `
  query GetProvince($id: ID!) {
    getProvince(id: $id) {
      id
      name
      latitude
      longitude
      countryId
      country {
        id
        name
        latitude
        longitude
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProvinces = /* GraphQL */ `
  query ListProvinces(
    $filter: ModelProvinceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProvinces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        latitude
        longitude
        countryId
        country {
          id
          name
          latitude
          longitude
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDistricts = /* GraphQL */ `
  query GetDistricts($id: ID!) {
    getDistricts(id: $id) {
      id
      name
      latitude
      longitude
      cityId
      city {
        id
        name
        latitude
        longitude
        provinceId
        province {
          id
          name
          latitude
          longitude
          countryId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDistricts = /* GraphQL */ `
  query ListDistricts(
    $filter: ModelDistrictsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDistricts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        latitude
        longitude
        cityId
        city {
          id
          name
          latitude
          longitude
          provinceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
