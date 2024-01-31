import styles from './Main.module.css'
import direita from '../assets/o brabo.png'
import esquerda from '../assets/bebezin.png'
import what from '../assets/11.png'
import hell from '../assets/2.png'
import going from '../assets/cooltext451650066624051.png'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

export function Main() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className={styles.main}>
            <img src={esquerda} />
            <img src={direita} />
            <div id='main' className={styles.divimg}>
            <img src={what}
                data-aos="fade-left"
                alt="contando a moeda"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" />
                <img src={hell}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" />
                <img src={going}
                data-aos="fade-left"
                alt="contando a moeda"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" />
                <div className={styles.para}>
                    <p>Unleash the crypto MADNESS !!</p>
                    <p>Baby Joker embodies the spirit of unpredictability,</p>
                    <p>bringing forth a unique blend of utility.</p>
                    <p>community-driven governance</p>
                    <p>and cutting-edge technology!</p>
                </div>
            </div>
        </div>
    )
}