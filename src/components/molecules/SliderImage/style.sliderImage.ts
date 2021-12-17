import styled from 'styled-components'

export const SliderImageContainer = styled.div`
    width: 300px;
    height: 200px;
    border: 1px solid #e4e4e4;
    border-radius: 15px;
    cursor: pointer;

    @media (max-width: 800px) {
        width: 100%;
        height: auto;
    }

    &:hover {
        .slick-arrow {
            visibility: visible;
        }
    }

    .slick-arrow {
        position: absolute;
        visibility: hidden;
        z-index: 10;
        width: 40px;
        height: 40px;
        top: 50%;
        color: black;
        background-color: white;
        border-radius: 50%;
        opacity: 0.4;
        cursor: pointer;
        transform: translateY(-50%);

        &:hover {
            opacity: 1;
        }

        @media (max-width: 800px) {
            top: 200px;
        }
    }

    .slick-list {
        border-radius: 15px;
    }

    .slick-next {
        right: 5px;
    }

    .slick-prev {
        left: 5px;
    }

    .slick-dots {
        bottom: 0;

        .slick-active {
            opacity: 1;

            button:before {
                color: White !important;
            }
        }
    }
`
