import React from 'react'

import * as S from './style.propertyDetailInfo'
import {
    HomeOutlined as HomeIcon,
    SanitizerOutlined as CleanIcon,
    DoorBackOutlined as CheckIcon,
    LocationOnOutlined as LocationIcon,
    TvOutlined as TvIcon,
    KingBedOutlined as BedIcon,
    ArrowForwardIos as NextIcon,
} from '@mui/icons-material'
import { Calendar } from '../../molecules/Calendar'
import { ServiceIcon } from '../../molecules/ServiceIcon'
import { Grade } from '../../atoms/Grade'
import { KakaoMap } from '../../organisms/KakaoMap'
import { Marker } from '../../atoms/Marker'
import { PropertyPicker } from '../../organisms/PropertyPicker'
import { MoreForm } from '../../molecules/MoreForm'
import { PopupImages } from '../../organisms/PopupImages'

export const PropertyDetailInfo: React.FC = props => {
    const [moreDate, setMoreDate] = React.useState<boolean>(false)
    const [facilityForm, setFacilityForm] = React.useState<boolean>(false)
    const [imagesPopup, setImagesPopup] = React.useState<boolean>(false)

    return (
        <S.PropertyDetailInfoContainer>
            <S.HeaderWrapper>
                <S.Title>{'3.💕신축#청결우선#아늑한집#비데는필수'}</S.Title>
                <S.SubTitleWrapper>
                    <Grade value={4.3} />
                    <S.Location>{'Euljiro-dong, Jung-gu, 서울, 한국'}</S.Location>
                </S.SubTitleWrapper>
            </S.HeaderWrapper>
            <S.DetailImageWapper>
                <S.DetailImages onClick={() => setImagesPopup(true)}>
                    {[
                        'https://img3.yna.co.kr/etc/inner/KR/2017/05/17/AKR20170517102400033_01_i_P4.jpg',
                        'https://img3.yna.co.kr/etc/inner/KR/2017/05/17/AKR20170517102400033_01_i_P4.jpg',
                        'https://img3.yna.co.kr/etc/inner/KR/2017/05/17/AKR20170517102400033_01_i_P4.jpg',
                        'https://img3.yna.co.kr/etc/inner/KR/2017/05/17/AKR20170517102400033_01_i_P4.jpg',
                        'https://img3.yna.co.kr/etc/inner/KR/2017/05/17/AKR20170517102400033_01_i_P4.jpg',
                    ]
                        .reduce((node, value, index) => {
                            if (!node.length) {
                                node = [[<img src={value} key={`${index}_image`} />], []]
                            } else if (node[node.length - 1].length < 2) {
                                node[node.length - 1] = [
                                    ...node[node.length - 1],
                                    <img src={value} key={`${index}_image`} />,
                                ]
                            } else {
                                node[node.length] = [<img src={value} key={`${index}_image`} />]
                            }

                            return node
                        }, [] as JSX.Element[][])
                        .map(value => {
                            return value.length !== 1 ? (
                                <S.DetailminiImageWrapper>{value}</S.DetailminiImageWrapper>
                            ) : (
                                value
                            )
                        })}
                </S.DetailImages>
                <PopupImages
                    isOpen={imagesPopup}
                    onChange={setImagesPopup}
                    images={[
                        'https://img3.yna.co.kr/etc/inner/KR/2017/05/17/AKR20170517102400033_01_i_P4.jpg',
                        'https://img3.yna.co.kr/etc/inner/KR/2017/05/17/AKR20170517102400033_01_i_P4.jpg',
                        'https://img3.yna.co.kr/etc/inner/KR/2017/05/17/AKR20170517102400033_01_i_P4.jpg',
                        'https://img3.yna.co.kr/etc/inner/KR/2017/05/17/AKR20170517102400033_01_i_P4.jpg',
                        'https://img3.yna.co.kr/etc/inner/KR/2017/05/17/AKR20170517102400033_01_i_P4.jpg',
                        'https://img3.yna.co.kr/etc/inner/KR/2017/05/17/AKR20170517102400033_01_i_P4.jpg',
                    ]}
                />
            </S.DetailImageWapper>
            <S.DetailInfoWapper>
                <S.DetailInfo>
                    <S.HeaderWrapper>
                        <S.Title>{'Kate님이 호스팅하는 공동 주택 전체'}</S.Title>
                        <S.DetailOpions>{'최대 인원 3명침실 1개침대 2개욕실 1개'}</S.DetailOpions>
                    </S.HeaderWrapper>
                    <S.DetailService>
                        <ServiceIcon
                            icon={<HomeIcon fontSize="medium" />}
                            title={'집 전체'}
                            content={'아파트 전체를 단독으로 사용하시게 됩니다.'}
                            margin="15px 0"
                        />
                        <ServiceIcon
                            icon={<CleanIcon fontSize="medium" />}
                            title={'집 전체'}
                            content={
                                '에어비앤비의 강화된 5단계 청소 절차를 준수하겠다고 동의한 호스트입니다'
                            }
                            margin="15px 0"
                        />
                        <ServiceIcon
                            icon={<CheckIcon fontSize="medium" />}
                            title={'집 전체'}
                            content={'키패드를 이용해 체크인하세요.'}
                            margin="15px 0"
                        />
                        <ServiceIcon
                            icon={<LocationIcon fontSize="medium" />}
                            title={'집 전체'}
                            content={
                                '최근 숙박한 게스트 중 100%가 위치에 별점 5점을 준 숙소입니다.'
                            }
                            margin="15px 0"
                        />
                    </S.DetailService>
                    <S.DetailMoreTextInfo>
                        <S.PropertyContent>
                            -- 저의 그린하우스는 입실전 객실의 철저한 향균 소독관리에 최선을
                            다합니다
                            <br /> -- 중심부에 위치하면서도 조용한 숙소에서 편안한 시간을 보내세요.
                            <br />
                            --1일 2만원대의 합리적인 가격으로 부천의 편리한 교통과 입지를 누리세요.{' '}
                            <br />
                            -- 부천남부역에서 5분(도보) <br />
                            -- 인천공항에서 70분(지하철) -- 서울역에서 40분(지하철).
                        </S.PropertyContent>
                        <S.MoreButton onClick={() => setMoreDate(true)}>
                            더 보기
                            <NextIcon />
                        </S.MoreButton>
                        <MoreForm title="숙소 설명" isOpen={moreDate} onChange={setMoreDate}>
                            -- 저의 그린하우스는 입실전 객실의 철저한 향균 소독관리에 최선을
                            다합니다
                            <br /> -- 중심부에 위치하면서도 조용한 숙소에서 편안한 시간을 보내세요.
                            <br />
                            --1일 2만원대의 합리적인 가격으로 부천의 편리한 교통과 입지를 누리세요.{' '}
                            <br />
                            -- 부천남부역에서 5분(도보) <br />
                            -- 인천공항에서 70분(지하철) -- 서울역에서 40분(지하철).
                        </MoreForm>
                    </S.DetailMoreTextInfo>
                    <S.DetailBedroomWrapper>
                        <S.DetailInfoTitle>숙박 장소</S.DetailInfoTitle>
                        <S.DetailBedroomOption>
                            <ServiceIcon
                                icon={<BedIcon fontSize="large" />}
                                title={'침실'}
                                content={'더블 침대 1개, 소파 배드 1개'}
                            />
                        </S.DetailBedroomOption>
                    </S.DetailBedroomWrapper>
                    <S.FacilityWapper>
                        <S.DetailInfoTitle>숙소 편의시설</S.DetailInfoTitle>
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'TV'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'주방'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'무선 인터넷'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'엘리베이터'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'건조기'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'TV'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'TV'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'건조기'} />
                        <MoreForm
                            title="숙소 편의시설"
                            isOpen={facilityForm}
                            onChange={setFacilityForm}
                        >
                            <S.FacilityItem>
                                <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'건조기'} />
                            </S.FacilityItem>
                        </MoreForm>
                        <S.FacilityButtron onClick={() => setFacilityForm(true)}>
                            편의시설 32개 모두 보기
                        </S.FacilityButtron>
                    </S.FacilityWapper>
                    <S.CalendarWapper>
                        <S.Title>{'체크인 날짜를 선택해주세요.'}</S.Title>
                        <S.DetailOpions>
                            {'여행 날짜를 입력하여 정확한 요금을 확인하세요.'}
                        </S.DetailOpions>
                        <Calendar />
                    </S.CalendarWapper>
                </S.DetailInfo>
                <PropertyPicker />
            </S.DetailInfoWapper>
            <S.MapWapper>
                <KakaoMap
                    // isLoading={isLoading}
                    // properties={ItemList}
                    // mapFold={mapFold}
                    // onMapFoldChange={setMapFold}
                    height={'500px'}
                >
                    {/* <Marker latitude={37.478488927157834} longitude={126.97867906699992} /> */}
                </KakaoMap>
            </S.MapWapper>
        </S.PropertyDetailInfoContainer>
    )
}
