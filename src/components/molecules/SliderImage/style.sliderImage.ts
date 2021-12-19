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

    .slick-arrow {
        position: absolute;
        width: 30px;
        height: 30px;
        opacity: 0;

        &::before {
            font-size: 30px;
        }
    }

    .slick-list {
        border-radius: 15px;
    }

    .slick-next {
        right: 0;
        z-index: 10;

        &:hover {
            &::before {
                opacity: 1;
            }
        }
    }

    .slick-prev {
        left: 0;
        opacity: 1;
        z-index: 10;

        &:hover {
            &::before {
                opacity: 1;
            }
        }
    }

    .slick-disabled {
        opacity: 0;
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
