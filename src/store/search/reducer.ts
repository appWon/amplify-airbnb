import { SearchState, SearchAction } from './types'

const initalSearchState: SearchState = {
    keyword: '',
    date: {
        startDate: null,
        endDate: null,
    },
    guest: {
        adult: 1,
        child: 0,
        baby: 0,
        pet: 0,
    },
}

export const seachReducer = (state = initalSearchState, action: SearchAction): SearchState => {
    switch (action.type) {
        case 'UPDATE_KEY_WORD':
            return {
                ...state,
                keyword: action.keyword,
            }
        case 'UPDATE_DATE':
            return {
                ...state,
                date: action.date,
            }
        case 'UPDATE_GUEST':
            return {
                ...state,
                guest: action.guest,
            }
        default:
            return state
    }
}
