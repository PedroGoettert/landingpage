import { Instagram, WhatsApp, Mail, Facebook } from '@mui/icons-material'

import style from './style.module.css'

export function Footer() {
  return (
    <footer className={style.container}>
      <div
        className={style.content}
        style={{ display: 'flex', flexDirection: 'row' }}
        id="Footer"
      >
        <div className={style.socialNetworkContainer}>
          <Mail className={style.icons} />
          <a
            href="mailto:mktvirtus.br@gmail.com"
            className={style.text}
            target="_blank"
            rel="noreferrer"
          >
            mktvirtus.br@gmail.com
          </a>
        </div>

        <div className={style.socialNetworkContainer}>
          <WhatsApp className={style.icons} />
          <a
            href="https://wa.me/message/ABNSM7UCGRKFL1"
            className={style.text}
            target="_blank"
            rel="noreferrer"
          >
            {'(51)'} 99448-7367
          </a>
        </div>

        <div className={style.socialNetworkContainer}>
          <Instagram className={style.icons} />

          <a
            className={style.text}
            target="_blank"
            href="https://www.instagram.com/mktvirtus.br/?hl=pt"
            rel="noreferrer"
          >
            @MKTVirtus.br
          </a>
        </div>

        <div className={style.socialNetworkContainer}>
          <Facebook className={style.icons} />

          <a
            className={style.text}
            href="https://www.facebook.com/profile.php?id=61552066382958"
            target="_blank"
            rel="noreferrer"
          >
            MKT Virtus
          </a>
        </div>
      </div>
      <div className={style.copyrightContainer}>
        <strong className={style.text}>
          MKT Virtus - Todos os Direitos reservados
        </strong>
      </div>
    </footer>
  )
}
