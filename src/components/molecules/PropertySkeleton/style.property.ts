import styled from 'styled-components'

export const PropertySkeletonContainer = styled.div`
    padding: 20px 0;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
`

export const SkeletonContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    width: 400px;
    height: 200px;
`
export const Skeleton = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: #fff;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        animation-name: Shimmer;
        animation-fill-mode: forwards;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        background-image: linear-gradient(
            -75deg,
            transparent 0%,
            transparent 30%,
            #fff 50%,
            transparent 70%,
            transparent 100%
        );
        background-repeat: no-repeat;
        background-size: inherit;
    }

    @keyframes Shimmer {
        0% {
            transform: translateX(-100%);
        }

        100% {
            transform: translateX(100%);
        }
    }
`
