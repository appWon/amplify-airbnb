import styled from 'styled-components'

export const ServiceIconContainer = styled.div<{
    margin: string | undefined
}>`
    display: flex;
    align-items: center;
    height: 50px;
    margin: ${({ margin }) => margin && margin};
`
export const ServiceIconWapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
`

export const ServiceIconContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Title = styled.h2`
    font-size: 15px;
    font-weight: 400;
    width: 250px;
`

export const Content = styled.div`
    margin-top: 10px;
    font-size: 13px;
    font-weight: 300;
`
