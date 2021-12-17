import { reducerType } from './index'
import { SearchState } from './search/'
import { FilterState } from './filter'

export const searchSelector = (state: reducerType): SearchState => state.search
export const filterSelector = (state: reducerType): FilterState => state.filter
