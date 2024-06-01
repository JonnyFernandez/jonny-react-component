import d from './Card4.module.css'
import { useState } from 'react'

const Card4 = () => {
    const [isFlipped, setIsFlipper] = useState(false)

    return (
        <div className={d.Card4}>
            <div className={d.body}>
                <div className={`${d.card}`}>
                    <div className={`${d.front} ${isFlipped ? d.flip : ''}`}>
                        <div className={d.insideFront}>
                            <h2>Front Side</h2>
                        </div>
                    </div>
                    <div className={`${d.back} ${!isFlipped ? d.flip : ''}`}>
                        <div className={d.insideFront}>
                            <h2>Back Side</h2>
                        </div>
                    </div>
                    <div className={d.change} onClick={() => setIsFlipper(prev => !prev)}> {isFlipped ? 'Front' : 'Back'} </div>
                </div>
            </div>
        </div>
    )
}
export default Card4