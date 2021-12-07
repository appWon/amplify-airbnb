/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePropertyInput = {
  id?: string | null,
  title: string,
  hostId?: string | null,
  content?: string | null,
  price: number,
  pricePerGuest?: number | null,
  longitude: number,
  latitude: number,
  street: string,
  capacity: number,
  cityId?: string | null,
  countryId?: string | null,
  districtId?: string | null,
  provinceId?: string | null,
  categoryId?: string | null,
  refundId?: string | null,
  typeId?: string | null,
};

export type ModelPropertyConditionInput = {
  title?: ModelStringInput | null,
  hostId?: ModelStringInput | null,
  content?: ModelStringInput | null,
  price?: ModelIntInput | null,
  pricePerGuest?: ModelIntInput | null,
  longitude?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  street?: ModelStringInput | null,
  capacity?: ModelIntInput | null,
  cityId?: ModelIDInput | null,
  countryId?: ModelIDInput | null,
  districtId?: ModelIDInput | null,
  provinceId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  refundId?: ModelIDInput | null,
  typeId?: ModelIDInput | null,
  and?: Array< ModelPropertyConditionInput | null > | null,
  or?: Array< ModelPropertyConditionInput | null > | null,
  not?: ModelPropertyConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Property = {
  __typename: "Property",
  id: string,
  title: string,
  hostId?: string | null,
  content?: string | null,
  price: number,
  pricePerGuest?: number | null,
  longitude: number,
  latitude: number,
  street: string,
  capacity: number,
  cityId?: string | null,
  countryId?: string | null,
  districtId?: string | null,
  provinceId?: string | null,
  categoryId?: string | null,
  refundId?: string | null,
  typeId?: string | null,
  city?: City | null,
  country?: Country | null,
  district?: Districts | null,
  province?: Province | null,
  category?: Category | null,
  refund?: Refund | null,
  type?: Type | null,
  images?: ModelImageConnection | null,
  facility?: ModelPropertyfacilityConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type City = {
  __typename: "City",
  id: string,
  name: string,
  latitude: number,
  longitude: number,
  provinceId: string,
  province?: Province | null,
  createdAt: string,
  updatedAt: string,
};

export type Province = {
  __typename: "Province",
  id: string,
  name: string,
  latitude: number,
  longitude: number,
  countryId: string,
  country?: Country | null,
  createdAt: string,
  updatedAt: string,
};

export type Country = {
  __typename: "Country",
  id: string,
  name: string,
  latitude: number,
  longitude: number,
  createdAt: string,
  updatedAt: string,
};

export type Districts = {
  __typename: "Districts",
  id: string,
  name: string,
  latitude: number,
  longitude: number,
  cityId: string,
  city?: City | null,
  createdAt: string,
  updatedAt: string,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type Refund = {
  __typename: "Refund",
  id: string,
  content: string,
  createdAt: string,
  updatedAt: string,
};

export type Type = {
  __typename: "Type",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelImageConnection = {
  __typename: "ModelImageConnection",
  items:  Array<Image >,
  nextToken?: string | null,
};

export type Image = {
  __typename: "Image",
  id: string,
  url: string,
  propertyId: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPropertyfacilityConnection = {
  __typename: "ModelPropertyfacilityConnection",
  items:  Array<Propertyfacility >,
  nextToken?: string | null,
};

export type Propertyfacility = {
  __typename: "Propertyfacility",
  id: string,
  facilityId: string,
  propertyId: string,
  facility?: Facility | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Facility = {
  __typename: "Facility",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePropertyInput = {
  id: string,
  title?: string | null,
  hostId?: string | null,
  content?: string | null,
  price?: number | null,
  pricePerGuest?: number | null,
  longitude?: number | null,
  latitude?: number | null,
  street?: string | null,
  capacity?: number | null,
  cityId?: string | null,
  countryId?: string | null,
  districtId?: string | null,
  provinceId?: string | null,
  categoryId?: string | null,
  refundId?: string | null,
  typeId?: string | null,
};

export type DeletePropertyInput = {
  id: string,
};

export type CreateImageInput = {
  id?: string | null,
  url: string,
  propertyId: string,
};

export type ModelImageConditionInput = {
  url?: ModelStringInput | null,
  propertyId?: ModelIDInput | null,
  and?: Array< ModelImageConditionInput | null > | null,
  or?: Array< ModelImageConditionInput | null > | null,
  not?: ModelImageConditionInput | null,
};

export type UpdateImageInput = {
  id: string,
  url?: string | null,
  propertyId?: string | null,
};

export type DeleteImageInput = {
  id: string,
};

export type CreatePropertyfacilityInput = {
  id?: string | null,
  facilityId: string,
  propertyId: string,
};

export type ModelPropertyfacilityConditionInput = {
  facilityId?: ModelIDInput | null,
  propertyId?: ModelIDInput | null,
  and?: Array< ModelPropertyfacilityConditionInput | null > | null,
  or?: Array< ModelPropertyfacilityConditionInput | null > | null,
  not?: ModelPropertyfacilityConditionInput | null,
};

export type UpdatePropertyfacilityInput = {
  id: string,
  facilityId?: string | null,
  propertyId?: string | null,
};

export type DeletePropertyfacilityInput = {
  id: string,
};

export type CreateTypeInput = {
  id?: string | null,
  name: string,
};

export type ModelTypeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTypeConditionInput | null > | null,
  or?: Array< ModelTypeConditionInput | null > | null,
  not?: ModelTypeConditionInput | null,
};

export type UpdateTypeInput = {
  id: string,
  name?: string | null,
};

export type DeleteTypeInput = {
  id: string,
};

export type CreateRefundInput = {
  id?: string | null,
  content: string,
};

export type ModelRefundConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelRefundConditionInput | null > | null,
  or?: Array< ModelRefundConditionInput | null > | null,
  not?: ModelRefundConditionInput | null,
};

export type UpdateRefundInput = {
  id: string,
  content?: string | null,
};

export type DeleteRefundInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateCountryInput = {
  id?: string | null,
  name: string,
  latitude: number,
  longitude: number,
};

export type ModelCountryConditionInput = {
  name?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelCountryConditionInput | null > | null,
  or?: Array< ModelCountryConditionInput | null > | null,
  not?: ModelCountryConditionInput | null,
};

export type UpdateCountryInput = {
  id: string,
  name?: string | null,
  latitude?: number | null,
  longitude?: number | null,
};

export type DeleteCountryInput = {
  id: string,
};

export type CreateFacilityInput = {
  id?: string | null,
  name: string,
};

export type ModelFacilityConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelFacilityConditionInput | null > | null,
  or?: Array< ModelFacilityConditionInput | null > | null,
  not?: ModelFacilityConditionInput | null,
};

export type UpdateFacilityInput = {
  id: string,
  name?: string | null,
};

export type DeleteFacilityInput = {
  id: string,
};

export type CreateCityInput = {
  id?: string | null,
  name: string,
  latitude: number,
  longitude: number,
  provinceId: string,
};

export type ModelCityConditionInput = {
  name?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  provinceId?: ModelIDInput | null,
  and?: Array< ModelCityConditionInput | null > | null,
  or?: Array< ModelCityConditionInput | null > | null,
  not?: ModelCityConditionInput | null,
};

export type UpdateCityInput = {
  id: string,
  name?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  provinceId?: string | null,
};

export type DeleteCityInput = {
  id: string,
};

export type CreateProvinceInput = {
  id?: string | null,
  name: string,
  latitude: number,
  longitude: number,
  countryId: string,
};

export type ModelProvinceConditionInput = {
  name?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  countryId?: ModelIDInput | null,
  and?: Array< ModelProvinceConditionInput | null > | null,
  or?: Array< ModelProvinceConditionInput | null > | null,
  not?: ModelProvinceConditionInput | null,
};

export type UpdateProvinceInput = {
  id: string,
  name?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  countryId?: string | null,
};

export type DeleteProvinceInput = {
  id: string,
};

export type CreateDistrictsInput = {
  id?: string | null,
  name: string,
  latitude: number,
  longitude: number,
  cityId: string,
};

export type ModelDistrictsConditionInput = {
  name?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  cityId?: ModelIDInput | null,
  and?: Array< ModelDistrictsConditionInput | null > | null,
  or?: Array< ModelDistrictsConditionInput | null > | null,
  not?: ModelDistrictsConditionInput | null,
};

export type UpdateDistrictsInput = {
  id: string,
  name?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  cityId?: string | null,
};

export type DeleteDistrictsInput = {
  id: string,
};

export type ModelPropertyFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  hostId?: ModelStringInput | null,
  content?: ModelStringInput | null,
  price?: ModelIntInput | null,
  pricePerGuest?: ModelIntInput | null,
  longitude?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  street?: ModelStringInput | null,
  capacity?: ModelIntInput | null,
  cityId?: ModelIDInput | null,
  countryId?: ModelIDInput | null,
  districtId?: ModelIDInput | null,
  provinceId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  refundId?: ModelIDInput | null,
  typeId?: ModelIDInput | null,
  and?: Array< ModelPropertyFilterInput | null > | null,
  or?: Array< ModelPropertyFilterInput | null > | null,
  not?: ModelPropertyFilterInput | null,
};

export type ModelPropertyConnection = {
  __typename: "ModelPropertyConnection",
  items:  Array<Property >,
  nextToken?: string | null,
};

export type SearchablePropertyFilterInput = {
  id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  hostId?: SearchableStringFilterInput | null,
  content?: SearchableStringFilterInput | null,
  price?: SearchableIntFilterInput | null,
  pricePerGuest?: SearchableIntFilterInput | null,
  longitude?: SearchableFloatFilterInput | null,
  latitude?: SearchableFloatFilterInput | null,
  street?: SearchableStringFilterInput | null,
  capacity?: SearchableIntFilterInput | null,
  cityId?: SearchableIDFilterInput | null,
  countryId?: SearchableIDFilterInput | null,
  districtId?: SearchableIDFilterInput | null,
  provinceId?: SearchableIDFilterInput | null,
  categoryId?: SearchableIDFilterInput | null,
  refundId?: SearchableIDFilterInput | null,
  typeId?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchablePropertyFilterInput | null > | null,
  or?: Array< SearchablePropertyFilterInput | null > | null,
  not?: SearchablePropertyFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableFloatFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchablePropertySortInput = {
  field?: SearchablePropertySortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePropertySortableFields {
  id = "id",
  title = "title",
  hostId = "hostId",
  content = "content",
  price = "price",
  pricePerGuest = "pricePerGuest",
  longitude = "longitude",
  latitude = "latitude",
  street = "street",
  capacity = "capacity",
  cityId = "cityId",
  countryId = "countryId",
  districtId = "districtId",
  provinceId = "provinceId",
  categoryId = "categoryId",
  refundId = "refundId",
  typeId = "typeId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchablePropertyAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePropertyAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchablePropertyAggregateField {
  id = "id",
  title = "title",
  hostId = "hostId",
  content = "content",
  price = "price",
  pricePerGuest = "pricePerGuest",
  longitude = "longitude",
  latitude = "latitude",
  street = "street",
  capacity = "capacity",
  cityId = "cityId",
  countryId = "countryId",
  districtId = "districtId",
  provinceId = "provinceId",
  categoryId = "categoryId",
  refundId = "refundId",
  typeId = "typeId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePropertyConnection = {
  __typename: "SearchablePropertyConnection",
  items:  Array<Property >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelImageFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  propertyId?: ModelIDInput | null,
  and?: Array< ModelImageFilterInput | null > | null,
  or?: Array< ModelImageFilterInput | null > | null,
  not?: ModelImageFilterInput | null,
};

export type ModelPropertyfacilityFilterInput = {
  id?: ModelIDInput | null,
  facilityId?: ModelIDInput | null,
  propertyId?: ModelIDInput | null,
  and?: Array< ModelPropertyfacilityFilterInput | null > | null,
  or?: Array< ModelPropertyfacilityFilterInput | null > | null,
  not?: ModelPropertyfacilityFilterInput | null,
};

export type ModelTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTypeFilterInput | null > | null,
  or?: Array< ModelTypeFilterInput | null > | null,
  not?: ModelTypeFilterInput | null,
};

export type ModelTypeConnection = {
  __typename: "ModelTypeConnection",
  items:  Array<Type >,
  nextToken?: string | null,
};

export type ModelRefundFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelRefundFilterInput | null > | null,
  or?: Array< ModelRefundFilterInput | null > | null,
  not?: ModelRefundFilterInput | null,
};

export type ModelRefundConnection = {
  __typename: "ModelRefundConnection",
  items:  Array<Refund >,
  nextToken?: string | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category >,
  nextToken?: string | null,
};

export type ModelCountryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelCountryFilterInput | null > | null,
  or?: Array< ModelCountryFilterInput | null > | null,
  not?: ModelCountryFilterInput | null,
};

export type ModelCountryConnection = {
  __typename: "ModelCountryConnection",
  items:  Array<Country >,
  nextToken?: string | null,
};

export type ModelFacilityFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelFacilityFilterInput | null > | null,
  or?: Array< ModelFacilityFilterInput | null > | null,
  not?: ModelFacilityFilterInput | null,
};

export type ModelFacilityConnection = {
  __typename: "ModelFacilityConnection",
  items:  Array<Facility >,
  nextToken?: string | null,
};

export type ModelCityFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  provinceId?: ModelIDInput | null,
  and?: Array< ModelCityFilterInput | null > | null,
  or?: Array< ModelCityFilterInput | null > | null,
  not?: ModelCityFilterInput | null,
};

export type ModelCityConnection = {
  __typename: "ModelCityConnection",
  items:  Array<City >,
  nextToken?: string | null,
};

export type ModelProvinceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  countryId?: ModelIDInput | null,
  and?: Array< ModelProvinceFilterInput | null > | null,
  or?: Array< ModelProvinceFilterInput | null > | null,
  not?: ModelProvinceFilterInput | null,
};

export type ModelProvinceConnection = {
  __typename: "ModelProvinceConnection",
  items:  Array<Province >,
  nextToken?: string | null,
};

export type ModelDistrictsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  cityId?: ModelIDInput | null,
  and?: Array< ModelDistrictsFilterInput | null > | null,
  or?: Array< ModelDistrictsFilterInput | null > | null,
  not?: ModelDistrictsFilterInput | null,
};

export type ModelDistrictsConnection = {
  __typename: "ModelDistrictsConnection",
  items:  Array<Districts >,
  nextToken?: string | null,
};

export type CreatePropertyMutationVariables = {
  input: CreatePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type CreatePropertyMutation = {
  createProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    hostId?: string | null,
    content?: string | null,
    price: number,
    pricePerGuest?: number | null,
    longitude: number,
    latitude: number,
    street: string,
    capacity: number,
    cityId?: string | null,
    countryId?: string | null,
    districtId?: string | null,
    provinceId?: string | null,
    categoryId?: string | null,
    refundId?: string | null,
    typeId?: string | null,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    district?:  {
      __typename: "Districts",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      cityId: string,
      city?:  {
        __typename: "City",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        provinceId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    refund?:  {
      __typename: "Refund",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    facility?:  {
      __typename: "ModelPropertyfacilityConnection",
      items:  Array< {
        __typename: "Propertyfacility",
        id: string,
        facilityId: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePropertyMutationVariables = {
  input: UpdatePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type UpdatePropertyMutation = {
  updateProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    hostId?: string | null,
    content?: string | null,
    price: number,
    pricePerGuest?: number | null,
    longitude: number,
    latitude: number,
    street: string,
    capacity: number,
    cityId?: string | null,
    countryId?: string | null,
    districtId?: string | null,
    provinceId?: string | null,
    categoryId?: string | null,
    refundId?: string | null,
    typeId?: string | null,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    district?:  {
      __typename: "Districts",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      cityId: string,
      city?:  {
        __typename: "City",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        provinceId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    refund?:  {
      __typename: "Refund",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    facility?:  {
      __typename: "ModelPropertyfacilityConnection",
      items:  Array< {
        __typename: "Propertyfacility",
        id: string,
        facilityId: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePropertyMutationVariables = {
  input: DeletePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type DeletePropertyMutation = {
  deleteProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    hostId?: string | null,
    content?: string | null,
    price: number,
    pricePerGuest?: number | null,
    longitude: number,
    latitude: number,
    street: string,
    capacity: number,
    cityId?: string | null,
    countryId?: string | null,
    districtId?: string | null,
    provinceId?: string | null,
    categoryId?: string | null,
    refundId?: string | null,
    typeId?: string | null,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    district?:  {
      __typename: "Districts",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      cityId: string,
      city?:  {
        __typename: "City",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        provinceId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    refund?:  {
      __typename: "Refund",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    facility?:  {
      __typename: "ModelPropertyfacilityConnection",
      items:  Array< {
        __typename: "Propertyfacility",
        id: string,
        facilityId: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateImageMutationVariables = {
  input: CreateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type CreateImageMutation = {
  createImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    propertyId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateImageMutationVariables = {
  input: UpdateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type UpdateImageMutation = {
  updateImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    propertyId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteImageMutationVariables = {
  input: DeleteImageInput,
  condition?: ModelImageConditionInput | null,
};

export type DeleteImageMutation = {
  deleteImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    propertyId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePropertyfacilityMutationVariables = {
  input: CreatePropertyfacilityInput,
  condition?: ModelPropertyfacilityConditionInput | null,
};

export type CreatePropertyfacilityMutation = {
  createPropertyfacility?:  {
    __typename: "Propertyfacility",
    id: string,
    facilityId: string,
    propertyId: string,
    facility?:  {
      __typename: "Facility",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePropertyfacilityMutationVariables = {
  input: UpdatePropertyfacilityInput,
  condition?: ModelPropertyfacilityConditionInput | null,
};

export type UpdatePropertyfacilityMutation = {
  updatePropertyfacility?:  {
    __typename: "Propertyfacility",
    id: string,
    facilityId: string,
    propertyId: string,
    facility?:  {
      __typename: "Facility",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePropertyfacilityMutationVariables = {
  input: DeletePropertyfacilityInput,
  condition?: ModelPropertyfacilityConditionInput | null,
};

export type DeletePropertyfacilityMutation = {
  deletePropertyfacility?:  {
    __typename: "Propertyfacility",
    id: string,
    facilityId: string,
    propertyId: string,
    facility?:  {
      __typename: "Facility",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTypeMutationVariables = {
  input: CreateTypeInput,
  condition?: ModelTypeConditionInput | null,
};

export type CreateTypeMutation = {
  createType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTypeMutationVariables = {
  input: UpdateTypeInput,
  condition?: ModelTypeConditionInput | null,
};

export type UpdateTypeMutation = {
  updateType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTypeMutationVariables = {
  input: DeleteTypeInput,
  condition?: ModelTypeConditionInput | null,
};

export type DeleteTypeMutation = {
  deleteType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRefundMutationVariables = {
  input: CreateRefundInput,
  condition?: ModelRefundConditionInput | null,
};

export type CreateRefundMutation = {
  createRefund?:  {
    __typename: "Refund",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRefundMutationVariables = {
  input: UpdateRefundInput,
  condition?: ModelRefundConditionInput | null,
};

export type UpdateRefundMutation = {
  updateRefund?:  {
    __typename: "Refund",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRefundMutationVariables = {
  input: DeleteRefundInput,
  condition?: ModelRefundConditionInput | null,
};

export type DeleteRefundMutation = {
  deleteRefund?:  {
    __typename: "Refund",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCountryMutationVariables = {
  input: CreateCountryInput,
  condition?: ModelCountryConditionInput | null,
};

export type CreateCountryMutation = {
  createCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCountryMutationVariables = {
  input: UpdateCountryInput,
  condition?: ModelCountryConditionInput | null,
};

export type UpdateCountryMutation = {
  updateCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCountryMutationVariables = {
  input: DeleteCountryInput,
  condition?: ModelCountryConditionInput | null,
};

export type DeleteCountryMutation = {
  deleteCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFacilityMutationVariables = {
  input: CreateFacilityInput,
  condition?: ModelFacilityConditionInput | null,
};

export type CreateFacilityMutation = {
  createFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFacilityMutationVariables = {
  input: UpdateFacilityInput,
  condition?: ModelFacilityConditionInput | null,
};

export type UpdateFacilityMutation = {
  updateFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFacilityMutationVariables = {
  input: DeleteFacilityInput,
  condition?: ModelFacilityConditionInput | null,
};

export type DeleteFacilityMutation = {
  deleteFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCityMutationVariables = {
  input: CreateCityInput,
  condition?: ModelCityConditionInput | null,
};

export type CreateCityMutation = {
  createCity?:  {
    __typename: "City",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    provinceId: string,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCityMutationVariables = {
  input: UpdateCityInput,
  condition?: ModelCityConditionInput | null,
};

export type UpdateCityMutation = {
  updateCity?:  {
    __typename: "City",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    provinceId: string,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCityMutationVariables = {
  input: DeleteCityInput,
  condition?: ModelCityConditionInput | null,
};

export type DeleteCityMutation = {
  deleteCity?:  {
    __typename: "City",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    provinceId: string,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProvinceMutationVariables = {
  input: CreateProvinceInput,
  condition?: ModelProvinceConditionInput | null,
};

export type CreateProvinceMutation = {
  createProvince?:  {
    __typename: "Province",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    countryId: string,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProvinceMutationVariables = {
  input: UpdateProvinceInput,
  condition?: ModelProvinceConditionInput | null,
};

export type UpdateProvinceMutation = {
  updateProvince?:  {
    __typename: "Province",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    countryId: string,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProvinceMutationVariables = {
  input: DeleteProvinceInput,
  condition?: ModelProvinceConditionInput | null,
};

export type DeleteProvinceMutation = {
  deleteProvince?:  {
    __typename: "Province",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    countryId: string,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDistrictsMutationVariables = {
  input: CreateDistrictsInput,
  condition?: ModelDistrictsConditionInput | null,
};

export type CreateDistrictsMutation = {
  createDistricts?:  {
    __typename: "Districts",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    cityId: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDistrictsMutationVariables = {
  input: UpdateDistrictsInput,
  condition?: ModelDistrictsConditionInput | null,
};

export type UpdateDistrictsMutation = {
  updateDistricts?:  {
    __typename: "Districts",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    cityId: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDistrictsMutationVariables = {
  input: DeleteDistrictsInput,
  condition?: ModelDistrictsConditionInput | null,
};

export type DeleteDistrictsMutation = {
  deleteDistricts?:  {
    __typename: "Districts",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    cityId: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPropertyQueryVariables = {
  id: string,
};

export type GetPropertyQuery = {
  getProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    hostId?: string | null,
    content?: string | null,
    price: number,
    pricePerGuest?: number | null,
    longitude: number,
    latitude: number,
    street: string,
    capacity: number,
    cityId?: string | null,
    countryId?: string | null,
    districtId?: string | null,
    provinceId?: string | null,
    categoryId?: string | null,
    refundId?: string | null,
    typeId?: string | null,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    district?:  {
      __typename: "Districts",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      cityId: string,
      city?:  {
        __typename: "City",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        provinceId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    refund?:  {
      __typename: "Refund",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    facility?:  {
      __typename: "ModelPropertyfacilityConnection",
      items:  Array< {
        __typename: "Propertyfacility",
        id: string,
        facilityId: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPropertiesQueryVariables = {
  filter?: ModelPropertyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPropertiesQuery = {
  listProperties?:  {
    __typename: "ModelPropertyConnection",
    items:  Array< {
      __typename: "Property",
      id: string,
      title: string,
      hostId?: string | null,
      content?: string | null,
      price: number,
      pricePerGuest?: number | null,
      longitude: number,
      latitude: number,
      street: string,
      capacity: number,
      cityId?: string | null,
      countryId?: string | null,
      districtId?: string | null,
      provinceId?: string | null,
      categoryId?: string | null,
      refundId?: string | null,
      typeId?: string | null,
      city?:  {
        __typename: "City",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        provinceId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      district?:  {
        __typename: "Districts",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        cityId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      refund?:  {
        __typename: "Refund",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      facility?:  {
        __typename: "ModelPropertyfacilityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type SearchPropertiesQueryVariables = {
  filter?: SearchablePropertyFilterInput | null,
  sort?: Array< SearchablePropertySortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePropertyAggregationInput | null > | null,
};

export type SearchPropertiesQuery = {
  searchProperties?:  {
    __typename: "SearchablePropertyConnection",
    items:  Array< {
      __typename: "Property",
      id: string,
      title: string,
      hostId?: string | null,
      content?: string | null,
      price: number,
      pricePerGuest?: number | null,
      longitude: number,
      latitude: number,
      street: string,
      capacity: number,
      cityId?: string | null,
      countryId?: string | null,
      districtId?: string | null,
      provinceId?: string | null,
      categoryId?: string | null,
      refundId?: string | null,
      typeId?: string | null,
      city?:  {
        __typename: "City",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        provinceId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      district?:  {
        __typename: "Districts",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        cityId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      refund?:  {
        __typename: "Refund",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      type?:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      facility?:  {
        __typename: "ModelPropertyfacilityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } >,
  } | null,
};

export type GetImageQueryVariables = {
  id: string,
};

export type GetImageQuery = {
  getImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    propertyId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListImagesQueryVariables = {
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagesQuery = {
  listImages?:  {
    __typename: "ModelImageConnection",
    items:  Array< {
      __typename: "Image",
      id: string,
      url: string,
      propertyId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetPropertyfacilityQueryVariables = {
  id: string,
};

export type GetPropertyfacilityQuery = {
  getPropertyfacility?:  {
    __typename: "Propertyfacility",
    id: string,
    facilityId: string,
    propertyId: string,
    facility?:  {
      __typename: "Facility",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPropertyfacilitiesQueryVariables = {
  filter?: ModelPropertyfacilityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPropertyfacilitiesQuery = {
  listPropertyfacilities?:  {
    __typename: "ModelPropertyfacilityConnection",
    items:  Array< {
      __typename: "Propertyfacility",
      id: string,
      facilityId: string,
      propertyId: string,
      facility?:  {
        __typename: "Facility",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetTypeQueryVariables = {
  id: string,
};

export type GetTypeQuery = {
  getType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTypesQueryVariables = {
  filter?: ModelTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTypesQuery = {
  listTypes?:  {
    __typename: "ModelTypeConnection",
    items:  Array< {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetRefundQueryVariables = {
  id: string,
};

export type GetRefundQuery = {
  getRefund?:  {
    __typename: "Refund",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRefundsQueryVariables = {
  filter?: ModelRefundFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRefundsQuery = {
  listRefunds?:  {
    __typename: "ModelRefundConnection",
    items:  Array< {
      __typename: "Refund",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetCountryQueryVariables = {
  id: string,
};

export type GetCountryQuery = {
  getCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCountriesQueryVariables = {
  filter?: ModelCountryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCountriesQuery = {
  listCountries?:  {
    __typename: "ModelCountryConnection",
    items:  Array< {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetFacilityQueryVariables = {
  id: string,
};

export type GetFacilityQuery = {
  getFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFacilitiesQueryVariables = {
  filter?: ModelFacilityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFacilitiesQuery = {
  listFacilities?:  {
    __typename: "ModelFacilityConnection",
    items:  Array< {
      __typename: "Facility",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetCityQueryVariables = {
  id: string,
};

export type GetCityQuery = {
  getCity?:  {
    __typename: "City",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    provinceId: string,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCitiesQueryVariables = {
  filter?: ModelCityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCitiesQuery = {
  listCities?:  {
    __typename: "ModelCityConnection",
    items:  Array< {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetProvinceQueryVariables = {
  id: string,
};

export type GetProvinceQuery = {
  getProvince?:  {
    __typename: "Province",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    countryId: string,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProvincesQueryVariables = {
  filter?: ModelProvinceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProvincesQuery = {
  listProvinces?:  {
    __typename: "ModelProvinceConnection",
    items:  Array< {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetDistrictsQueryVariables = {
  id: string,
};

export type GetDistrictsQuery = {
  getDistricts?:  {
    __typename: "Districts",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    cityId: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDistrictsQueryVariables = {
  filter?: ModelDistrictsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDistrictsQuery = {
  listDistricts?:  {
    __typename: "ModelDistrictsConnection",
    items:  Array< {
      __typename: "Districts",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      cityId: string,
      city?:  {
        __typename: "City",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        provinceId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePropertySubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePropertySubscription = {
  onCreateProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    hostId?: string | null,
    content?: string | null,
    price: number,
    pricePerGuest?: number | null,
    longitude: number,
    latitude: number,
    street: string,
    capacity: number,
    cityId?: string | null,
    countryId?: string | null,
    districtId?: string | null,
    provinceId?: string | null,
    categoryId?: string | null,
    refundId?: string | null,
    typeId?: string | null,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    district?:  {
      __typename: "Districts",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      cityId: string,
      city?:  {
        __typename: "City",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        provinceId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    refund?:  {
      __typename: "Refund",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    facility?:  {
      __typename: "ModelPropertyfacilityConnection",
      items:  Array< {
        __typename: "Propertyfacility",
        id: string,
        facilityId: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePropertySubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePropertySubscription = {
  onUpdateProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    hostId?: string | null,
    content?: string | null,
    price: number,
    pricePerGuest?: number | null,
    longitude: number,
    latitude: number,
    street: string,
    capacity: number,
    cityId?: string | null,
    countryId?: string | null,
    districtId?: string | null,
    provinceId?: string | null,
    categoryId?: string | null,
    refundId?: string | null,
    typeId?: string | null,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    district?:  {
      __typename: "Districts",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      cityId: string,
      city?:  {
        __typename: "City",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        provinceId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    refund?:  {
      __typename: "Refund",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    facility?:  {
      __typename: "ModelPropertyfacilityConnection",
      items:  Array< {
        __typename: "Propertyfacility",
        id: string,
        facilityId: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePropertySubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePropertySubscription = {
  onDeleteProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    hostId?: string | null,
    content?: string | null,
    price: number,
    pricePerGuest?: number | null,
    longitude: number,
    latitude: number,
    street: string,
    capacity: number,
    cityId?: string | null,
    countryId?: string | null,
    districtId?: string | null,
    provinceId?: string | null,
    categoryId?: string | null,
    refundId?: string | null,
    typeId?: string | null,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    district?:  {
      __typename: "Districts",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      cityId: string,
      city?:  {
        __typename: "City",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        provinceId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    refund?:  {
      __typename: "Refund",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    type?:  {
      __typename: "Type",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    facility?:  {
      __typename: "ModelPropertyfacilityConnection",
      items:  Array< {
        __typename: "Propertyfacility",
        id: string,
        facilityId: string,
        propertyId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateImageSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateImageSubscription = {
  onCreateImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    propertyId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateImageSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateImageSubscription = {
  onUpdateImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    propertyId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteImageSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteImageSubscription = {
  onDeleteImage?:  {
    __typename: "Image",
    id: string,
    url: string,
    propertyId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePropertyfacilitySubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePropertyfacilitySubscription = {
  onCreatePropertyfacility?:  {
    __typename: "Propertyfacility",
    id: string,
    facilityId: string,
    propertyId: string,
    facility?:  {
      __typename: "Facility",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePropertyfacilitySubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePropertyfacilitySubscription = {
  onUpdatePropertyfacility?:  {
    __typename: "Propertyfacility",
    id: string,
    facilityId: string,
    propertyId: string,
    facility?:  {
      __typename: "Facility",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePropertyfacilitySubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePropertyfacilitySubscription = {
  onDeletePropertyfacility?:  {
    __typename: "Propertyfacility",
    id: string,
    facilityId: string,
    propertyId: string,
    facility?:  {
      __typename: "Facility",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTypeSubscription = {
  onCreateType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTypeSubscription = {
  onUpdateType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTypeSubscription = {
  onDeleteType?:  {
    __typename: "Type",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRefundSubscription = {
  onCreateRefund?:  {
    __typename: "Refund",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRefundSubscription = {
  onUpdateRefund?:  {
    __typename: "Refund",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRefundSubscription = {
  onDeleteRefund?:  {
    __typename: "Refund",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCountrySubscription = {
  onCreateCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCountrySubscription = {
  onUpdateCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCountrySubscription = {
  onDeleteCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFacilitySubscription = {
  onCreateFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFacilitySubscription = {
  onUpdateFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFacilitySubscription = {
  onDeleteFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCitySubscription = {
  onCreateCity?:  {
    __typename: "City",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    provinceId: string,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCitySubscription = {
  onUpdateCity?:  {
    __typename: "City",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    provinceId: string,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCitySubscription = {
  onDeleteCity?:  {
    __typename: "City",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    provinceId: string,
    province?:  {
      __typename: "Province",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      countryId: string,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProvinceSubscription = {
  onCreateProvince?:  {
    __typename: "Province",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    countryId: string,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProvinceSubscription = {
  onUpdateProvince?:  {
    __typename: "Province",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    countryId: string,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProvinceSubscription = {
  onDeleteProvince?:  {
    __typename: "Province",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    countryId: string,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDistrictsSubscription = {
  onCreateDistricts?:  {
    __typename: "Districts",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    cityId: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDistrictsSubscription = {
  onUpdateDistricts?:  {
    __typename: "Districts",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    cityId: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDistrictsSubscription = {
  onDeleteDistricts?:  {
    __typename: "Districts",
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    cityId: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      latitude: number,
      longitude: number,
      provinceId: string,
      province?:  {
        __typename: "Province",
        id: string,
        name: string,
        latitude: number,
        longitude: number,
        countryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
