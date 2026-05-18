import { useState, useEffect } from 'react'

export function useTyping(words, speed = 90, pause = 1800) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) {
          setTimeout(() => setDeleting(true), pause)
        }
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}
