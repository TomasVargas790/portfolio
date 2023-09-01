import UpArrow from './components/UpArrow'
import MainContent from './components/MainContent'
import MouseFollower from './components/MouseFollower'
import Container from './components/Container'
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
        <Container endpoint='experience' />
        <Container endpoint='study' />
        <TechStack />
        <MouseFollower />
      </main>
      <Footer />
    </>
  )
}
