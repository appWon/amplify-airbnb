import styled from 'styled-components'

export const PopupImagesContainer = styled.section<{ isOpen: boolean }>`
    position: absolute;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 300;
    overflow: auto;
    background-color: rgba(255, 255, 255, 0.95);
`

export const PopupImagesHeader = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 60px;
    width: 100%;
    top: 0;
    z-index: 10;
    background-color: white;

    svg {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            background-color: #e4e4e4;
        }
    }
`

export const PopupImagesWapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    min-width: 650px;
    width: 100px;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    overflow: auto;
`

export const Image = styled.img`
    max-width: 650px;
    max-height: 430px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 4px;
    cursor: pointer;
    transition: filter 0.1s ease-in;

    &:hover {
        filter: contrast(0.5);
    }
`

export const ImageWapper = styled.div`
    display: flex;
    justify-content: space-between;

    img {
        width: 323px;
    }
`
