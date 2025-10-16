import React from 'react'
import { useTyping } from './typingHook'
import { texts } from '../data'


export default function Header() {
const tagline = useTyping(texts)


return (
<header>
<h1>Riddhi Pankhade</h1>
<p id="tagline" className="typing">{tagline}</p>
</header>
)
}