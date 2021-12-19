import { FilterState, FilterAction } from './types'

const initalFilterSate: FilterState = {
    price: {
        min: 0,
        max: 500000,
    },
    type: [],
    capacity: 0,
}

export const filterReducer = (state = initalFilterSate, action: FilterAction): FilterState => {
    switch (action.type) {
        case 'UPDATE_PRICE':
            return {
                ...state,
                price: action.price,
            }
        case 'UPDATE_TYPES':
            return {
                ...state,
                type: action.types,
            }
        default:
            return state
    }
}
