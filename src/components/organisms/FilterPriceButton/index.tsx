import React from 'react'
import { Slider } from '@mui/material'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { API } from 'aws-amplify'

import * as S from './style.filterPriceButton'
import { FilterButton } from '../../molecules/FilterButton'
import { usePriceStore } from '../../../hooks/usePriceStore'
import { priceGroupByRange } from '../../../graphql/queries'
import { PriceGroupByRangeQuery } from '../../../API'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
            display: false,
        },
        title: {
            display: false,
            text: '',
        },
        tooltip: {
            enabled: false,
        },
    },

    scales: {
        x: {
            ticks: {
                callback: () => {
                    return ``
                },
                padding: 0,
            },
            grid: {
                display: false,
                drawOnChartArea: false,
                drawBorder: false,
                tickLength: 0,
                tickWidth: 0,
            },
        },
        y: {
            ticks: {
                callback: () => {
                    return ''
                },
                padding: 0,
            },
            grid: {
                display: false,
                drawOnChartArea: false,
                drawBorder: false,
                tickLength: 0,
                tickWidth: 0,
            },
            title: {
                display: false,
            },
        },
    },
}

const LabelList = [...[...Array(50)].map((_, index) => index * 10000)].reduce(
    (obj, value) => ({ ...obj, [value]: 0 }),
    {}
)

export const FilterPriceButton: React.FC = () => {
    const { price, setPrice } = usePriceStore()
    const [priceGroup, setPriceGroup] = React.useState<Record<number, number>>(LabelList)
    const [priceRange, setPriceRange] = React.useState(price)

    const data = {
        labels: Object.keys(priceGroup).map(grop => grop),
        datasets: [
            {
                data: Object.values(priceGroup).map(count => count),
                backgroundColor: Object.keys(priceGroup).map(group =>
                    Number(group) >= priceRange.min && Number(group) <= priceRange.max
                        ? 'black'
                        : '#e4e4e4'
                ),
            },
        ],
    }

    const priceAverage = React.useCallback(() => {
        const average = Object.keys(priceGroup).reduce((obj, group) => {
            if (priceGroup[Number(group)]) {
                obj['sum'] += priceGroup[Number(group)] * Number(group)
                obj['count'] += priceGroup[Number(group)]
            }
            return obj
        }, {} as { sum: number; count: number })

        return average.sum / average.count
    }, [priceGroup])

    function handleChange(_: Event, num: number | Array<number>) {
        if (typeof num === 'object') {
            setPriceRange({
                min: num[0],
                max: num[1],
            })
        }
    }

    function handleReset() {
        setPriceRange({
            min: 0,
            max: 500000,
        })
    }

    function handleSaveClick() {
        console.log(1111111111)
        setPrice(priceRange)
    }

    React.useEffect(() => {
        async function fetchPriceGroupByRange() {
            const fetchPriceGroup = (await API.graphql({
                query: priceGroupByRange,
                variables: {
                    input: {
                        range: 10000,
                    },
                },
            })) as { data: PriceGroupByRangeQuery }

            const organizeData = fetchPriceGroup.data.priceGroupByRange?.priceRangGroup?.reduce(
                (obj, value) => {
                    return value ? { ...obj, [Number(value?.group)]: value?.count } : obj
                },
                {}
            )

            setPriceGroup({ ...priceGroup, ...organizeData })
        }
        fetchPriceGroupByRange()
    }, [])

    return (
        <FilterButton title={'요금'} menu>
            <S.FilterPriceButtonContainer>
                <S.PriceAverage>1 일 평균 숙박요금은 ₩{priceAverage} 입니다</S.PriceAverage>
                <S.ChartWapper>
                    <Bar options={options} data={data} />
                    <Slider
                        size="small"
                        min={0}
                        max={500000}
                        value={[priceRange.min, priceRange.max]}
                        onChange={handleChange}
                    />
                </S.ChartWapper>
                <S.PriceWapper>
                    <S.PriceInput>
                        <S.PriceInputHeader>최저요금</S.PriceInputHeader>
                        <S.PrcieValueWapper>
                            <S.PriceKrw>₩</S.PriceKrw>
                            <S.PriceInputValue value={priceRange.min} />
                        </S.PrcieValueWapper>
                    </S.PriceInput>
                    <S.Dash>-</S.Dash>
                    <S.PriceInput>
                        <S.PriceInputHeader>최고요금</S.PriceInputHeader>
                        <S.PrcieValueWapper>
                            <S.PriceKrw>₩</S.PriceKrw>
                            <S.PriceInputValue value={priceRange.max} />
                        </S.PrcieValueWapper>
                    </S.PriceInput>
                </S.PriceWapper>
                <S.Fence />
                <S.ActionWapper>
                    <S.RemoveButton onClick={handleReset}>초기화</S.RemoveButton>
                    <S.Button id="save" onMouseDown={handleSaveClick}>
                        저장
                    </S.Button>
                </S.ActionWapper>
            </S.FilterPriceButtonContainer>
        </FilterButton>
    )
}
