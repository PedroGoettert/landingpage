import { useState, useEffect } from 'react'

import style from './style.module.css'

import Logo from '../../assets/mkt/Logo-mkt-removebg-black.png'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={scrolled ? style.containerScrolled : style.container}>
      <nav className={style.nav}>
        <img src={Logo} alt="Logo MKT" height={100} />
        <ul className={style.navContainer}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">Sobre a Empresa</a>
          </li>
          <li>
            <a href="#Clients">Clientes</a>
          </li>
          <li>
            <a href="#Contacts">Contato</a>
          </li>
          <li>
            <a href="#Footer">Redes Sociais</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
