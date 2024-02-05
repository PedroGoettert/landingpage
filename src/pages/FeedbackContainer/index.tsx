import { Feedbacks } from '../../components/Feedbacks'

import Logo from '../../assets/rafaRio/LOGO (1).png'
import style from './style.module.css'

export function FeedbackContainer() {
  return (
    <section className={style.container} id="Clients">
      <h1 className={style.title}>Nosso Clientes</h1>
      <div className={style.feedbackContainer}>
        <Feedbacks
          logo={Logo}
          text='"Eu só tenho a agradecer pelo profissionalismo de toda equipe. Minha
        empresa tem duas fases, sem sombra de dúvida: antes e depois da MKT."'
        />
        <Feedbacks
          logo={Logo}
          text='"Eu só tenho a agradecer pelo profissionalismo de toda equipe. Minha
        empresa tem duas fases, sem sombra de dúvida: antes e depois da MKT."'
        />
        <Feedbacks
          logo={Logo}
          text='"Eu só tenho a agradecer pelo profissionalismo de toda equipe. Minha
        empresa tem duas fases, sem sombra de dúvida: antes e depois da MKT."'
        />
        <Feedbacks
          logo={Logo}
          text='"Eu só tenho a agradecer pelo profissionalismo de toda equipe. Minha
        empresa tem duas fases, sem sombra de dúvida: antes e depois da MKT."'
        />
        <Feedbacks
          logo={Logo}
          text='"Eu só tenho a agradecer pelo profissionalismo de toda equipe. Minha
        empresa tem duas fases, sem sombra de dúvida: antes e depois da MKT."'
        />
        <Feedbacks
          logo={Logo}
          text='"Eu só tenho a agradecer pelo profissionalismo de toda equipe. Minha
        empresa tem duas fases, sem sombra de dúvida: antes e depois da MKT."'
        />
        <Feedbacks
          logo={Logo}
          text='"Eu só tenho a agradecer pelo profissionalismo de toda equipe. Minha
        empresa tem duas fases, sem sombra de dúvida: antes e depois da MKT."'
        />
        <Feedbacks
          logo={Logo}
          text='"Eu só tenho a agradecer pelo profissionalismo de toda equipe. Minha
        empresa tem duas fases, sem sombra de dúvida: antes e depois da MKT."'
        />
      </div>
    </section>
  )
}
