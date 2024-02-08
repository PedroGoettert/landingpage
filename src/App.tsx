import { Header } from './components/Header'
import { Content } from './pages/Content'
import { Contacts } from './pages/Contacts'
import { Footer } from './pages/Footer'
import { About } from './pages/About'
import { FeedbackContainer } from './pages/FeedbackContainer'

import style from './App.module.css'

export function App() {
  return (
    <main className={style.app} id="Home">
      <Header />
      <Content />
      <About />
      <FeedbackContainer />
      <Contacts />
      <Footer />
    </main>
  )
}
