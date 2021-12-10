import React from 'react'
import moment from 'moment'
import 'moment/locale/ko'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { FocusedInputShape, DayPickerRangeController } from 'react-dates'
import { NavigateBefore as BeforIcon, NavigateNext as AfterIcon } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'

import { CalendarContainer, CustomDay } from './style.calendar'
import { searchSelector } from '../../../store/selector'
import { UpdateDate } from '../../../store/search'

export const Calendar: React.FC = () => {
    const { date } = useSelector(searchSelector)
    const dispatch = useDispatch()
    const [focusedInput, setFocusedInput] = React.useState<FocusedInputShape | null>('startDate')

    const handleFocusChange = (focusedInput: FocusedInputShape | null) => {
        setFocusedInput(!focusedInput ? 'startDate' : focusedInput)
    }

    const handleDatesChange = (date: {
        startDate: moment.Moment | null
        endDate: moment.Moment | null
    }) => {
        dispatch(UpdateDate(date))
    }

    return (
        <CalendarContainer>
            <DayPickerRangeController
                navPrev={<BeforIcon fontSize="large" />}
                navNext={<AfterIcon fontSize="large" />}
                noBorder
                endDate={date.endDate}
                startDate={date.startDate}
                focusedInput={focusedInput}
                onDatesChange={handleDatesChange}
                onFocusChange={handleFocusChange}
                numberOfMonths={2}
                hideKeyboardShortcutsPanel
                initialVisibleMonth={() => moment().add(0, 'M')}
                renderDayContents={day => <CustomDay>{day.format('D')}</CustomDay>}
                renderMonthElement={({ month }) => <span>{month.format('YYYY년 MM월')}</span>}
            />
        </CalendarContainer>
    )
}
