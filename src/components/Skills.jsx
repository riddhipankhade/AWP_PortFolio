import React from 'react'
import { skills } from '../data'


export default function Skills() {
return (
<section id="skills">
<h2>Skills</h2>
<div className="skills-grid">
{skills.map(s => (
<div key={s.id} className="skill-card">
<h3>{s.title}</h3>
<p>{s.desc}</p>
</div>
))}
</div>
</section>
)
}