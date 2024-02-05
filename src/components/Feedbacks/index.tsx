import style from './style.module.css'

interface feedbacksProps {
  logo: string
  text: string
}

export function Feedbacks({ logo, text }: feedbacksProps) {
  return (
    <div className={style.container}>
      <img src={logo} alt="Logo da empresa" className={style.logo} />
      <blockquote className={style.text}>{text}</blockquote>
    </div>
  )
}
