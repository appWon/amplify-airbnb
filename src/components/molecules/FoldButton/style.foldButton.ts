import styled from 'styled-components'

import { MapButton } from '../../atoms/MapButton'

export const FoldContainer = styled(MapButton)`
    position: absolute;
    width: auto;
    padding: 0 15px;
    height: 35px;
    left: 10px;

    &:hover {
        background: rgb(247, 247, 247);
    }
`
