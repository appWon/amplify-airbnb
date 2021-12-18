import styled from 'styled-components'

export const FilterButtonContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;
`

export const FilterButton = styled.button<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 15px;
    border: ${({ isOpen }) => (isOpen ? '1px solid black' : '1px solid #e4e4e4')};
    border-radius: 20px;
    box-sizing: border-box;
    background-color: white;
    cursor: pointer;

    &:hover {
        border: ${({ isOpen }) => (isOpen ? '1px solid black' : '1px solid black')};
    }
`
export const FilterButtonContent = styled.div`
    position: absolute;
    padding: 15px;
    left: 0;
    top: 100%;
    z-index: 10;
    background: white;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 15%) 0px 10px 37px;
    transform: translateY(5px);

    @media (max-width) {
        width: 100vw;
    }
`
