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
    location: {
        lat: 37.4765792187833,
        lon: 126.98162506458999,
    },
    id: '',
    loading: false,
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
        case 'UPDATE_LOCATION':
            return {
                ...state,
                location: action.location,
            }
        default:
            return state
    }
}
