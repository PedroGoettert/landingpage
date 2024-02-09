import { Article, Phone } from '@mui/icons-material'
import style from './style.module.css'

export function NextLevel() {
  return (
    <div className={style.container}>
      <div className={style.formNextLevelContainer}>
        <Article />
        <div className={style.teste}>
          <p>Preencha o formulário</p>
          <p>
            Envie suas informações de contato. Todos os seus dados estarão
            seguros, vamos cuidar bem deles.
          </p>
        </div>
      </div>

      <div className={style.formNextLevelContainer}>
        <Phone />
        <div className={style.teste}>
          <p>Receba uma ligação</p>
          <p>
            Em até 12 horas, um dos nossos especialistas fará uma ligação para
            agendar a reunião mais importante com você.
          </p>
        </div>
      </div>
    </div>
  )
}
