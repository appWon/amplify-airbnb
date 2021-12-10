import React from 'react'
import momnet from 'moment'
import { useSelector, useDispatch } from 'react-redux'

import {
    DatePickerModalContainer,
    DatePickerWapper,
    DateWapper,
    CheckDate,
} from './style.datePickerModal'
import { Calendar } from '../../molecules/Calendar'
import { searchSelector } from '../../../store/selector'
import { UpdateDate } from '../../../store/search'

interface DatePickerModalProps {
    isOpen: boolean
    onChange: (arg: boolean) => void
}

export const DatePickerModal: React.FC<DatePickerModalProps> = props => {
    const ContainerRef = React.useRef<HTMLDivElement>(null)
    const { date } = useSelector(searchSelector)
    const dispatch = useDispatch()

    const handleDeleteDate = () => {
        dispatch(
            UpdateDate({
                startDate: null,
                endDate: null,
            })
        )
    }

    const handleCloseClick = () => {
        props.onChange(false)
    }

    const handleClickOutside = ({ target }: any) => {
        if (props.isOpen) {
            if (!ContainerRef.current?.contains(target)) {
                props.onChange(false)
            }
        }
    }

    React.useEffect(() => {
        window.addEventListener('click', handleClickOutside)

        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <DatePickerModalContainer ref={ContainerRef} isOpen={props.isOpen}>
            <DatePickerWapper>
                <DateWapper>
                    <CheckDate>
                        <span className="check_title">체크인</span>
                        <span className="check_value">
                            {date.startDate
                                ? momnet(date.startDate).format('YYYY. MM. DD.')
                                : '날짜 추가'}
                        </span>
                    </CheckDate>
                    <CheckDate>
                        <span className="check_title">체크아웃</span>
                        <span className="check_value">
                            {date.endDate
                                ? momnet(date.endDate).format('YYYY. MM. DD.')
                                : '날짜 추가'}
                        </span>
                    </CheckDate>
                </DateWapper>
            </DatePickerWapper>
            <DatePickerWapper>
                <Calendar />
            </DatePickerWapper>
            <DatePickerWapper>
                <button className="delete_date" onClick={handleDeleteDate}>
                    날짜 지우기
                </button>
                <button className="close_button" onClick={handleCloseClick}>
                    닫기
                </button>
            </DatePickerWapper>
        </DatePickerModalContainer>
    )
}
