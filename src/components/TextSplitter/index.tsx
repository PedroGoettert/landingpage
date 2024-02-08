import style from './style.module.css'

interface TextSpliterProps {
  text: string
}
export function TextSpliter({ text }: TextSpliterProps) {
  return (
    <div className={style.content}>
      <p>{text}</p>
    </div>
  )
}
