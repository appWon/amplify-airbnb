import styled from 'styled-components'

import { MapButton } from '../../atoms/MapButton'

export const MapZoomContainer = styled(MapButton)`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 35px;
    height: 70px;
    right: 10px;
`

export const IconButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border: none;
    background-color: white;
    cursor: pointer;

    &:hover {
        background: rgb(247, 247, 247);
    }
`
