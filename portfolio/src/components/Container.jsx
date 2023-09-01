import { useEffect, useState } from 'react'
import Box from './Box'

const Container = ({ endpoint }) => {
  const [Container, setContainer] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/${endpoint}`)
      .then(response => response.json())
      .then(data => setContainer(data))
  }, [])
  return (
    <>
      <h1>Estudios</h1>
      <section className='slide container'>
        {Container.map(s => <Box key={s.id} imgUrl={s.imgUrl} description={s.description} title={s.title} />)}
      </section>
    </>
  )
}

export default Container
