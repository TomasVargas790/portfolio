export default function UpArrow () {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <>
      <button className='upper' onClick={scrollToTop}> <img src='./UpArrow.svg' /> </button>
    </>
  )
}
