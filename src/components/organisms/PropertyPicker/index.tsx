import React from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'

import * as S from './style.propertyPicker'
import { Grade } from '../../atoms/Grade'
import { DatePickerModal } from '../../organisms/DatePickerModal'
import { GuestPicker } from '../../molecules/GuestPicker'
import { searchSelector } from '../../../store/selector'

export const PropertyPicker: React.FC = Props => {
    const { date, guest } = useSelector(searchSelector)
    const [datePickerModal, setDatePickerModal] = React.useState<boolean>(false)
    const [guestPcikerModal, setGuestPickerModal] = React.useState<boolean>(false)

    return (
        <S.PropertyPickerContainer>
            <S.PropertyPickerHader>
                <S.Price>₩ {Number(753443).toLocaleString()}</S.Price>
                <Grade value="4.3" />
            </S.PropertyPickerHader>
            <S.CheckReservationWapper>
                <S.CheckDateWapper
                    onClick={() => {
                        setDatePickerModal(true)
                    }}
                >
                    <S.CheckDate>
                        <span className="check_title">체크인</span>
                        <span className="check_value">
                            {date.startDate
                                ? moment(date.startDate).format('YYYY. MM. DD.')
                                : '날짜 추가'}
                        </span>
                    </S.CheckDate>
                    <S.CheckDate>
                        <span className="check_title">체크아웃</span>
                        <span className="check_value">
                            {date.endDate
                                ? moment(date.endDate).format('YYYY. MM. DD.')
                                : '날짜 추가'}
                        </span>
                    </S.CheckDate>
                </S.CheckDateWapper>
                <S.CheckGuest tabIndex={0} onClick={() => setGuestPickerModal(true)}>
                    <S.CheckDate>
                        <span className="check_title">인원</span>
                        <span className="check_value">
                            {JSON.stringify(
                                Object.keys(guest).reduce(
                                    (str, value) => {
                                        const key = value as keyof typeof guest

                                        if (value === 'adult' || value === 'child') {
                                            str['게스트'] = str['게스트']
                                                ? str['게스트'] + guest[key]
                                                : guest[key]
                                        } else if (value === 'baby') {
                                            str['유아'] = guest[key]
                                        } else if (value === 'pet') {
                                            str['반려동물'] = guest[key]
                                        }

                                        return str
                                    },
                                    {} as {
                                        게스트: number
                                        유아: number
                                        반려동물: number
                                    }
                                )
                            )
                                .replace(/[""{}:]/g, '')
                                .replace(/,[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,4}?0/g, '')
                                .replace(/(?<=[0-9])/g, '명')
                                .replace(/(?<=반려동물[0-9])명/g, '마리')
                                .replace(/(?=[0-9])/g, ' ')
                                .replace(/[,]/g, ', ')}
                        </span>
                    </S.CheckDate>
                </S.CheckGuest>
                <DatePickerModal isOpen={datePickerModal} onChange={setDatePickerModal} />
                <GuestPicker isOpen={guestPcikerModal} onChange={setGuestPickerModal} />
            </S.CheckReservationWapper>
            <S.ReservationButton>예약하기</S.ReservationButton>
            <S.Warning>예약 확정 전에는 요금이 청구되지 않습니다.</S.Warning>
            <S.CalculateWapper>
                <S.CalculateItem>
                    <span className="calculate_title">₩77,200 x 25박</span>
                    <span className="calculate_price">₩1,930,000</span>
                </S.CalculateItem>
                <S.CalculateItem>
                    <span className="calculate_title">청소비</span>
                    <span className="calculate_price">₩1,930,000</span>
                </S.CalculateItem>
                <S.CalculateItem>
                    <span className="calculate_title">서비스 수수료</span>
                    <span className="calculate_price">₩1,930,000</span>
                </S.CalculateItem>
                <S.CalculateItem>
                    <span className="calulate_sum_title">총 합계</span>
                    <span className="calulate_sum_title">₩1,930,000</span>
                </S.CalculateItem>
            </S.CalculateWapper>
        </S.PropertyPickerContainer>
    )
}
