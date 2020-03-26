import _ from 'lodash'

const CalculatorCartItem = (cart, quantity) => {
    let price = (cart && cart.price) ? cart.price : 0
    let oldPrice = (cart && cart.price) ? cart.price : 0
    let discount = (cart && cart.discount) ? cart.discount : 0
    let unitPrice = (cart && cart.price) ? cart.price : 0
    let _quantity = (quantity) ? quantity : 1
    let subTotal = 0

    const getUnitPrice = (price, discount) => {
        if(!discount)
            return Number(price)
        if(discount > price)
            return price
        return Number(discount)
    }
    unitPrice = getUnitPrice(price, discount)
    subTotal = _.multiply(Number(unitPrice), Number(_quantity))
    return {oldPrice, price: unitPrice, discount, quantity: _quantity, subTotal}
}

export default CalculatorCartItem

