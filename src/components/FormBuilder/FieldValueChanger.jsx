import React, { memo, useCallback } from 'react'
import { useFormikContext } from 'formik'

// To be used only in FormBuilder
export default memo(({ name, value, children }) => {
    const { setFieldValue } = useFormikContext()

    const _onClick = useCallback(() => {
        if (name) {
            setFieldValue(name, value)
        }
    }, [name, setFieldValue, value])

    return <span onClick={_onClick}>{children}</span>
})
