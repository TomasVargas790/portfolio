import { useEffect, useState } from 'react'

export default function MouseFollower () {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMove = (event) => {
      const { pageX, pageY } = event
      setPosition({ x: pageX, y: pageY })
    }

    window.addEventListener('pointermove', handleMove)

    return () => { // cleanup method
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])
  return (
    <>
      <div
        className='mouse-follower' style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
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
