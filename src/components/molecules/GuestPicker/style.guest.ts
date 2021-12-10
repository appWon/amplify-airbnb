import styled, { css } from 'styled-components'

export const GuestPickerContainer = styled.div<{ isOpen: boolean }>`
    position: absolute;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: auto;
    top: 111px;
    left: 0;
    border-radius: 15px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 6px, rgb(0 0 0 / 7%) 0px 0px 0px 1px;
`

export const GuestItemWapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px 0;
`

export const GuestItemTitleWapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const GuestItemValuesWapper = styled.div<{ itemValue: number }>`
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
        border: 1px solid #e4e4e4;
        border-radius: 50px;
        width: 30px;
        height: 30px;
        padding: 5px;
        cursor: pointer;
    }

    ${({ itemValue }) =>
        !itemValue &&
        css`
            > :first-child {
                color: #e4e4e4;
                pointer-events: none;
            }
        `}
`
export const Title = styled.h1`
    margin-bottom: 5px;
    font-weight: 400;
`

export const Content = styled.span`
    font-size: 12px;
    font-weight: 300;
`

export const Value = styled.span`
    font-size: 20px;
    font-weight: 300;
    margin: 0 10px;
    width: 15px;
    text-align: center;
`
