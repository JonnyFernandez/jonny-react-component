import style from './Card2.module.css'
import check from './check.svg'
const Card2  =()=>{
    return(
        <>
         <div className={style.body}>
    <div className={style.background}></div>
    <div className={style.grid}>
      <div>
        <article className={style.card}>
          <h2>Free</h2>
          <var><abbr>$</abbr>0<small>/MO</small></var>
          <ul>
            <li>
              <img src={check} />
              <p>10 user requests</p>
            </li>
            <li>
              <img src={check} />
              <p>3 design accounts</p>
            </li>
            <li>
              <img src={check} />
              <p>24/7 support</p>
            </li>
          </ul>
          <button>Choose Plan</button>
        </article>
      </div>
      <div className={style.primary}>
        <article className={style.card}>
          <h2>Elite</h2>
          <var><abbr>$</abbr>99<small>/MO</small></var>
          <ul>
            <li>
              <img src={check} />
              <p>10 user requests</p>
            </li>
            <li>
              <img src={check} />
              <p>3 design accounts</p>
            </li>
            <li>
              <img src={check} />
              <p>Email support</p>
            </li>
            <li>
              <img src={check} />
              <p>100 deployments</p>
            </li>
            <li>
              <img src={check} />
              <p>24/7 support</p>
            </li>
          </ul>
          <button className={style.btnPrimary}>Choose Plan</button>
        </article>
      </div>
      <div>
        <article className={style.card}>
          <h2>Pro</h2>
          <var><abbr>$</abbr>49<small>/MO</small></var>
          <ul>
            <li>
              <img src={check} />
              <p>10 user requests</p>
            </li>
            <li>
              <img src={check} />
              <p>3 design accounts</p>
            </li>
            <li>
              <img src={check} />
              <p>Email support</p>
            </li>
          </ul>
          <button>Choose Plan</button>
        </article>
      </div>
    </div>
  </div>
        </>
    )
};

export default Card2