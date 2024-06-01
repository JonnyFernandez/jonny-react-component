import style from './Card3.module.css'

const Card3 = () => {
    return (
        <div className={style.body}>
            <div className={style.cards}>
                <label id={style.summary}>
                    <input type="checkbox" />
                    <div className={style.card}>
                        <div className={style.front}>
                            <header>
                                <h2>Summary</h2>
                                <span className="material-symbols-outlined"> more_vert </span>
                            </header>
                            <var>21</var>
                            <h3>Due Tasks</h3>
                            <h4>Completed: 13</h4>
                        </div>
                        <div className={style.back}>
                            <header>
                                <h2>Summary</h2>
                                <span className="material-symbols-outlined"> close </span>
                            </header>
                            <p>More Information</p>
                        </div>
                    </div>
                </label>
                <label id={style.overdue}>
                    <input type="checkbox" />
                    <div className={style.card}>
                        <div className={style.front}>
                            <header>
                                <h2>Overdue</h2>
                                <span className="material-symbols-outlined"> more_vert </span>
                            </header>
                            <var>17</var>
                            <h3>Projects</h3>
                            <h4>Yesterday: 9</h4>
                        </div>
                        <div className={style.back}>
                            <header>
                                <h2>Overdue</h2>
                                <span className="material-symbols-outlined"> close </span>
                            </header>
                            <p>More Information</p>
                        </div>
                    </div>
                </label>
                <label id={style.features}>
                    <input type="checkbox" />
                    <div className={style.card}>
                        <div className={style.front}>
                            <header>
                                <h2>Features</h2>
                                <span className="material-symbols-outlined"> more_vert </span>
                            </header>
                            <var>38</var>
                            <h3>Proposals</h3>
                            <h4>Implemented: 6</h4>
                        </div>
                        <div className={style.back}>
                            <header>
                                <h2>Features</h2>
                                <span className="material-symbols-outlined"> close </span>
                            </header>
                            <p>More Information</p>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
};

export default Card3