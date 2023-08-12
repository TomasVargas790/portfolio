export default function Navbar () {
  const moveTo = () => {
    console.log(window.innerHeight)
    window.scrollTo({ top: window.innerHeight / 3, left: 0, behavior: 'smooth' })
  }
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-li'><button onClick={moveTo} className='navbar-button'>Experiencia</button></li>
        <li className='navbar-li'><button className='navbar-button'>Estudio</button></li>
        <li className='navbar-li'><button className='navbar-button'>TechStack</button></li>
      </ul>
    </nav>

  )
}
