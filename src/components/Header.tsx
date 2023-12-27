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

        const handleClick = () => {
          // Realiza as operações desejadas aqui
      
          // Recarrega a página
          window.location.reload();
        };

    return (
        <BrowserRouter>
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} alt="papel parede"></img>
            <div className={styles.icones1}>
                <Link to="#main"> 
                    <img onClick={handleClick} src={About} alt="About" />
                </Link>
                <Link to="#toke"> 
                    <img onClick={handleClick} src={Tokenomics} alt="Tokenomics" />
                </Link>
                <Link to="#secfour"> 
                    <img onClick={handleClick} src={Roadmap} alt="Roadmap" />
                </Link>
                <a href="https://poocoin.app">
                    <img src={Chart} alt="Chart" />
                </a>
            </div>
            <div className={styles.icones2}>
                <a href="https://twitter.com">
                    <img src={Xis} alt="icone tw" />
                </a>
                <a href="https://t.me/cacadoresdegemas2">
                    <img src={Telegram} alt="icone telegram" />
                </a>
            </div>
        </header>
        </BrowserRouter>
    )
}