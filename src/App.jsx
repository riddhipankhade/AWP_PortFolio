import React, { useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Connect from './components/Connect'
import Footer from './components/Footer'
import { BackToTop, ThemeToggle } from './components/UiHelpers'


export default function App() {
// Reveal on scroll (simple translation of original logic)
useEffect(() => {
const revealOnScroll = () => {
const sections = document.querySelectorAll('section')
sections.forEach(section => {
const rect = section.getBoundingClientRect()
if (rect.top < window.innerHeight - 100) section.classList.add('visible')
})
}
window.addEventListener('scroll', revealOnScroll)
window.addEventListener('load', revealOnScroll)
revealOnScroll()
return () => {
window.removeEventListener('scroll', revealOnScroll)
window.removeEventListener('load', revealOnScroll)
}
}, [])


return (
<div>
<Header />
<main>
<About />
<Skills />
<Projects />
<Connect />
</main>


<Footer />


<BackToTop />
<ThemeToggle />
</div>
)
}