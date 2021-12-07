/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty($owner: String) {
    onCreateProperty(owner: $owner) {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty($owner: String) {
    onUpdateProperty(owner: $owner) {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty($owner: String) {
    onDeleteProperty(owner: $owner) {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage($owner: String) {
    onCreateImage(owner: $owner) {
      id
      url
      propertyId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage($owner: String) {
    onUpdateImage(owner: $owner) {
      id
      url
      propertyId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage($owner: String) {
    onDeleteImage(owner: $owner) {
      id
      url
      propertyId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePropertyfacility = /* GraphQL */ `
  subscription OnCreatePropertyfacility($owner: String) {
    onCreatePropertyfacility(owner: $owner) {
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
export const onUpdatePropertyfacility = /* GraphQL */ `
  subscription OnUpdatePropertyfacility($owner: String) {
    onUpdatePropertyfacility(owner: $owner) {
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
export const onDeletePropertyfacility = /* GraphQL */ `
  subscription OnDeletePropertyfacility($owner: String) {
    onDeletePropertyfacility(owner: $owner) {
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
export const onCreateType = /* GraphQL */ `
  subscription OnCreateType {
    onCreateType {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType {
    onUpdateType {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType {
    onDeleteType {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRefund = /* GraphQL */ `
  subscription OnCreateRefund {
    onCreateRefund {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRefund = /* GraphQL */ `
  subscription OnUpdateRefund {
    onUpdateRefund {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRefund = /* GraphQL */ `
  subscription OnDeleteRefund {
    onDeleteRefund {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCountry = /* GraphQL */ `
  subscription OnCreateCountry {
    onCreateCountry {
      id
      name
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCountry = /* GraphQL */ `
  subscription OnUpdateCountry {
    onUpdateCountry {
      id
      name
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCountry = /* GraphQL */ `
  subscription OnDeleteCountry {
    onDeleteCountry {
      id
      name
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFacility = /* GraphQL */ `
  subscription OnCreateFacility {
    onCreateFacility {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFacility = /* GraphQL */ `
  subscription OnUpdateFacility {
    onUpdateFacility {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFacility = /* GraphQL */ `
  subscription OnDeleteFacility {
    onDeleteFacility {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCity = /* GraphQL */ `
  subscription OnCreateCity {
    onCreateCity {
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
export const onUpdateCity = /* GraphQL */ `
  subscription OnUpdateCity {
    onUpdateCity {
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
export const onDeleteCity = /* GraphQL */ `
  subscription OnDeleteCity {
    onDeleteCity {
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
export const onCreateProvince = /* GraphQL */ `
  subscription OnCreateProvince {
    onCreateProvince {
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
export const onUpdateProvince = /* GraphQL */ `
  subscription OnUpdateProvince {
    onUpdateProvince {
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
export const onDeleteProvince = /* GraphQL */ `
  subscription OnDeleteProvince {
    onDeleteProvince {
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
export const onCreateDistricts = /* GraphQL */ `
  subscription OnCreateDistricts {
    onCreateDistricts {
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
export const onUpdateDistricts = /* GraphQL */ `
  subscription OnUpdateDistricts {
    onUpdateDistricts {
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
export const onDeleteDistricts = /* GraphQL */ `
  subscription OnDeleteDistricts {
    onDeleteDistricts {
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
