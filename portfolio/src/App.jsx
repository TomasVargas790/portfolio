import Experiences from './components/Experiences'
import UpArrow from './components/UpArrow'
import MainContent from './components/MainContent'
import MouseFollower from './components/MouseFollower'
import Studies from './components/Studies'
import Footer from './components/Footer'
import TechStack from './components/TechStack'
import Navbar from './components/Navbar'

export default function App () {
  return (
    <>
      <header className='header'>
        <Navbar />
      </header>
      <main className='gap'>
        {/* <button>Cambiar Modo</button> */}
        <UpArrow />
        <MainContent />
        <Experiences />
        <Studies />
        <TechStack />
        <MouseFollower />
      </main>
      <Footer />
    </>
  )
}
