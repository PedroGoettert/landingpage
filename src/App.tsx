import { Header } from './pages/Header'
import { Content } from './pages/Content'
import { Contacts } from './pages/Contacts'
import { Footer } from './pages/Footer'

import style from './App.module.css'
import { FeedbackContainer } from './pages/FeedbackContainer'

export function App() {
  return (
    <main className={style.app} id="Home">
      <Header />

      <Content />

      {/* <div
        style={{
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        id="About"
      >
        <h1>Sobre a Empresa</h1>
      </div> */}

      <FeedbackContainer />

      <Contacts />

      <Footer />
    </main>
  )
}
