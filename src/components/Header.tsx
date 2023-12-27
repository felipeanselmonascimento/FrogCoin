import styles from './Header.module.css'
import Logo from '../assets/Logo.svg'
import About from '../assets/about.png'
import Tokenomics from '../assets/tokenomics.png'
import Roadmap from '../assets/roadmap.png'
import Chart from '../assets/chart.png'
import Xis from '../assets/logo X.png'
import Telegram from '../assets/telegram.png'

export function Header() {

    const handleClick = () => {
        window.scrollTo({
            top: 1280,
            behavior: 'smooth', // Adiciona uma animação de rolagem suave
        });
        window.location.reload();
    }

    const handleClick2 = () => {
        window.scrollTo({
            top: 1800,
            behavior: 'smooth',
        });
        window.location.reload();
    }

    const handleClick3 = () => {
        window.scrollTo({
            top: 2600,
            behavior: 'smooth',
        });
        window.location.reload();
    }

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} alt="papel parede"></img>
            <div className={styles.icones1}>
                <img src={About} onClick={handleClick} alt="About" />
                <img src={Tokenomics} onClick={handleClick2} alt="Tokenomics" />
                <img src={Roadmap} onClick={handleClick3} alt="Roadmap" />
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
    )
}