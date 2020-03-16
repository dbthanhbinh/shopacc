import React from 'react'
import './newsletter.scss'
import UseForm from '../../commons/forms'
import {REGEX_EMAIL_FORMAT} from '../../commons/forms/regEx'

const Newsletter = () => {

    // Define your state schema
    const stateSchema = {
        femail: { value: '', error: '' }
    }

    // Define your validationStateSchema
    // Note: validationStateSchema and stateSchema property
    // should be the same in-order validation works!
    const validationStateSchema = {
        femail: {
            required: true,
            validator: {
                regEx: REGEX_EMAIL_FORMAT,
                error: 'Invalid email format.',
            },
        }
    }

    const onSubmitForm = (state) => {
        console.log('====formData:', JSON.stringify(state, null, 2))
    }

    const { state, handleOnChange, handleOnSubmit, disable } = UseForm(
        stateSchema,
        validationStateSchema,
        onSubmitForm
    )
    
    return (
        <div className="newsletter-section">
            <h2 className="title__line--2">NEWSLETTER </h2>
            <div className="ft__inner">
                <div className="news__input">
                    <input type="text" className={state.femail.error && 'field-error'} name='femail' placeholder="Your Mail*" onChange={handleOnChange}/>
                    <div className="send__btn">
                        <button disabled={disable} className="fr__btn" onClick={handleOnSubmit}>Send Mail</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Newsletter