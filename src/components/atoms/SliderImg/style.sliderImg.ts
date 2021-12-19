import styled from 'styled-components'

export const SliderItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    width: 100%;
    min-height: 200px;
    height: 100%;

    @media (max-width: 800px) {
        min-width: 100%;
        min-height: 100%;

        img {
            width: 100% !important;
            height: 100% !important;
            min-width: 100% !important;
            min-height: 100% !important;
        }
    }
`
