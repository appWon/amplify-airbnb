import React from 'react'
import { Close as CloseIcon } from '@mui/icons-material'

import * as S from './style.moreForm'

interface MoreFormProps {
    title: string
    isOpen: boolean
    onChange: (arg: boolean) => void
}

export const MoreForm: React.FC<MoreFormProps> = props => {
    const MoreFormRef = React.useRef<HTMLDivElement>(null)

    const handleClickOutside = ({ target }: any) => {
        if (props.isOpen) {
            if (!MoreFormRef.current?.contains(target)) {
                props.onChange(false)
            }
        }
    }

    React.useEffect(() => {
        if (props.isOpen) {
            document.body.style.overflow = 'hidden'
        }

        window.addEventListener('click', handleClickOutside)

        return () => {
            document.body.style.overflow = 'auto'
            window.removeEventListener('click', handleClickOutside)
        }
    }, [props.isOpen])

    return (
        <S.MoreFormContainer isOpen={props.isOpen}>
            <S.FormWrapper ref={MoreFormRef}>
                <CloseIcon fontSize={'medium'} onClick={() => props.onChange(false)} />
                <S.MoreFormTitle>{props.title}</S.MoreFormTitle>
                <S.MoreFormText>{props.children}</S.MoreFormText>
            </S.FormWrapper>
        </S.MoreFormContainer>
    )
}
