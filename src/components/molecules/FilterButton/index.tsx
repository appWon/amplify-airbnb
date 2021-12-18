import React from 'react'
import { KeyboardArrowDown as OpenIcon, KeyboardArrowUp as CloseIcon } from '@mui/icons-material'

import * as S from './style.filterButton'

interface FilterButton {
    title: string
    propsIsOpen?: boolean
    menu?: boolean
}

export const FilterButton: React.FC<FilterButton> = props => {
    const buttonRef = React.useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    function handleCloseClick(e: MouseEvent) {
        const target = e.target as HTMLElement

        if (isOpen && !buttonRef.current?.contains(target as Element)) {
            setIsOpen(false)
        } else if (target.id === 'save') {
            setIsOpen(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('mousedown', handleCloseClick)

        return () => window.addEventListener('mousedown', handleCloseClick)
    }, [isOpen])

    return (
        <S.FilterButtonContainer ref={buttonRef} onClick={() => setIsOpen(true)}>
            <S.FilterButton isOpen={isOpen}>
                {props.title}
                {props.menu && !isOpen && <OpenIcon />}
                {props.menu && isOpen && <CloseIcon />}
            </S.FilterButton>
            {isOpen && <S.FilterButtonContent>{props.children}</S.FilterButtonContent>}
        </S.FilterButtonContainer>
    )
}
