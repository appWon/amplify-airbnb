import styled from 'styled-components'

export const PropertyPickerContainer = styled.div`
    position: sticky;
    top: 0;
    width: 370px;
    height: 470px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 12px;
    padding: 24px;
    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`
export const PropertyPickerHader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CheckReservationWapper = styled.div`
    position: relative;
    width: 100%;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 15px;
    margin: 20px 0;
`
export const Price = styled.div`
    display: inline-block;
    position: relative;
    font-size: 22px;
    font-weight: 600;

    &::after {
        content: ' / 박';
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 18px;
        font-weight: 400;
        transform: translateX(110%);
    }
`

export const CheckDateWapper = styled.div`
    position: relative;
    display: flex;
    height: 55px;
    width: 318px;
    cursor: pointer;

    &:focus {
        border: 2px solid black;
        border-radius: 15px;
        div {
            visibility: visible;
        }
    }
    > :last-child {
        border-left: 1px solid #e4e4e4;
    }
`

export const CheckDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    width: 100%;

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

export const CheckGuest = styled.div`
    display: flex;
    align-items: center;
    height: 55px;
    border-top: 1px solid rgb(221, 221, 221);
    cursor: pointer;

    &:focus {
        border: 2px solid black;
        border-radius: 15px;
    }
`
export const ReservationButton = styled.button`
    width: 100%;
    height: 55px;
    background-color: #ff385c;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    color: white;
    font-size: 18px;
`

export const Warning = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 55px;
    font-size: 12px;
`

export const CalculateWapper = styled.div`
    display: flex;
    flex-direction: column;

    > :last-child {
        border-top: 1px solid #e4e4e4;
        padding-top: 18px;
    }
`

export const CheckDateModalDate = styled.div`
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

export const CalculateItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;

    .calculate_title {
        font-size: 13px;
        font-weight: 300;
    }
    .calculate_price {
        font-size: 15px;
        font-weight: 300;
    }

    .calulate_sum_title {
    }

    .calulate_sum_title {
    }
`
