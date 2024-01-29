import { ContactForm } from '../../components/ContactForm'

import style from './style.module.css'
import Logo from '../../assets/Logo-mkt-removebg.png'

export function Contacts() {
  return (
    <>
      <section className={style.container}>
        <img src={Logo} alt="logo" className={style.logo} />

        <ContactForm />
      </section>
    </>
  )
}
