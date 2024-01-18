import styles from './Main.module.css'
import direita from '../assets/direita.png'
import esquerda from '../assets/esquerda.png'
import what from '../assets/what the.png'
import hell from '../assets/hell.png'
import going from '../assets/is going on.png'
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
                    <p>Nothing, it's just when crypto meets</p>
                    <p>Minion mayhem. Hilarious NFTs,</p>
                    <p>and themed events awaits.</p>
                    <p>Join the yellow revolution</p>
                    <p>where every $MNG is a smile!</p>
                </div>
            </div>
        </div>
    )
}