import Tech from './Tech'
import { useEffect, useState } from 'react'
export default function TechStack () {
  const [TechStack, setTechStack] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tech')
      .then(response => response.json())
      .then(data => setTechStack(data))
  }, [])
  return (
    <>
      <h2>TECH STACK</h2>
      <section className='slide container-tech'>
        {TechStack.map(t => (
          <Tech key={t.title} title={t.title} imgUrl={t.imgUrl} />

        ))}
      </section>
    </>
  )
}
