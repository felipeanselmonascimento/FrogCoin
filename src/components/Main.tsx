import styles from './Main.module.css'
import section2 from '../assets/section2first.svg'
import section2c from '../assets/section2second.svg'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

export function Main() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className={styles.main}>
            <img src={section2}
            data-aos="fade-right" 
            alt="carregando a moeda"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"/>
            <img src={section2c}
            data-aos="fade-left"
            alt="contando a moeda"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"/>
            <div id='main' className={styles.divimg}>
                <h1>Ready to</h1>
                <h1>make history</h1>
                <h1>with FrogCoin ?</h1>
                <div className={styles.para}>
                    <p>Ready to hop on board </p>
                    <p>the FrogCoin revolution?</p> 
                    <p>What unique leap does FrogCoin</p>
                    <p>offer in the world of crypto</p> 
                    <p>that has you excited to be a part</p> 
                    <p>of this ribbiting journey?</p>
                </div>
            </div>
        </div>
    )
}