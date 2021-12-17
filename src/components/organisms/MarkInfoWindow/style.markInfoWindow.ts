import styled from 'styled-components'

export const MarkInfoWindowContainer = styled.div`
    position: relative;
`
export const MarkInfoWindowWapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;

    background: white;
    border-radius: 15px;
    transform: translate(-80px, -240px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28);
    z-index: 10;

    .info_window_img {
        width: 300px;
        height: 200px;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }
`
export const ContentWapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    .info_window_type {
        padding: 3px 0;
        font-weight: 300;
        font-size: 15px;
    }

    .info_window_title {
        position: relative;
        padding-bottom: 3px;
        font-weight: 300;
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &::after {
            content: '...';
            position: absolute;
            width: 20px;
            height: 100%;
            right: 0px;
            background-color: white;
        }
    }

    .price_wapper {
        display: flex;
        align: center;

        .info_window_price {
            padding: 5px 0;
            font-weight: 800;
            font-size: 15px;
        }

        .info_window_per-price {
            padding: 5px 0;
            font-size: 15px;
        }
    }
`
