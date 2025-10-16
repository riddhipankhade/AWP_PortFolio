import React, { useState } from 'react'
import { projects } from '../data'


export default function Projects() {
const [filter, setFilter] = useState('all')


const filtered = projects.filter(p => filter === 'all' ? true : p.category === filter)


return (
<section id="projects">
<h2>Projects</h2>
<div className="filter-buttons">
<button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
<button className={filter === 'ml' ? 'active' : ''} onClick={() => setFilter('ml')}>ML/AI</button>
<button className={filter === 'web' ? 'active' : ''} onClick={() => setFilter('web')}>Web</button>
</div>


<div className="projects-grid">
{filtered.map(p => (
<div key={p.id} className={`project-card ${p.category}`}>
<h3>{p.title}</h3>
<p>{p.desc}</p>
<a href={p.url} target="_blank" rel="noopener noreferrer">View Project →</a>
</div>
))}
</div>
</section>
)
}