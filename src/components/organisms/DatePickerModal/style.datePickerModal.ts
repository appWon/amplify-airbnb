import styled from 'styled-components'

export const DatePickerModalContainer = styled.div<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -20px;
    right: -20px;
    padding: 20px;
    height: 470px;
    z-index: 1000;
    border-radius: 16px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 20%) 0px 6px 20px;
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`

export const DatePickerWapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .delete_date {
        margin-left: 20px;
        color: black;
        font-size: 15px;
        font-weight: 500;
        border: none;
        background-color: white;
        cursor: pointer;
        text-decoration: underline;
    }

    .close_button {
        padding: 10px 15px;
        margin: 0 20px 0 auto;
        background-color: black;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;
    }
`

export const DateWapper = styled.div`
    position: relative;
    display: flex;
    height: 55px;
    width: 318px;
    top: 0px;
    right: 0px;
    cursor: pointer;
    margin-left: auto;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 15px;

    &:focus {
        border: 1.5px solid black;
    }
`
export const CheckDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    width: 100%;

    &:last-child {
        border-left: 1px solid #e4e4e4;
    }

    .check_title {
        font-size: 10px;
        font-weight: 500;
        padding: 3px 0;
    }

    .check_value {
        font-size: 15px;
        font-weight: 400;
        padding: 3px 0;
    }
`
