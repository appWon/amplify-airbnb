export interface SearchState {
    keyword: string
    date: searchDate
    guest: Guest
    location: Location
    id: string
    loading: boolean
}

export interface searchDate {
    startDate: moment.Moment | null
    endDate: moment.Moment | null
}

export interface Guest {
    adult: number
    child: number
    baby: number
    pet: number
}

export interface Location {
    lat: number
    lon: number
}

export const UpdateDate = (date: searchDate) => ({ type: 'UPDATE_DATE', date } as const)

export const UpdateGuest = (guest: Guest) => ({ type: 'UPDATE_GUEST', guest } as const)

export const UpdateKeyWord = (keyword: string) => ({ type: 'UPDATE_KEY_WORD', keyword } as const)

export const UpdateLoading = (loading: boolean) => ({ type: 'UPDATE_LOADING', loading } as const)

export const UpdateLocation = (location: Location) =>
    ({ type: 'UPDATE_LOCATION', location } as const)

export type SearchAction =
    | ReturnType<typeof UpdateKeyWord>
    | ReturnType<typeof UpdateDate>
    | ReturnType<typeof UpdateGuest>
    | ReturnType<typeof UpdateLoading>
    | ReturnType<typeof UpdateLocation>
