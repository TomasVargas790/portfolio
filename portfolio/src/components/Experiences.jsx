import { useEffect, useState } from 'react'
import Experience from './Experience'
const Experiences = () => {
  const [experience, setExperience] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/experience')
      .then(response => response.json())
      .then(data => setExperience(data))
  }, [])
  return (
    <>
      <h1>Experiencias</h1>
      <section className='slide container-experiencia'>
        {experience.map(e => (
          <Experience key={e.id} description={e.description} title={e.title} />
        ))}

      </section>
    </>
  )
}

export default Experiences
