import React from 'react'

import { MapButtonContainer } from './style.mapButton'

export const MapButton: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
    return <MapButtonContainer {...props}>{props.children}</MapButtonContainer>
}
