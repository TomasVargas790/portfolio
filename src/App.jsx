import './App.css'
import Experiences from './components/Experiences'
import UpArrow from './components/UpArrow'
import MainContent from './components/MainContent'
import MouseFollower from './components/MouseFollower'
import Studies from './components/Studies'

export default function App () {
  const handleChange = () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      document.
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }
  return (
    <>
      <button onClick={handleChange}>Cambiar Modo</button>
      <MouseFollower />
      <UpArrow />
      <MainContent />
      <Experiences />
      <Studies />
    </>
  )
}
