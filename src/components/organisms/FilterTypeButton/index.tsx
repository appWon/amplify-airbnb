import React from 'react'
import { Checkbox } from '@mui/material'
import { useDispatch } from 'react-redux'

import * as S from './style.filterTypeButton'
import { FilterButton } from '../../molecules/FilterButton'
import { updateTypes } from '../../../store/filter/types'

export const FilterTypeButton: React.FC = () => {
    const dispatch = useDispatch()

    const [checked, setChecked] = React.useState<string[]>([])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target

        if (checked.some(item => item === value)) {
            setChecked(checked.filter(item => item !== value))
        } else {
            setChecked([...checked, value])
        }
    }

    function handleFectFilter() {
        dispatch(updateTypes(checked))
    }

    return (
        <FilterButton title={'숙소 유형'} menu>
            <S.FilterTypeButtonContainer>
                <S.CustomCheckBox>
                    <Checkbox
                        value="집 전체"
                        onChange={handleChange}
                        checked={checked.some(value => value === '집 전체')}
                    />
                    <S.CustomCheckBoxContent>
                        <S.CustomTitle>집 전체</S.CustomTitle>
                        <S.CustomvValue>집 전체를 단독으로 사용합니다</S.CustomvValue>
                    </S.CustomCheckBoxContent>
                </S.CustomCheckBox>
                <S.CustomCheckBox>
                    <Checkbox
                        value="개인실"
                        onChange={handleChange}
                        checked={checked.some(value => value === '개인실')}
                    />
                    <S.CustomCheckBoxContent>
                        <S.CustomTitle>개인실</S.CustomTitle>
                        <S.CustomvValue>
                            침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할
                            수도 있습니다.
                        </S.CustomvValue>
                    </S.CustomCheckBoxContent>
                </S.CustomCheckBox>
                <S.CustomCheckBox>
                    <Checkbox
                        value="호텔객실"
                        onChange={handleChange}
                        checked={checked.some(value => value === '호텔객실')}
                    />
                    <S.CustomCheckBoxContent>
                        <S.CustomTitle>호텔객실</S.CustomTitle>
                        <S.CustomvValue>
                            부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다
                        </S.CustomvValue>
                    </S.CustomCheckBoxContent>
                </S.CustomCheckBox>
                <S.CustomCheckBox>
                    <Checkbox
                        value="다인실"
                        onChange={handleChange}
                        checked={checked.some(value => value === '다인실')}
                    />
                    <S.CustomCheckBoxContent>
                        <S.CustomTitle>다인실</S.CustomTitle>
                        <S.CustomvValue>
                            사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께
                            이용합니다
                        </S.CustomvValue>
                    </S.CustomCheckBoxContent>
                </S.CustomCheckBox>
            </S.FilterTypeButtonContainer>
            <S.Fence />
            <S.ActionWapper>
                <S.RemoveButton onClick={() => setChecked([])}>지우기</S.RemoveButton>
                <S.Button id="save" onClick={handleFectFilter}>
                    저장
                </S.Button>
            </S.ActionWapper>
        </FilterButton>
    )
}
