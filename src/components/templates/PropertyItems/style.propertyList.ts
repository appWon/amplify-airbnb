import styled, { css, keyframes } from 'styled-components'

export const PropertyItemsContainer = styled.section<{
    mapFold: boolean
}>`
    position: relative;
    flex-direction: column;
    padding: 0 20px 20px 20px;
    /* min-width: 750px; */
    /* transition: all 1s; */

    ${({ mapFold }) =>
        !mapFold
            ? css`
                  animation: show 0.2s;
                  opacity: 1;
                  transition: opacity 0.2s;
              `
            : css`
                  animation: hide 0.2s;
                  opacity: 0;
                  transition: opacity 0.2s;
              `}

    @keyframes hide {
        0% {
            display: block;
        }
        100% {
            display: none;
        }
    }

    @keyframes show {
        0% {
            display: none;
        }
        100% {
            display: block;
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
