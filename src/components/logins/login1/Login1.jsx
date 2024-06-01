import { useState } from 'react'
import d from './Login1.module.css'


const Login1 = () => {
    const [isFlipped, setIsFlipper] = useState(false)
    return (

        <div className={d.body}>
            <div className={`${d.card}`}>
                <div className={`${d.front} ${isFlipped ? d.flip : ''}`}>
                    <div className={d.insideFront}>
                        <h2>Login</h2>
                        <label className={d.label}>
                            <input type="text" className={d.input1} placeholder='' />
                            <span className={d.span1} onClick={() => setIsFlipper(prev => !prev)}>Crear cuenta</span>
                        </label>
                    </div>
                </div>
                <div className={`${d.back} ${!isFlipped ? d.flip : ''}`}>
                    <div className={d.insideFront}>
                        <h2>Back Side</h2>
                        <span onClick={() => setIsFlipper(prev => !prev)}>Ya tengo una cuenta</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login1