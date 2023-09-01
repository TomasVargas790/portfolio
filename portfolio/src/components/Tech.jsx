export default function Tech ({ title, imgUrl }) {
  return (
    <div className='tech'>
      <h4>{title}</h4>
      <img className='tech-img' src={imgUrl} alt='' />
    </div>
  )
}
