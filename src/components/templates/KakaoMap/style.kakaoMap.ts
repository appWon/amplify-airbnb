import styled from 'styled-components'

export const KakaoMapContainer = styled.section`
    display: inline-block;
    position: sticky;
    top: 0;
    width: 100vw;
    height: 100vh;
    transition: all 0.2s;
    background-color: black;

    @media (max-width: 800px) {
        display: none;
    }
`
export const ControllerContainer = styled.div`
    position: absolute;
    top: 10px;
    width: 100%;
    z-index: 100;
`
