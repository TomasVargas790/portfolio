import Experiences from './components/Experiences'
import UpArrow from './components/UpArrow'
import MainContent from './components/MainContent'
import MouseFollower from './components/MouseFollower'
import Studies from './components/Studies'

export default function App () {
  return (
    <main className='gap'>
      {/* <button>Cambiar Modo</button> */}
      <MouseFollower />
      <UpArrow />
     {/*  <MainContent /> */}
      <Experiences />
      <Studies />
    </main>
  )
}
