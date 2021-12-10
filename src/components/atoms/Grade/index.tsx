import React from 'react'
import { AiFillStar } from 'react-icons/ai'

import { GradeContainer } from './styled.grade'

interface GradeProps {
    value: string | number
}

export const Grade: React.FC<GradeProps> = props => {
    return (
        <GradeContainer>
            <AiFillStar className="plceGradeIcon" />
            <span className="plceGradeNumber">{props.value} </span>
            <span className="plceGradeCount">(후기 0개)</span>
        </GradeContainer>
    )
}
