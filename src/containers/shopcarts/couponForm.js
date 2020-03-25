import React from 'react'
import UseForm from '../../commons/forms'
import ApplyCoupon from './coupon'

const CouponForm = (props) => {
    let {onApplyCoupon} = props
    // Define your state schema
    const stateSchema = {
        fcode: { value: '', error: '' }
    }

    // Define your validationStateSchema
    // Note: validationStateSchema and stateSchema property
    // should be the same in-order validation works!
    const validationStateSchema = {
        fcode: {
            required: false,
            validator: {},
        }
    }

    const onSubmitForm = (state) => {
        console.log('====formData2:', JSON.stringify(state, null, 2))
        let {couponPrice, message} = ApplyCoupon(null)
        onApplyCoupon(couponPrice)
    }

    const { handleOnChange, handleOnSubmit, disable } = UseForm(
        stateSchema,
        validationStateSchema,
        onSubmitForm
    )

    return (
        <div className="ht__coupon__code">
            <span>enter your discount code</span>
            <div className="coupon__box">
                <input type="text" name="fcode" placeholder="Coupon code here" onChange={handleOnChange}/>
                <div className="ht__cp__btn">
                    <button disabled={disable} onClick={handleOnSubmit}>enter</button>
                </div>
            </div>
        </div>
    )
}

export default CouponForm