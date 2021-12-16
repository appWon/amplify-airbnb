import styled, { css } from 'styled-components'

export const PropertyItemsContainer = styled.section`
    display: flex;
    position: relative;
    justify-content: space-between;
    height: 100%;
`

export const PropertyListWapper = styled.div<{
    mapFold: boolean
}>`
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px 20px;

    ${({ mapFold }) =>
        mapFold &&
        css`
            width: 740px;
            height: 100%;
            z-index: 2;
            background: white;
            animation: hide 1s;
            transition: opacity 0.2s;
            animation-fill-mode: forwards;
        `}

    @keyframes hide {
        0% {
            position: absolute;
            left: 0;
        }
        100% {
            left: -100%;
            opacity: 0;
            display: none;
            position: absolute;
        }
    }

    @media (max-width: 800px) {
        width: 100%;
        min-width: 500px;
    }

    h4 {
        font-size: 14px;
        margin-top: 10px;
    }

    h1 {
        font-size: 30px;
        font-weight: bold;
        margin: 20px 0;
    }

    .notice {
        margin: 5px;
        font-size: 14px;
        color: #717171;
    }

    .layoutLine {
        width: 100%;
        margin: 15px 0 0 0;
        border-top: 1px solid #e4e4e4;
    }

    .pageNate {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 10px 0;

        .pagination-ul {
            list-style: none;
            float: right;
            margin: 0;

            li {
                float: left;
                vertical-align: middle;
                padding: 15px;
                margin: 20px 20px;
                text-align: center;
                font-size: 14px;
                cursor: pointer;

                &:hover {
                    outline: none;
                    border-radius: 50%;
                    border: 50%;
                }
            }
        }
    }
`

export const MapWapper = styled.section`
    width: 100%;
    height: 100vh;
`
