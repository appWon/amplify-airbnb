import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'

import * as S from './style.guest'
import { searchSelector } from '../../../store/selector'
import { UpdateGuest } from '../../../store/search/types'

interface itemType {
    title: string
    content: string
    var: 'adult' | 'child' | 'baby' | 'pet'
}

const Items: itemType[] = [
    {
        title: '성인',
        content: '만 13세 이상',
        var: 'adult',
    },
    {
        title: '어린이',
        content: '만 2~12세 이상',
        var: 'child',
    },
    {
        title: '유아',
        content: '만 2세 미만',
        var: 'baby',
    },
    {
        title: '반려동물',
        content: '도우미 반려동물',
        var: 'pet',
    },
]

interface GuestPickerProps {
    isOpen: boolean
    onChange: (arg: boolean) => void
}

export const GuestPicker: React.FC<GuestPickerProps> = props => {
    const ContainerRef = React.useRef<HTMLDivElement>(null)
    const { guest } = useSelector(searchSelector)
    const dispatch = useDispatch()

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
    }, [props.isOpen])

    return (
        <S.GuestPickerContainer ref={ContainerRef} isOpen={props.isOpen}>
            {Items.map(item => (
                <S.GuestItemWapper key={item.var}>
                    <S.GuestItemTitleWapper>
                        <S.Title>{item.title}</S.Title>
                        <S.Content>{item.content}</S.Content>
                    </S.GuestItemTitleWapper>
                    <S.GuestItemValuesWapper itemValue={guest[item.var]}>
                        <RemoveIcon
                            onClick={() =>
                                dispatch(
                                    UpdateGuest({
                                        ...guest,
                                        [item.var]: guest[item.var] - 1,
                                    })
                                )
                            }
                        />
                        <S.Value>{guest[item.var]}</S.Value>
                        <AddIcon
                            onClick={() =>
                                dispatch(
                                    UpdateGuest({
                                        ...guest,
                                        [item.var]: guest[item.var] + 1,
                                    })
                                )
                            }
                        />
                    </S.GuestItemValuesWapper>
                </S.GuestItemWapper>
            ))}
            {props.children}
        </S.GuestPickerContainer>
    )
}
