import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Main } from './components/Main'
import { Tokenomics } from './components/Tokenomics'
import { SectionFour } from './components/SectionFour'
import { Footer } from './components/Footer'

export function App() {


  return (
    <div className={styles.divglob}>
      <section className={styles.section}>
        <Header />
      </section>
      <Main />
      <div className={styles.espaco}></div>
      <Tokenomics />
      <SectionFour />
      <Footer />
    </div>
  )
}
