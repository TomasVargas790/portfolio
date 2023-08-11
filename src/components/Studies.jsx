import { useEffect, useState } from 'react'
import Study from './Study'

const Studies = () => {
  const [studies, setStudies] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/study')
      .then(response => response.json())
      .then(data => setStudies(data))
  }, [])
  return (
    <>
      <h1>Estudios</h1>
      <section className='slide container-experiencia'>
        {studies.map(s => <Study key={s.id} description={s.description} title={s.title} />)}
      </section>
    </>
  )
}

export default Studies
