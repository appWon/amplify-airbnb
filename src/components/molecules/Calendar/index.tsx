import React from 'react'
import moment from 'moment'
import 'moment/locale/ko'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { FocusedInputShape, DayPickerRangeController } from 'react-dates'
import { NavigateBefore as BeforIcon, NavigateNext as AfterIcon } from '@mui/icons-material'

import { CalendarContainer, CustomDay } from './style.calendar'

export const Calendar: React.FC = () => {
    const [startDate, setStartDate] = React.useState<moment.Moment | null>(null)
    const [endDate, setEndDate] = React.useState<moment.Moment | null>(null)
    const [focusedInput, setFocusedInput] = React.useState<FocusedInputShape | null>('startDate')

    const handleFocusChange = (focusedInput: FocusedInputShape | null) => {
        setFocusedInput(!focusedInput ? 'startDate' : focusedInput)
    }

    const handleDatesChange = (date: {
        startDate: moment.Moment | null
        endDate: moment.Moment | null
    }) => {
        setStartDate(date.startDate)
        setEndDate(date.endDate)
    }

    return (
        <CalendarContainer>
            <DayPickerRangeController
                navPrev={<BeforIcon fontSize="large" />}
                navNext={<AfterIcon fontSize="large" />}
                noBorder
                endDate={endDate}
                startDate={startDate}
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
