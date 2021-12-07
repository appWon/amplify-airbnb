import React from 'react'

import { SkeletonUIContainer } from './style.skeletonUi'

export const SkeletonUI: React.FC<
    React.HtmlHTMLAttributes<HTMLElement>
> = props => {
    return <SkeletonUIContainer {...props} />
}
