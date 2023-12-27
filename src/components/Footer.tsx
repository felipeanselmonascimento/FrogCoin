import styles from './Footer.module.css'
import coin from '../assets/coinmarketcap-1.svg'
import coingecko from '../assets/coingecko-1.svg'
import metamask from '../assets/metamask.svg'

export function Footer() {
    return (
        <div className={styles.div}>
            <a href="https://coinmarketcap.com">
                <img src={coin} alt="coinmarketcap" />
            </a>
            <div className={styles.coingecko}>
                <a href="https://coingecko.com">
                    <img src={coingecko} alt="coingecko" />
                </a>
            </div>
            <a href="https://metamask.io">
                <img src={metamask} alt="metamask" />
            </a>
        </div>
    )
}