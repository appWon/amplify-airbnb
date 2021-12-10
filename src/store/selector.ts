import { reducerType } from './index'
import { SearchState } from './search/types'

export const searchSelector = (state: reducerType): SearchState => state.search
