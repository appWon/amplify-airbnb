/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      url
      propertyId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      url
      propertyId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      url
      propertyId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPropertyfacility = /* GraphQL */ `
  mutation CreatePropertyfacility(
    $input: CreatePropertyfacilityInput!
    $condition: ModelPropertyfacilityConditionInput
  ) {
    createPropertyfacility(input: $input, condition: $condition) {
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
export const updatePropertyfacility = /* GraphQL */ `
  mutation UpdatePropertyfacility(
    $input: UpdatePropertyfacilityInput!
    $condition: ModelPropertyfacilityConditionInput
  ) {
    updatePropertyfacility(input: $input, condition: $condition) {
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
export const deletePropertyfacility = /* GraphQL */ `
  mutation DeletePropertyfacility(
    $input: DeletePropertyfacilityInput!
    $condition: ModelPropertyfacilityConditionInput
  ) {
    deletePropertyfacility(input: $input, condition: $condition) {
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
export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $input: UpdateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    updateType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $input: DeleteTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    deleteType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createRefund = /* GraphQL */ `
  mutation CreateRefund(
    $input: CreateRefundInput!
    $condition: ModelRefundConditionInput
  ) {
    createRefund(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateRefund = /* GraphQL */ `
  mutation UpdateRefund(
    $input: UpdateRefundInput!
    $condition: ModelRefundConditionInput
  ) {
    updateRefund(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteRefund = /* GraphQL */ `
  mutation DeleteRefund(
    $input: DeleteRefundInput!
    $condition: ModelRefundConditionInput
  ) {
    deleteRefund(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createCountry = /* GraphQL */ `
  mutation CreateCountry(
    $input: CreateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    createCountry(input: $input, condition: $condition) {
      id
      name
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const updateCountry = /* GraphQL */ `
  mutation UpdateCountry(
    $input: UpdateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    updateCountry(input: $input, condition: $condition) {
      id
      name
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const deleteCountry = /* GraphQL */ `
  mutation DeleteCountry(
    $input: DeleteCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    deleteCountry(input: $input, condition: $condition) {
      id
      name
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const createFacility = /* GraphQL */ `
  mutation CreateFacility(
    $input: CreateFacilityInput!
    $condition: ModelFacilityConditionInput
  ) {
    createFacility(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateFacility = /* GraphQL */ `
  mutation UpdateFacility(
    $input: UpdateFacilityInput!
    $condition: ModelFacilityConditionInput
  ) {
    updateFacility(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteFacility = /* GraphQL */ `
  mutation DeleteFacility(
    $input: DeleteFacilityInput!
    $condition: ModelFacilityConditionInput
  ) {
    deleteFacility(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createCity = /* GraphQL */ `
  mutation CreateCity(
    $input: CreateCityInput!
    $condition: ModelCityConditionInput
  ) {
    createCity(input: $input, condition: $condition) {
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
export const updateCity = /* GraphQL */ `
  mutation UpdateCity(
    $input: UpdateCityInput!
    $condition: ModelCityConditionInput
  ) {
    updateCity(input: $input, condition: $condition) {
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
export const deleteCity = /* GraphQL */ `
  mutation DeleteCity(
    $input: DeleteCityInput!
    $condition: ModelCityConditionInput
  ) {
    deleteCity(input: $input, condition: $condition) {
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
export const createProvince = /* GraphQL */ `
  mutation CreateProvince(
    $input: CreateProvinceInput!
    $condition: ModelProvinceConditionInput
  ) {
    createProvince(input: $input, condition: $condition) {
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
export const updateProvince = /* GraphQL */ `
  mutation UpdateProvince(
    $input: UpdateProvinceInput!
    $condition: ModelProvinceConditionInput
  ) {
    updateProvince(input: $input, condition: $condition) {
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
export const deleteProvince = /* GraphQL */ `
  mutation DeleteProvince(
    $input: DeleteProvinceInput!
    $condition: ModelProvinceConditionInput
  ) {
    deleteProvince(input: $input, condition: $condition) {
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
export const createDistricts = /* GraphQL */ `
  mutation CreateDistricts(
    $input: CreateDistrictsInput!
    $condition: ModelDistrictsConditionInput
  ) {
    createDistricts(input: $input, condition: $condition) {
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
export const updateDistricts = /* GraphQL */ `
  mutation UpdateDistricts(
    $input: UpdateDistrictsInput!
    $condition: ModelDistrictsConditionInput
  ) {
    updateDistricts(input: $input, condition: $condition) {
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
export const deleteDistricts = /* GraphQL */ `
  mutation DeleteDistricts(
    $input: DeleteDistrictsInput!
    $condition: ModelDistrictsConditionInput
  ) {
    deleteDistricts(input: $input, condition: $condition) {
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
