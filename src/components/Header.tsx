import styles from './Header.module.css'
import Logo from '../assets/o brabo.png'
import About from '../assets/about.png'
import Tokenomics from '../assets/tokenomics.png'
import Roadmap from '../assets/roadmap.png'
import Chart from '../assets/chart.png'
import Xis from '../assets/logo X.png'
import Telegram from '../assets/telegram.png'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { useState } from 'react'
import { Article } from 'phosphor-react'

export function Header() {

    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
      setExpanded(!expanded);
    };
  
  
    return (
        <BrowserRouter>
        <header className={expanded ? styles.nav : styles.header}>
            <img className={expanded ? styles.logo1 : styles.logo} src={Logo} alt="papel parede" />
            <Article className={expanded ? styles.article1 : styles.article} size={32} onClick={toggleNavbar} />
            <div className={expanded ? styles.iconesres : styles.icones1}>
                <Link to="#main"> 
                    <img src={About} alt="About" />
                </Link>
                <Link to="#toke"> 
                    <img src={Tokenomics} alt="Tokenomics" />
                </Link>
                <Link to="#secfour"> 
                    <img src={Roadmap} alt="Roadmap" />
                </Link>
                <a href="https://poocoin.app/">
                    <img src={Chart} alt="Chart" />
                </a>
            </div>
            <div className={expanded ? styles.iconesres2 : styles.icones2}>
                <a href="https://twitter.com/">
                    <img src={Xis} alt="icone tw" />
                </a>
                <a href="">
                    <img src={Telegram} alt="icone telegram" />
                </a>
            </div>
        </header>
        </BrowserRouter>
    )
}