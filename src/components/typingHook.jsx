import { useState, useEffect, useRef } from 'react'
import { texts as defaultTexts } from '../data'


export function useTyping(texts = defaultTexts) {
const [display, setDisplay] = useState('')
const iRef = useRef(0)
const jRef = useRef(0)
const deletingRef = useRef(false)


useEffect(() => {
let mounted = true


function tick() {
const i = iRef.current
let j = jRef.current
const currentText = texts[i]


if (!deletingRef.current) {
jRef.current = j + 1
setDisplay(currentText.substring(0, jRef.current))
if (jRef.current === currentText.length) {
deletingRef.current = true
setTimeout(tick, 1000)
return
}
} else {
jRef.current = j - 1
setDisplay(currentText.substring(0, Math.max(0, jRef.current)))
if (jRef.current === 0) {
deletingRef.current = false
iRef.current = (i + 1) % texts.length
setTimeout(tick, 300)
return
}
}


if (mounted) setTimeout(tick, deletingRef.current ? 60 : 120)
}


tick()
return () => { mounted = false }
}, [texts])


return display
}