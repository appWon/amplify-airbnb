import React from 'react'

import {
    PropertySkeletonContainer,
    SkeletonContent,
    Skeleton,
} from './style.property'
import { SkeletonUI } from '../../atoms/SkeletonUI'

export const PropertySkeleton: React.FC = props => {
    return (
        <PropertySkeletonContainer>
            <Skeleton>
                <SkeletonUI
                    className="skeletonImg"
                    style={{ width: '300px', height: '200px' }}
                />
                <SkeletonContent>
                    <SkeletonUI
                        className="skeletonSubTitle"
                        style={{
                            marginBottom: '10px',
                            width: '150px',
                            height: '10px',
                        }}
                    />
                    <SkeletonUI
                        className="skeletonTitle"
                        style={{
                            marginBottom: '10px',
                            width: '350px',
                            height: '10px',
                        }}
                    />
                    <SkeletonUI
                        className="skeletonOption"
                        style={{
                            marginBottom: '10px',
                            width: '150px',
                            height: '10px',
                        }}
                    />
                    <SkeletonUI
                        className="skeletonCategory"
                        style={{
                            marginBottom: '10px',
                            width: '350px',
                            height: '10px',
                        }}
                    />
                    <SkeletonUI
                        className="skeletonPrice"
                        style={{
                            marginTop: 'auto',
                            width: '200px',
                            height: '10px',
                        }}
                    />
                </SkeletonContent>
            </Skeleton>
        </PropertySkeletonContainer>
    )
}
