import { useCallback, useMemo } from 'react'
import { debounce } from 'lodash'

// eslint-disable-next-line import/prefer-default-export
export const useAsyncDebouncedCallback = (callback, time) => {
    const debounced = useMemo(
        () =>
            debounce(
                (res, rej, ...args) =>
                    callback(...args)
                        .then(res)
                        .catch(rej),
                time
            ),
        [callback, time]
    )
    const debouncedCallback = useCallback(
        (...args) =>
            new Promise((res, rej) => {
                debounced(res, rej, ...args)
            }),
        [debounced]
    )
    return debouncedCallback
}
