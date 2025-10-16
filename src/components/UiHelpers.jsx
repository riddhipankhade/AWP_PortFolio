import React, { useEffect, useState } from 'react'


export function BackToTop() {
const [visible, setVisible] = useState(false)


useEffect(() => {
const onScroll = () => setVisible(window.scrollY > 300)
window.addEventListener('scroll', onScroll)
return () => window.removeEventListener('scroll', onScroll)
}, [])


if (!visible) return null
return (
<button
id="backToTop"
onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
aria-label="Back to top"
>
↑
</button>
)
}


export function ThemeToggle() {
const [dark, setDark] = useState(() => document.body.classList.contains('dark'))


useEffect(() => {
if (dark) document.body.classList.add('dark')
else document.body.classList.remove('dark')
}, [dark])


return (
<button
id="themeToggle"
onClick={() => setDark(d => !d)}
aria-label="Toggle theme"
>
{dark ? '☀️' : '🌙'}
</button>
)
}