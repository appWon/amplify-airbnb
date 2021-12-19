export interface FilterState {
    price: Price
    type: string[]
    capacity: number
}

export interface Price {
    min: number
    max: number
}

export const updatePrice = (price: Price) => ({ type: 'UPDATE_PRICE', price } as const)
export const updateTypes = (types: string[]) => ({ type: 'UPDATE_TYPES', types } as const)

export type FilterAction = ReturnType<typeof updatePrice> | ReturnType<typeof updateTypes>
