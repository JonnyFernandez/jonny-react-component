import style from './Card1.module.css'
import image from './image.jpg'
const Card1  =()=>{
    return(
        <>
        <div className={style.body}>
    <div className={style.card}>
      <img src={image} />
      <div>
        <h2>Kaye Morris</h2>
        <h3>UX Developer</h3>
        <p>
          Empowering users through captivating interfaces, turning ideas into
          pixel-perfect realities.
        </p>
        <button>Follow Account</button>
      </div>
    </div>
  </div>
        </>
    )
};

export default Card1