import React from 'react'
import { Switch } from '@mui/material'

import * as S from './style.autoSearchButton'

interface AutoSearchButtonProps {
    label: string
    checked: boolean
    onChange: (arg: boolean) => void
}

export const AutoSearchButton: React.FC<AutoSearchButtonProps> = props => {
    const { label, checked, onChange } = props

    function handleCheckClick() {
        props.onChange(!props.checked)
    }

    return (
        <S.AuthSearchButtonContainer onClick={handleCheckClick}>
            <S.SwitchButton
                label={label}
                checked={checked}
                control={<Switch />}
                onChange={(_, checked) => onChange(checked)}
                labelPlacement="start"
                color="black"
            />
        </S.AuthSearchButtonContainer>
    )
}
