import { Button } from '../../components/Button'
import { TextSpliter } from '../../components/TextSplitter'
import style from './style.module.css'

export function About() {
  return (
    <div id="About" className={style.container}>
      <div className={style.titleContent}>
        <h1>Venha para a MKT Virtus</h1>
        <p>
          Nossa agência adota uma metodologia própria e validada, pautada na
          inovação e na busca pela excelência em resultados. Com o método MDE,
          conduzimos o seu negócio por três fases fundamentais:
        </p>
      </div>

      <div className={style.textSpliter}>
        <TextSpliter
          text="1- Concentramo-nos na estruturação, refinando o
          posicionamento da sua marca perante o seu público-alvo."
        />
        <TextSpliter
          text="2- Cuidamos minuciosamente de todos os
          aspectos necessários para alcançar os objetivos estabelecidos."
        />
        <TextSpliter
          text="3- É hora de alavancar o seu negócio,
          com todos os elementos das fases anteriores harmonizados e os
          resultados começando a se manifestar conforme os seus objetivos."
        />
      </div>
      <Button
        text="Você está pronto para transformar o seu negócio em uma máquina de
          escala?"
      />
    </div>
  )
}
