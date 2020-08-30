import { useCallback, useState, useEffect } from 'react'

const defaultState = { error: null, isLoading: false, result: null }

export const useAsyncCallback = (callback, deps = []) => {
    const [state, setState] = useState(defaultState)

    const cb = useCallback(
        (...args) => {
            const req = callback(...args)
            setState({ error: null, isLoading: true, result: null })
            req.then(result => {
                setState({ error: null, isLoading: false, result })
                return result
            }).catch(error => {
                setState({ error, isLoading: false, result: null })
                throw error
            })
            return req
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        deps
    )
    return {
        ...state,
        callback: cb,
    }
}

export const useAsyncEffect = (callback, deps) => {
    const returnValues = useAsyncCallback(callback, deps)
    useEffect(() => {
        returnValues.callback()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)

    return returnValues
}
