import styled from 'styled-components'

export const CustomDay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
`

export const CalendarContainer = styled.div`
    position: relative;
    height: 330px;
    overflow: hidden;

    .DayPicker_weekHeader {
        width: 100%;
        z-index: 0 !important;

        .DayPicker_weekHeader_li {
            font-size: 12px;
        }
    }

    .DayPickerNavigation {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        top: 15px;
        z-index: 0 !important;

        .DayPickerNavigation_button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;

            svg {
                font-size: 25px;
            }

            &:hover {
                background-color: #e4e4e4;
            }
        }
    }

    .CalendarMonthGrid {
        background: none;

        .CalendarMonth {
            position: relative;
            background: none;
        }
    }

    .CalendarMonth_caption {
        font-size: 15px;
    }

    .CalendarMonth_table {
        border-collapse: separate;
        border-spacing: 0 4px;
        transform: translateY(20px);

        .CalendarDay {
            border: none;
            background-color: white;
        }

        .CalendarDay__default {
            &:hover {
                ${CustomDay} {
                    border: 1px solid black;
                    border-radius: 50%;
                }
            }
        }

        .CalendarDay__selected {
            border: none;
            background-color: rgb(228, 228, 228, 0.5);
        }

        .CalendarDay__selected_span {
            border-radius: none;
            background-color: rgb(228, 228, 228, 0.5);
            color: black;

            &:hover {
                ${CustomDay} {
                    border: 1px solid black;
                    border-radius: 50%;
                    background-color: white;
                }
            }
        }

        .CalendarDay__selected_start {
            position: relative;
            border-top-left-radius: 50%;
            border-bottom-left-radius: 50%;

            ${CustomDay} {
                border-radius: 50%;
                background-color: black;
            }

            &:hover {
                &::after {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    content: '체크인 날짜';
                    position: absolute;
                    top: -25px;
                    left: 50%;
                    width: 90px;
                    color: black;
                    height: 20px;
                    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
                    border-radius: 3px;
                    transform: translateX(-50%);
                    background-color: white;
                    z-index: 100;
                }
            }
        }

        .CalendarDay__selected_end {
            position: relative;
            border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;

            ${CustomDay} {
                border-radius: 50%;
                background-color: black;
            }

            &:hover {
                &::after {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    content: '체크아웃 날짜';
                    position: absolute;
                    top: -25px;
                    left: 50%;
                    width: 90px;
                    color: black;
                    height: 20px;
                    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
                    border-radius: 3px;
                    transform: translateX(-50%);
                    background-color: white;
                    z-index: 100;
                }
            }
        }

        .CalendarDay__hovered_span {
            color: black;
            background-color: rgb(228, 228, 228, 0.5);

            &:hover {
                border-top-right-radius: 50%;
                border-bottom-right-radius: 50%;

                ${CustomDay} {
                    border: 1px solid black;
                    border-radius: 50%;
                    background-color: white;
                }
            }
        }
    }

    .DayPicker_transitionContainer {
        overflow: visible;
        top: 40px;
    }

    .CalendarMonth_caption {
        width: 200px;
        padding: 0;
        margin: auto;
        transform: translateY(-15px);
    }
`
