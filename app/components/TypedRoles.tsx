'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function TypedRoles() {
  const el = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Software Engineer',
        'Research Assistant',
        'Student Ambassador',
        'Assistant Coach',
        'Teaching Assistant',
        'VC Scholar',
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1800,
      loop: true,
      cursorChar: '|',
    })
    return () => typed.destroy()
  }, [])

  return (
    <span className="text-gray-600 dark:text-gray-400" ref={el} />
  )
}