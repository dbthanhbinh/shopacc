import React from 'react'
import UseForm from '../../commons/forms'
import { REGEX_EMAIL_FORMAT } from '../../commons/forms/regEx'

const CommentForm = () => {

    // Define your state schema
    const stateSchema = {
        fname: { value: '', error: '' },
        femail: { value: '', error: '' },
        fwebsite: { value: '', error: '' },
        fmessage: { value: '', error: '' }
    }

    // Define your validationStateSchema
    const validationStateSchema = {
        fname: {
            required: true,
            validator: {},
        },
        femail: {
            required: true,
            validator: {
                regEx: REGEX_EMAIL_FORMAT,
                error: 'Invalid email format.',
            },
        },
        fmessage: {
            required: true,
            validator: {},
        },
    }

    const onSubmitForm = (state) => {
        console.log('====formData:', JSON.stringify(state, null, 2))
    }

    const {state, handleOnChange, handleOnSubmit, disable} = UseForm(
        stateSchema,
        validationStateSchema,
        onSubmitForm
    )

    console.log('====state:', state)

    return (
        <div className="ht__comment__form">
            <h4 className="title__line--5">Leave a Comment</h4>
            <div className="ht__comment__form__inner">
                <div className="comment__form">
                    <input type="text" placeholder="Name *" className={state.fname.error && 'field-error'} name='fname' onChange={handleOnChange}/>
                    <input type="email" placeholder="Email *" className={state.femail.error && 'field-error'} name='femail' onChange={handleOnChange} />
                    <input type="text" placeholder="Website" className={state.fwebsite.error && 'field-error'} name='fwebsite' onChange={handleOnChange} />
                </div>
                <div className="comment__form message">
                    <textarea placeholder="Your Comment" name='fmessage' className={state.fmessage.error && 'field-error'} onChange={handleOnChange}></textarea>
                </div>
            </div>
            <div className="ht__comment__btn--2 mt--30">
                <button disabled={disable} className="fr__btn" onClick={handleOnSubmit}>Send</button>
            </div>
        </div>
    )
}

export default CommentForm