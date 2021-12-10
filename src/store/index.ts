import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { SearchState, seachReducer } from './search'

export interface reducerType {
    search: SearchState
}

const reducer = combineReducers({
    search: seachReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))
