import React from 'react'

import { SpinnerContainer } from './style.spinner'

export const Spinner: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
    const { children, ...others } = props
    return <SpinnerContainer {...others}>{children}</SpinnerContainer>
}
