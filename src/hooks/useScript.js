import { useEffect, useState } from 'react'
import noop from 'lodash/noop'

const loadScript = (url, onLoad) => {
    let script = document.querySelector(`script[src="${url}"]`)

    if (!script) {
        script = document.createElement('script')
        script.src = url
        script.async = true
        document.head.appendChild(script)

        script.onerror = () => {
            if (script) script.setAttribute('data-failed', 'true')
        }
        script.onload = () => {
            if (script) script.setAttribute('data-loaded', 'true')
        }
    }

    // Already loaded, so we can return early
    if (script && script.getAttribute('data-loaded') === 'true') {
        ;(onLoad || noop)()
        return () => {}
    }

    // Add load event listener
    script.addEventListener('load', onLoad)

    return () => {
        if (script) {
            script.removeEventListener('load', onLoad)
        }
    }
}

/**
 * Hook to load an external script. Returns true once the script has finished loading.
 *
 * @param {string} url The external script to load
 * @return {[boolean]} True if the script has been loaded
 * */
const useScript = url => {
    const [ready, setReady] = useState(false)

    useEffect(() => loadScript(url, () => setReady(true)), [url])

    return [ready]
}

export default useScript
