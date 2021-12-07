import styled from 'styled-components'

export const PropertyItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    border-bottom: 1px solid #eeeeee;

    @media (max-width: 800px) {
        flex-direction: column;
        height: 100%;
    }

    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        min-height: 200px;
        width: 400px;
        height: 100%;

        .content-heade {
            display: flex;
            flex-direction: column;

            .sub-title {
                font-size: 13px;
                color: #717171;
            }

            .title {
                width: calc(100% - 1em);
                position: relative;
                margin: 7px 0;
                font-size: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

                &::after {
                    content: '';
                    position: absolute;
                    right: 3px;
                    width: 15px;
                    top: 2px;
                    margin-top: 0.2em;
                    border: 1px solid white;
                }

                &::before {
                    content: '...';
                    position: absolute;
                    right: 5px;
                    bottom: 0;
                }
            }

            &::after {
                content: '';
                width: 30px;
                height: 1px;
                border-top: 1px solid #e4e4e4;
                margin-bottom: 5px;
            }
        }

        .content-body {
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
        }

        .content-footer {
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
            }
        }
    }
`
