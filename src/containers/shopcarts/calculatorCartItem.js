import {useState, useEffect, useCallback} from 'react'

const CalculatorCartItem = (cart) => {
    const [state, setState] = useState()
    const [price, setPrice] = useState(cart.price || 0)
    const [oldPrice, setOldPrice] = useState(cart.price || 0)
    const [discount, setDiscount] = useState(cart.discount || 0)
    const [unitPrice, setUnitPrice] = useState(cart.price || 0)
    const [quantity, setQuantity] = useState(cart.quantity || 1)
    const [subTotal, setSubTotal] = useState(0)

    const getUnitPrice = (price, discount) => {
        if(!discount)
            return price
        if(discount > price)
            return price
        return discount
    }

    useEffect (
        () => {
            let unitPrice = getUnitPrice(price, discount)
            setPrice(unitPrice)
            setUnitPrice(unitPrice)
            setSubTotal(unitPrice * quantity)
    }, [state])

    return {state, oldPrice, price: unitPrice, discount, quantity, subTotal}
}

export default CalculatorCartItem

