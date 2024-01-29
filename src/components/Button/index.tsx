import style from './style.module.css'

interface textType {
  text: string
}

export function Button({ text }: textType) {
  return (
    <a href="#Contacts" className={style.button}>
      {text}
    </a>
  )
}
