/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePropertyInput = {
  id?: string | null,
  title: string,
  price: number,
  location: LocationInput,
  capacity: number,
  images: Array< string | null >,
  facility?: Array< string | null > | null,
  gade?: number | null,
};

export type LocationInput = {
  lon: number,
  lat: number,
};

export type ModelPropertyConditionInput = {
  title?: ModelStringInput | null,
  price?: ModelIntInput | null,
  capacity?: ModelIntInput | null,
  images?: ModelStringInput | null,
  facility?: ModelStringInput | null,
  gade?: ModelIntInput | null,
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

export type Property = {
  __typename: "Property",
  id: string,
  title: string,
  price: number,
  location: Location,
  capacity: number,
  images: Array< string | null >,
  facility?: Array< string | null > | null,
  gade?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type Location = {
  __typename: "Location",
  lon: number,
  lat: number,
};

export type UpdatePropertyInput = {
  id: string,
  title?: string | null,
  price?: number | null,
  location?: LocationInput | null,
  capacity?: number | null,
  images?: Array< string | null > | null,
  facility?: Array< string | null > | null,
  gade?: number | null,
};

export type DeletePropertyInput = {
  id: string,
};

export type PropertyItemsInput = {
  km?: number | null,
  from?: number | null,
  limit?: number | null,
};

export type PropertyItemsConnection = {
  __typename: "PropertyItemsConnection",
  items:  Array<PropertyItemsConnectionItem | null >,
  total: number,
};

export type PropertyItemsConnectionItem = {
  __typename: "PropertyItemsConnectionItem",
  property: Property,
  distance?: number | null,
};

export type SearchablePropertyFilterInput = {
  id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  price?: SearchableIntFilterInput | null,
  capacity?: SearchableIntFilterInput | null,
  images?: SearchableStringFilterInput | null,
  facility?: SearchableStringFilterInput | null,
  gade?: SearchableIntFilterInput | null,
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

export type SearchablePropertySortInput = {
  field?: SearchablePropertySortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePropertySortableFields {
  id = "id",
  title = "title",
  price = "price",
  capacity = "capacity",
  images = "images",
  facility = "facility",
  gade = "gade",
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
  price = "price",
  capacity = "capacity",
  images = "images",
  facility = "facility",
  gade = "gade",
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

export type ModelPropertyFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  price?: ModelIntInput | null,
  capacity?: ModelIntInput | null,
  images?: ModelStringInput | null,
  facility?: ModelStringInput | null,
  gade?: ModelIntInput | null,
  and?: Array< ModelPropertyFilterInput | null > | null,
  or?: Array< ModelPropertyFilterInput | null > | null,
  not?: ModelPropertyFilterInput | null,
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

export type ModelPropertyConnection = {
  __typename: "ModelPropertyConnection",
  items:  Array<Property >,
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
    price: number,
    location:  {
      __typename: "Location",
      lon: number,
      lat: number,
    },
    capacity: number,
    images: Array< string | null >,
    facility?: Array< string | null > | null,
    gade?: number | null,
    createdAt: string,
    updatedAt: string,
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
    price: number,
    location:  {
      __typename: "Location",
      lon: number,
      lat: number,
    },
    capacity: number,
    images: Array< string | null >,
    facility?: Array< string | null > | null,
    gade?: number | null,
    createdAt: string,
    updatedAt: string,
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
    price: number,
    location:  {
      __typename: "Location",
      lon: number,
      lat: number,
    },
    capacity: number,
    images: Array< string | null >,
    facility?: Array< string | null > | null,
    gade?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type PropertyItemsQueryVariables = {
  location?: LocationInput | null,
  input?: PropertyItemsInput | null,
};

export type PropertyItemsQuery = {
  propertyItems?:  {
    __typename: "PropertyItemsConnection",
    items:  Array< {
      __typename: "PropertyItemsConnectionItem",
      property:  {
        __typename: "Property",
        id: string,
        title: string,
        price: number,
        capacity: number,
        images: Array< string | null >,
        facility?: Array< string | null > | null,
        gade?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      distance?: number | null,
    } | null >,
    total: number,
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
      price: number,
      location:  {
        __typename: "Location",
        lon: number,
        lat: number,
      },
      capacity: number,
      images: Array< string | null >,
      facility?: Array< string | null > | null,
      gade?: number | null,
      createdAt: string,
      updatedAt: string,
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

export type GetPropertyQueryVariables = {
  id: string,
};

export type GetPropertyQuery = {
  getProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    price: number,
    location:  {
      __typename: "Location",
      lon: number,
      lat: number,
    },
    capacity: number,
    images: Array< string | null >,
    facility?: Array< string | null > | null,
    gade?: number | null,
    createdAt: string,
    updatedAt: string,
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
      price: number,
      location:  {
        __typename: "Location",
        lon: number,
        lat: number,
      },
      capacity: number,
      images: Array< string | null >,
      facility?: Array< string | null > | null,
      gade?: number | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePropertySubscription = {
  onCreateProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    price: number,
    location:  {
      __typename: "Location",
      lon: number,
      lat: number,
    },
    capacity: number,
    images: Array< string | null >,
    facility?: Array< string | null > | null,
    gade?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePropertySubscription = {
  onUpdateProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    price: number,
    location:  {
      __typename: "Location",
      lon: number,
      lat: number,
    },
    capacity: number,
    images: Array< string | null >,
    facility?: Array< string | null > | null,
    gade?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePropertySubscription = {
  onDeleteProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    price: number,
    location:  {
      __typename: "Location",
      lon: number,
      lat: number,
    },
    capacity: number,
    images: Array< string | null >,
    facility?: Array< string | null > | null,
    gade?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
