import styled from 'styled-components'

export const GradeContainer = styled.div`
    display: flex;
    align-items: center;

    .plceGradeIcon {
        color: #ff3a5c;
    }

    .plceGradeNumber {
        font-size: 13px;
        font-weight: 600;
    }

    .plceGradeCount {
        margin-left: 5px;
        font-size: 13px;
        font-weight: 300;
    }

    @media (max-width: 800px) {
        .plceGradeIcon {
            width: 25px;
            height: 25px;
        }

        .plceGradeNumber {
            font-weight: 500;
            font-size: 18px;
        }

        .plceGradeCount {
            font-size: 16px;
        }
    }
`
