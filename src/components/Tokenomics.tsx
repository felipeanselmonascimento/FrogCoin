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
            <h1>1,000,000,000 $MNC</h1>
            <h1>TOTAL SUPPLY</h1>
            <p>MinionCoin is designed to be a stable cryptocurrency that encourages long-term community participation. Its primary goal is to promote stability and sustainable growth by rewarding token holders who choose to keep their stakes for extended periods.</p>
            <div className={styles.tokens}>
                <div className={styles.tokenon}>
                    <p>BURNT 20%</p>
                </div>
                <div className={styles.tokenon}>
                    <p>MARKETING 5%</p>
                </div>
                <div className={styles.tokenon}>
                    <p>VESTED 8%</p>
                </div>
                <div className={styles.tokenon}>
                    <p>TAX 7/7</p>
                </div>
            </div>
        </div>
    )
}