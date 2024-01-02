import styles from './Tokenomics.module.css'
import tokenomicsamare from '../assets/tokenomics amarelo.png'
import tokeverd from '../assets/novo tokenomics.svg'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

export function Tokenomics() {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div id='toke' className={styles.div}>
                <img src={tokenomicsamare}
                className={styles.toke}
                alt="toke amarelo"
                data-aos="zoom-in" />
                <img src={tokeverd}
                className={styles.quadro}
                alt="quadro"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" />
        </div>
    )
}