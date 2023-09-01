export default function Box ({ title, description, imgUrl }) {
  return (
    <article className='box box-estudios'>
      <div className='study-title'>
        <h2>{title}</h2>
        <img src={imgUrl} height='100px' width='100px' alt='' />
      </div>
      <p>{description}</p>
    </article>
  )
}
