import styled, { css } from 'styled-components'
import { FormControlLabel } from '@mui/material'

import { MapButton } from '../../atoms/MapButton'

export const AuthSearchButtonContainer = styled(MapButton)`
    position: absolute;
    padding: 20px 20px 20px 15px;
    width: auto;
    height: 35px;
    left: 50%;
    font-size: 5px;
    transform: translate(-50%, 0);
`

export const SwitchButton = styled(FormControlLabel)`
    .MuiSwitch-track {
        background-color: #cccccc;
    }

    .css-ahj2mt-MuiTypography-root {
        font-size: 13px;
        font-weight: 500;
    }

    ${({ checked }) =>
        checked &&
        css`
            .css-jsexje-MuiSwitch-thumb {
                background-color: black;
            }

            .css-1yjjitx-MuiSwitch-track {
                background-color: #cccccc !important;
            }
        `}
`
