import styled from 'styled-components'

export const MoreFormContainer = styled.section<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 300;
`

export const FormWrapper = styled.div`
    position: absolute;
    padding: 20px;
    min-height: 800px;
    width: 750px;
    height: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 15px;
    box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
    overflow: none;

    svg {
        cursor: pointer;
    }
`

export const MoreFormTitle = styled.h1`
    padding: 30px 0;
    font-size: 25px;
    font-weight: 600;
`

export const MoreFormText = styled.div`
    width: 100%;
    height: 95%;
    font-size: 15px;
    line-height: 30px;
    font-weight: 300;
    padding: 0 10px;
    overflow: auto;
`
