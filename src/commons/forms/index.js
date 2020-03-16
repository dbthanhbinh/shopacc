import {useState, useEffect, useCallback} from 'react'
import {checkIsNotNullOrEmpry} from './utils'

const UseForm = (stateSchema = {}, validationSchema = {}, callback) => {
    const [state, setState] = useState(stateSchema)
    const [disable, setDisable] = useState(true)
    const [isDirty, setIsDirty] = useState(false)

    // Disable button in initial render
    useEffect (
        () => {
            setDisable(true)
    }, [])

    // For every changed in our state this will be fired
  // To be able to disable the button
  useEffect(() => {
    if (isDirty) {
      setDisable(validateState())
    }
  }, [state, isDirty])

    // Used to disable submit button if there's an error in state
    // or the required field in state has no value.
    // Wrapped in useCallback to cached the function to avoid intensive memory leaked
    // in every re-render in component
    const validateState = useCallback(() => {
        const hasErrorInState = Object.keys(validationSchema).some(key => {
            const isInputFieldRequired = validationSchema[key].required
            const stateValue = state[key].value // state value
            const stateError = state[key].error // state error
            return (isInputFieldRequired && !stateValue) || stateError
        })

        return hasErrorInState;
    }, [state, validationSchema]);

    const handleOnChange = useCallback (
        e => {
            setIsDirty(true)

            if (! e || !e.target) return

            let name = e.target.name
            let value = e.target.value
            let error = ''

            if (validationSchema && validationSchema[name]) {
                if (validationSchema[name].required) {
                    let isNullOrEmpty = checkIsNotNullOrEmpry(value)
                    if (isNullOrEmpty) {
                        error = 'This is required field.'
                    }
                }

                if (
                    validationSchema[name].validator &&
                    typeof validationSchema[name].validator === 'object'
                ) {
                    if (value && !validationSchema[name].validator.regEx.test(value)) {
                        error = validationSchema[name].validator.error
                    }
                }
            }

            setState(prevState => ({
                ...prevState,
                [name]: {value, error}
            }))
        }, [validationSchema]
    )

    const handleOnSubmit = useCallback (
        e => {
            e.preventDefault()
            // Make sure that validateState returns false
            // Before calling the submit callback function
            if (!validateState()) {
                callback(state)
            }
        }, [state]
    )

    return {state, disable, handleOnChange, handleOnSubmit}
}

export default UseForm

