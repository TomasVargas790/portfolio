import { useEffect, useState } from 'react'

export default function MouseFollower () {
  const [position, setPosition] = useState({ x: 0, y: 0, color: '#fff' })
  useEffect(() => {
    const handleMove = (event) => {
      const { pageX, pageY } = event
      // const element = document.elementFromPoint(pageX, pageY)
      // const { backgroundColor } = window.getComputedStyle(element)
      setPosition({ x: pageX, y: pageY/* , color: backgroundColor  */ })
    }

    window.addEventListener('pointermove', handleMove)

    return () => { // cleanup method
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])
  return (
    <>
      <div
        className='mouse-follower' style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          boxShadow: `1px 2px 4em${position.color}`,
          zIndex: '5',
          border: '2px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: '-25px',
          top: '-25px',
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
    </>
  )
}
