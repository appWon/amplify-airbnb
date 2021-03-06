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
                <S.Title>{'3.πμ μΆ#μ²­κ²°μ°μ #μλνμ§#λΉλ°λνμ'}</S.Title>
                <S.SubTitleWrapper>
                    <Grade value={4.3} />
                    <S.Location>{'Euljiro-dong, Jung-gu, μμΈ, νκ΅­'}</S.Location>
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
                        <S.Title>{'Kateλμ΄ νΈμ€ννλ κ³΅λ μ£Όν μ μ²΄'}</S.Title>
                        <S.DetailOpions>{'μ΅λ μΈμ 3λͺμΉ¨μ€ 1κ°μΉ¨λ 2κ°μμ€ 1κ°'}</S.DetailOpions>
                    </S.HeaderWrapper>
                    <S.DetailService>
                        <ServiceIcon
                            icon={<HomeIcon fontSize="medium" />}
                            title={'μ§ μ μ²΄'}
                            content={'μννΈ μ μ²΄λ₯Ό λ¨λμΌλ‘ μ¬μ©νμκ² λ©λλ€.'}
                            margin="15px 0"
                        />
                        <ServiceIcon
                            icon={<CleanIcon fontSize="medium" />}
                            title={'μ§ μ μ²΄'}
                            content={
                                'μμ΄λΉμ€λΉμ κ°νλ 5λ¨κ³ μ²­μ μ μ°¨λ₯Ό μ€μνκ² λ€κ³  λμν νΈμ€νΈμλλ€'
                            }
                            margin="15px 0"
                        />
                        <ServiceIcon
                            icon={<CheckIcon fontSize="medium" />}
                            title={'μ§ μ μ²΄'}
                            content={'ν€ν¨λλ₯Ό μ΄μ©ν΄ μ²΄ν¬μΈνμΈμ.'}
                            margin="15px 0"
                        />
                        <ServiceIcon
                            icon={<LocationIcon fontSize="medium" />}
                            title={'μ§ μ μ²΄'}
                            content={
                                'μ΅κ·Ό μλ°ν κ²μ€νΈ μ€ 100%κ° μμΉμ λ³μ  5μ μ μ€ μμμλλ€.'
                            }
                            margin="15px 0"
                        />
                    </S.DetailService>
                    <S.DetailMoreTextInfo>
                        <S.PropertyContent>
                            -- μ μ κ·Έλ¦°νμ°μ€λ μμ€μ  κ°μ€μ μ² μ ν ν₯κ·  μλκ΄λ¦¬μ μ΅μ μ
                            λ€ν©λλ€
                            <br /> -- μ€μ¬λΆμ μμΉνλ©΄μλ μ‘°μ©ν μμμμ νΈμν μκ°μ λ³΄λ΄μΈμ.
                            <br />
                            --1μΌ 2λ§μλμ ν©λ¦¬μ μΈ κ°κ²©μΌλ‘ λΆμ²μ νΈλ¦¬ν κ΅ν΅κ³Ό μμ§λ₯Ό λλ¦¬μΈμ.{' '}
                            <br />
                            -- λΆμ²λ¨λΆμ­μμ 5λΆ(λλ³΄) <br />
                            -- μΈμ²κ³΅ν­μμ 70λΆ(μ§νμ² ) -- μμΈμ­μμ 40λΆ(μ§νμ² ).
                        </S.PropertyContent>
                        <S.MoreButton onClick={() => setMoreDate(true)}>
                            λ λ³΄κΈ°
                            <NextIcon />
                        </S.MoreButton>
                        <MoreForm title="μμ μ€λͺ" isOpen={moreDate} onChange={setMoreDate}>
                            -- μ μ κ·Έλ¦°νμ°μ€λ μμ€μ  κ°μ€μ μ² μ ν ν₯κ·  μλκ΄λ¦¬μ μ΅μ μ
                            λ€ν©λλ€
                            <br /> -- μ€μ¬λΆμ μμΉνλ©΄μλ μ‘°μ©ν μμμμ νΈμν μκ°μ λ³΄λ΄μΈμ.
                            <br />
                            --1μΌ 2λ§μλμ ν©λ¦¬μ μΈ κ°κ²©μΌλ‘ λΆμ²μ νΈλ¦¬ν κ΅ν΅κ³Ό μμ§λ₯Ό λλ¦¬μΈμ.{' '}
                            <br />
                            -- λΆμ²λ¨λΆμ­μμ 5λΆ(λλ³΄) <br />
                            -- μΈμ²κ³΅ν­μμ 70λΆ(μ§νμ² ) -- μμΈμ­μμ 40λΆ(μ§νμ² ).
                        </MoreForm>
                    </S.DetailMoreTextInfo>
                    <S.DetailBedroomWrapper>
                        <S.DetailInfoTitle>μλ° μ₯μ</S.DetailInfoTitle>
                        <S.DetailBedroomOption>
                            <ServiceIcon
                                icon={<BedIcon fontSize="large" />}
                                title={'μΉ¨μ€'}
                                content={'λλΈ μΉ¨λ 1κ°, μν λ°°λ 1κ°'}
                            />
                        </S.DetailBedroomOption>
                    </S.DetailBedroomWrapper>
                    <S.FacilityWapper>
                        <S.DetailInfoTitle>μμ νΈμμμ€</S.DetailInfoTitle>
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'TV'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'μ£Όλ°©'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'λ¬΄μ  μΈν°λ·'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'μλ¦¬λ² μ΄ν°'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'κ±΄μ‘°κΈ°'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'TV'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'TV'} />
                        <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'κ±΄μ‘°κΈ°'} />
                        <MoreForm
                            title="μμ νΈμμμ€"
                            isOpen={facilityForm}
                            onChange={setFacilityForm}
                        >
                            <S.FacilityItem>
                                <ServiceIcon icon={<TvIcon fontSize="medium" />} title={'κ±΄μ‘°κΈ°'} />
                            </S.FacilityItem>
                        </MoreForm>
                        <S.FacilityButtron onClick={() => setFacilityForm(true)}>
                            νΈμμμ€ 32κ° λͺ¨λ λ³΄κΈ°
                        </S.FacilityButtron>
                    </S.FacilityWapper>
                    <S.CalendarWapper>
                        <S.Title>{'μ²΄ν¬μΈ λ μ§λ₯Ό μ νν΄μ£ΌμΈμ.'}</S.Title>
                        <S.DetailOpions>
                            {'μ¬ν λ μ§λ₯Ό μλ ₯νμ¬ μ νν μκΈμ νμΈνμΈμ.'}
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
