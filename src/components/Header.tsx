import styles from './Header.module.css'
import Logo from '../assets/Logo.svg'
import About from '../assets/about.png'
import Tokenomics from '../assets/tokenomics.png'
import Roadmap from '../assets/roadmap.png'
import Chart from '../assets/chart.png'
import Xis from '../assets/logo X.png'
import Telegram from '../assets/telegram.png'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

export function Header() {

  
    return (
        <BrowserRouter>
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} alt="papel parede"></img>
            <div className={styles.icones1}>
                <Link to="#main"> 
                    <img src={About} alt="About" />
                </Link>
                <Link to="#toke"> 
                    <img src={Tokenomics} alt="Tokenomics" />
                </Link>
                <Link to="#secfour"> 
                    <img src={Roadmap} alt="Roadmap" />
                </Link>
                <a href="https://poocoin.app/tokens/0x382858669230d0c0c7a556f913218a567a1cf8f6">
                    <img src={Chart} alt="Chart" />
                </a>
            </div>
            <div className={styles.icones2}>
                <a href="https://twitter.com">
                    <img src={Xis} alt="icone tw" />
                </a>
                <a href="https://t.me/FrogCoinBSCC">
                    <img src={Telegram} alt="icone telegram" />
                </a>
            </div>
        </header>
        </BrowserRouter>
    )
}