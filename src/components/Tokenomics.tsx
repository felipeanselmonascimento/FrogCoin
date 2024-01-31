import styles from './Tokenomics.module.css'
import tokenomicsamare from '../assets/tokenomics amarelo.png'
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
            <h1>1,000,000,000 $BJK</h1>
            <h1>TOTAL SUPPLY</h1>
            <p>Our mission at Baby Joker is to redefine the boundaries of decentralized entertainment and finance, providing a dynamic platform that merges the thrill of gaming with the possibilities of blockchain technology.</p>
            <div className={styles.tokens}>
                <div className={styles.tokenon}>
                    <p>BURNT 20%</p>
                </div>
                <div className={styles.tokenon}>
                    <p>MARKETING 5%</p>
                </div>
                {/* <div className={styles.tokenon}>
                    <p>VESTED 8%</p>
                </div> */}
                <div className={styles.tokenon}>
                    <p>TAX 7/7</p>
                </div>
            </div>
        </div>
    )
}