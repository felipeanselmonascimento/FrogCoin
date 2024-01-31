import styles from './SectionFour.module.css'
import roadmap from '../assets/roadmap amarelo.png'
import initial from '../assets/primeira.png'
import imgdois from '../assets/imagem2.png'
import imgtres from '../assets/imagem 3.png'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

export function SectionFour() {
    
    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <div id='secfour' className={styles.divina}>
            <img src={roadmap}
            className={styles.roadmapi}
            alt="roadmap"
            data-aos="zoom-out-down"
            />
            <img src={initial}
            className={styles.um}
            alt="img1" 
            data-aos="fade-up-left"
            data-aos-duration="1000"/>
            <img src={imgdois}
            className={styles.dois}
            alt="img2"
            data-aos="fade-up-right"
            data-aos-duration="1000"/>
            <img src={imgtres}
            className={styles.tres}
            alt="img3"
            data-aos="zoom-out-up"/>
        </div>
    )
}