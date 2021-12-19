import styled from 'styled-components'

export const PropertyItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    max-width: 800px;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    cursor: pointer;

    &:hover {
        .slick-arrow {
            opacity: 1;
        }
    }

    @media (max-width: 800px) {
        flex-direction: column;
        height: 100%;
    }
`
export const PropertyItemContentWapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-left: 20px;

    @media (max-width: 800px) {
        padding: 10px 0;
    }
`

export const ContentHeader = styled.div`
    .sub-title {
        font-size: 13px;
        color: #717171;
    }

    .title {
        position: relative;
        margin: 7px 0;
        width: 400px;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        line-height: 25px;
    }

    @media (max-width: 800px) {
        .sub-title {
            font-size: 20px;
        }

        .title {
            width: 100%;
            font-size: 25px;
            line-height: 27px;
            padding-bottom: 10px;
        }
    }
`

export const ContentBody = styled.div`
    height: 100%;

    .capacity {
        margin: 5px 0;
        font-size: 13px;
        line-height: 20px;
        color: rgb(113, 113, 113);
    }

    .options {
        .option {
            margin: 10px 0;
            font-size: 13px;
            color: rgb(113, 113, 113);
            line-height: 20px;

            span {
                margin-right: 5px;
            }
        }
    }

    @media (max-width: 800px) {
        display: none;
    }
`

export const contentFooter = styled.div`
    position: relative;
    display: flex;
    flex: auto;
    justify-content: space-between;
    align-items: flex-end;

    .price-warpper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .price {
            font-size: 15px;
            font-weight: 800;
        }
        .perDay {
            margin: 0 5px;
            font-size: 15px;
            font-weight: 300;
        }

        @media (max-width: 800px) {
            .price {
                font-size: 25px;
                font-weight: 800;
            }
            .perDay {
                margin: 0 5px;
                font-size: 20px;
                font-weight: 300;
            }
        }
    }
`
