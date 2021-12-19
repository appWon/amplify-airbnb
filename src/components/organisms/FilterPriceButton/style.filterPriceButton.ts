import styled from 'styled-components'

export const FilterPriceButtonContainer = styled.div``

export const PriceWapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`

export const PriceAverage = styled.div`
    padding: 20px 20px 80px 20px;
    font-size: 18px;
    font-weight: 300;
`

export const ChartWapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    width: 400px;
    left: 50%;
    transform: translateX(-50%);

    canvas {
        height: 80px !important;
    }

    .css-53tbrc-MuiSlider-root {
        position: absolute;
        padding: 0 !important;
        /* width: 95%; */
        height: 1px;
        bottom: 4px;
        color: black;
    }

    .css-1n40zqk-MuiSlider-track {
        color: black;
    }
`

export const PriceInput = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;
    margin: 10px 0;
    width: 200px;
    height: 70px;
    border-radius: 15px;
    box-shadow: #e4e4e4 0px 0px 0px 1px;

    &:focus-within {
        box-shadow: black 0px 0px 0px 2px;
    }

    > * {
        margin: 1px 0;
    }
`

export const PriceInputHeader = styled.div`
    font-size: 14px;
    font-weight: 300;
`

export const PrcieValueWapper = styled.div`
    display: flex;
    align-items: center;
`

export const PriceKrw = styled.span`
    margin-right: 10px;
    font-size: 20px;
`

export const PriceInputValue = styled.input.attrs({
    type: 'number',
})`
    position: relative;
    border: none;
    overflow: hidden;
    font-size: 20px;
    background-color: none;

    &:focus {
        outline: none;
    }

    &input::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`
export const Dash = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 30px;
`

export const ActionWapper = styled.div`
    display: flex;
    justify-content: space-between;
`
export const RemoveButton = styled.button`
    padding: 10px 15px;
    color: black;
    border: none;
    font-size: 15px;
    background-color: white;
    text-decoration: underline;
    cursor: pointer;
`

export const Button = styled.button`
    padding: 10px 15px;
    color: white;
    border: none;
    font-size: 15px;
    border-radius: 10px;
    background-color: black;
    cursor: pointer;
`
export const Fence = styled.div`
    padding-bottom: 15px;
    width: 100%;
    height: 1px;
    border-top: 1px solid #e4e4e4;
`
