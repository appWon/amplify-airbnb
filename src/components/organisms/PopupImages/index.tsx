import React from 'react'
import { ArrowBackIosNew as BackIcon } from '@mui/icons-material'

import * as S from './style.popupImages'

interface PopupImagesProps {
    images: string[]
    isOpen: boolean
    onChange: (arg: boolean) => void
}

export const PopupImages: React.FC<PopupImagesProps> = props => {
    const handleKeydownEvent = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            props.onChange(false)
        }
    }

    React.useEffect(() => {
        if (props.isOpen) {
            window.scrollTo(0, 0)
            document.body.style.overflow = 'hidden'
            window.addEventListener('keydown', handleKeydownEvent)
        }

        return () => {
            document.body.style.overflow = 'auto'
            window.removeEventListener('keydown', handleKeydownEvent)
        }
    }, [props.isOpen])

    return (
        <S.PopupImagesContainer isOpen={props.isOpen}>
            <S.PopupImagesHeader>
                <BackIcon onClick={() => props.onChange(false)} />
            </S.PopupImagesHeader>
            <S.PopupImagesWapper>
                {props.images
                    .reduce((arr, src, index) => {
                        const size = arr.length

                        if ((index + 1) % 3 === 1) {
                            arr = [...arr, [<S.Image src={src} key={`popupImage_${index}`} />], []]
                        } else {
                            arr[size - 1] = [
                                ...arr[size - 1],
                                <S.Image src={src} key={`popupImage_${index}`} />,
                            ]
                        }

                        return arr
                    }, [] as JSX.Element[][])
                    .map(img => {
                        return img.length > 1 ? <S.ImageWapper>{img}</S.ImageWapper> : img
                    })}
            </S.PopupImagesWapper>
        </S.PopupImagesContainer>
    )
}
