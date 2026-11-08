'use client'
import { useEffect, useState } from 'react'

const pairs = [
  { name: 'Kartik',     role: 'Software Engineer' },
  { name: 'कार्तिक',   role: 'Research Assistant' },
  { name: 'Kartik',     role: 'Student Ambassador' },
  { name: 'كارتيك',    role: 'Assistant Coach' },
  { name: 'Kartik',     role: 'Teaching Assistant' },
  { name: 'カルティク', role: 'VC Scholar' },
]

function useTyped(text: string) {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting'>('typing')

  useEffect(() => {
    setPhase('typing')
    setDisplayed('')
  }, [text])

  useEffect(() => {
    if (phase === 'typing') {
      if (displayed.length < text.length) {
        const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('waiting'), 2000)
        return () => clearTimeout(t)
      }
    }
    if (phase === 'waiting') {
      const t = setTimeout(() => setPhase('deleting'), 100)
      return () => clearTimeout(t)
    }
    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      }
    }
  }, [phase, displayed, text])

  return { displayed, done: phase === 'deleting' && displayed.length === 0 }
}

export default function TypedHero() {
  const [index, setIndex] = useState(0)
  const { displayed: nameDisplayed, done: nameDone } = useTyped(pairs[index].name)
  const { displayed: roleDisplayed } = useTyped(pairs[index].role)

  useEffect(() => {
    if (nameDone) {
      setIndex((i) => (i + 1) % pairs.length)
    }
  }, [nameDone])

  return (
    <div className="w-full text-center">
      <h1 className="hero-animate hero-delay-2 text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100 min-h-[48px]">
        {nameDisplayed}
      </h1>
      <p className="hero-animate hero-delay-3 text-sm mb-4 text-gray-600 dark:text-gray-400 min-h-[20px]">
        {roleDisplayed}
      </p>
    </div>
  )
}