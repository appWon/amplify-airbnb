import React from 'react'
import {
    ArrowBack as PrevIcon,
    ArrowForward as NextIcon,
} from '@mui/icons-material'
import { FoldContainer } from './style.foldButton'

interface FoldButtonProps {
    isFold: boolean | undefined
    onChange?: (arg: boolean) => void
}

export const FoldButton: React.FC<FoldButtonProps> = props => {
    const { isFold, onChange } = props

    const handleClick = () => {
        onChange && onChange(!isFold)
    }

    return (
        <FoldContainer onClick={handleClick}>
            {!isFold ? (
                <PrevIcon />
            ) : (
                <>
                    <NextIcon />
                    <span>목록보기</span>
                </>
            )}
        </FoldContainer>
    )
}
