import React, { useCallback, useEffect, memo, useMemo } from 'react'
import { useField, useFormikContext } from 'formik'
import styled from 'styled-components'
import { noop, get } from 'lodash'
import PropTypes from 'prop-types'

const StyledError = styled.div`
    text-align: right;
    color: red;
    font-size: 12px !important;
    line-height: 16px;
`

const OnChangeSubmitSink = ({ value }) => {
    const { submitForm } = useFormikContext()
    useEffect(() => {
        if (value !== undefined) {
            submitForm()
        }
    }, [value, submitForm])

    return null
}

const Field = ({ as: Component, submitOnChange, onChange, onKeyPress = noop, name, validate, touched, ...props }) => {
    const [{ onChange: formikOnChange, ...field }] = useField({
        name,
        validate,
    })
    const {
        submitForm,
        setFieldValue,
        validateField,
        setFieldTouched,
        errors,
        touched: allTouched,
    } = useFormikContext()

    const error = get(errors, name)
    const _touched = touched || get(allTouched, name)

    const aggOnChange = useCallback(
        v => {
            if (v && v.target) {
                formikOnChange(v)
            } else {
                setFieldValue(name, v)
            }
            if (onChange) onChange(v)
        },
        [formikOnChange, name, onChange, setFieldValue]
    )

    const _onKeyPress = useCallback(
        e => {
            if (e.charCode === 13) {
                submitForm()
            }
            onKeyPress(e)
        },
        [onKeyPress, submitForm]
    )

    useEffect(() => {
        validateField(name)
    }, [name, validate, validateField])

    useEffect(() => {
        if (touched) {
            setFieldTouched(name)
        }
    }, [name, setFieldTouched, touched])

    const errorMessage = useMemo(() => <StyledError>{error}</StyledError>, [error])

    return (
        <React.Fragment>
            {submitOnChange && <OnChangeSubmitSink value={field.value} />}
            <Component {...field} data-is-field onChange={aggOnChange} onKeyPress={_onKeyPress} {...props} />
            {_touched && errorMessage}
        </React.Fragment>
    )
}

Field.propTypes = {
    // eslint-disable-next-line react/require-default-props
    as: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired,
    submitOnChange: PropTypes.bool,
}

Field.defaultProps = {
    submitOnChange: false,
}

export default memo(Field)
