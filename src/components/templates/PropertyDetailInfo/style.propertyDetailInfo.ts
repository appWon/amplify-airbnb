import styled from 'styled-components'

export const PropertyDetailInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 1120px;
    margin: auto;
`
export const HeaderWrapper = styled.div`
    padding: 10px 0;
`

export const Title = styled.h1`
    padding-bottom: 10px;
    font-size: 25px;
    font-weight: 500;
`

export const SubTitleWrapper = styled.div`
    display: flex;
`

export const Location = styled.span``

export const DetailImages = styled.section`
    display: flex;
    justify-content: space-between;
    width: 1120;
    height: 560;
    border-radius: 15px;
    overflow: hidden;

    img {
        height: 100%;
        max-width: 560px;
        max-height: 560px;
        cursor: pointer;
        transition: filter 0.1s ease-in;

        &:hover {
            filter: contrast(0.5);
        }
    }
`

export const DetailminiImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 272px;

    img {
        max-height: 276px !important;
    }
`
export const DetailInfoWapper = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
`

export const DetailInfo = styled.div`
    width: 650px;
`
export const DetailOpions = styled.div``

export const DetailService = styled.div`
    padding: 20px 0;
    margin-top: 40px;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
`
export const DetailMoreTextInfo = styled.div`
    padding: 50px 0;
    border-bottom: 1px solid #e4e4e4;
`

export const DetailBedroomWrapper = styled.div`
    padding: 50px 0;
    border-bottom: 1px solid #e4e4e4;
`

export const DetailBedroomOption = styled.div`
    display: inline-block;
    padding: 20px 30px 20px 20px;
    width: 300px;
    border: 1px solid #e4e4e4;
    border-radius: 15px;
`

export const FacilityWapper = styled.div`
    display: flex;
    flex-flow: wrap;
    padding: 50px 0;
    border-bottom: 1px solid #e4e4e4;
`

export const DetailInfoTitle = styled.h1`
    width: 100%;
    margin-bottom: 20px;
    font-size: 22px;
`

export const CalendarWapper = styled.section`
    padding: 50px 0;
    border-bottom: 1px solid #e4e4e4;
`
export const MapWapper = styled.section`
    padding-bottom: 50px;
    width: 100%;
    border-bottom: 1px solid #e4e4e4;
`

export const MoreButton = styled.button`
    display: flex;
    align-items: center;
    margin-top: 10px;
    border: none;
    padding: 10px 0;
    font-size: 14px;
    font-weight: 400;
    background-color: white;
    text-decoration: underline;
    cursor: pointer;

    svg {
        margin-left: 5px;
        width: 15px;
        height: 15px;
    }
`
export const PropertyContent = styled.span`
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
`
export const FacilityButtron = styled.button`
    margin: 10px 0;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #e4e4e4;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #e4e4e4;
    }
`
export const FacilityItem = styled.div`
    width: 100%;
    padding: 10x 0;
    border-bottom: 1px solid #e4e4e4;
`
export const DetailImageWapper = styled.section``
