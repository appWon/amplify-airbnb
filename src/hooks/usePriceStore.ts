import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filterSelector } from '../store/selector'
import { updatePrice, Price } from '../store/filter'

export const usePriceStore = () => {
    const dispatch = useDispatch()
    const { price } = useSelector(filterSelector)

    function setPrice(priceData: Price) {
        console.log(3232)
        dispatch(updatePrice(priceData))
    }

    return { price, setPrice }
}
