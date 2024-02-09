import { ContactForm } from '../../components/ContactForm'

import style from './style.module.css'
import Logo from '../../assets/mkt/Logo-mkt-removebg.png'
import { NextLevel } from '../../components/NextLevel'

export function Contacts() {
  return (
    <>
      <section className={style.container}>
        <img src={Logo} alt="logo" className={style.logo} />

        <div className={style.contactFormContainer}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3rem',
              marginTop: '4rem',
            }}
          >
            <h1>Avançar no seu negócio requer apenas dois passos</h1>

            <div>
              <NextLevel />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
