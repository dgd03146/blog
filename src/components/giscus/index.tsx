'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

export default function Giscus() {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  const theme = resolvedTheme === 'dark' ? 'noborder_dark' : 'noborder_light'

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const scriptElem = document.createElement('script')
    scriptElem.src = 'https://giscus.app/client.js'
    scriptElem.async = true
    scriptElem.crossOrigin = 'anonymous'

    scriptElem.setAttribute('data-repo', 'dgd03146/blog-comments')
    scriptElem.setAttribute('data-repo-id', 'R_kgDOKCZXbQ')
    scriptElem.setAttribute('data-category', 'Comments')
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOKCZXbc4CYSZi')
    scriptElem.setAttribute('data-mapping', 'pathname')
    scriptElem.setAttribute('data-strict', '0')
    scriptElem.setAttribute('data-reactions-enabled', '1')
    scriptElem.setAttribute('data-emit-metadata', '0')
    scriptElem.setAttribute('data-input-position', 'top')
    scriptElem.setAttribute('data-theme', theme)
    scriptElem.setAttribute('data-lang', 'en')
    scriptElem.setAttribute('data-loading', 'lazy')

    ref.current.appendChild(scriptElem)
  }, [])

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame',
    )
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { term: pathname } } },
      'https://giscus.app',
    )
  }, [pathname])

  return <section ref={ref} />
}
