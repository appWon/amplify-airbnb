import React from 'react'

import {
    ServiceIconContainer,
    ServiceIconWapper,
    ServiceIconContent,
    Title,
    Content,
} from './style.serviceIcon'

interface ServiceIconProps {
    icon: React.ReactNode
    title: string
    content?: string
    margin?: string
}

export const ServiceIcon: React.FC<ServiceIconProps> = props => {
    const { icon, title, content, margin } = props

    return (
        <ServiceIconContainer margin={margin}>
            <ServiceIconWapper>{icon}</ServiceIconWapper>
            <ServiceIconContent>
                {title && <Title>{title}</Title>}
                {content && <Content>{content}</Content>}
            </ServiceIconContent>
        </ServiceIconContainer>
    )
}
