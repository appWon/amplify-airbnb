import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { SearchState, seachReducer } from './search'
import { FilterState, filterReducer } from './filter'

export interface reducerType {
    search: SearchState
    filter: FilterState
}

const reducer = combineReducers({
    search: seachReducer,
    filter: filterReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))
