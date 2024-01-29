import { Button } from '../../components/Button'

import style from './style.module.css'

export function Content() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Está pronto para ESCALAR os resultados do seu negócio?</h1>
        <Button text="Quero Saber Mais" />
      </div>
    </div>
  )
}
