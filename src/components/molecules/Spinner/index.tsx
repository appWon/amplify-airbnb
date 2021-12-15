import React from 'react'

import { SpinnerContainer } from './style.spinner'
import { CircularProgress } from '@mui/material'

export const Spinner: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
    return (
        <SpinnerContainer>
            <CircularProgress size={25} />
        </SpinnerContainer>
    )
}
