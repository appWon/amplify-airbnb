export interface SearchState {
    keyword: string
    date: searchDate
    guest: Guest
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

export const UpdateDate = (date: searchDate) => ({ type: 'UPDATE_DATE', date } as const)

export const UpdateGuest = (guest: Guest) => ({ type: 'UPDATE_GUEST', guest } as const)

export const UpdateKeyWord = (keyword: string) => ({ type: 'UPDATE_KEY_WORD', keyword } as const)

export type SearchAction =
    | ReturnType<typeof UpdateKeyWord>
    | ReturnType<typeof UpdateDate>
    | ReturnType<typeof UpdateGuest>
