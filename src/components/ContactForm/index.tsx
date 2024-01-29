import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import emailjs from '@emailjs/browser'

import style from './style.module.css'

const createContactFormSchema = z.object({
  companyName: z.string().nonempty('O Campo não pode estar vazio'),
  name: z.string().nonempty('O Campo não pode estar vazio'),
  companyEmail: z
    .string()
    .nonempty('O Campo não pode estar vazio')
    .email('formato de email invalido'),
  text: z.string().nonempty('O Campo não pode estar vazio'),
  objective: z.string().nonempty('O Campo não pode estar vazio'),
  numberPhone: z
    .string()
    .nonempty('O Campo não pode estar vazio')
    .min(11, 'O Número de telefone precisa ter no minímo 11 digitos'),
})

type createContactFormData = z.infer<typeof createContactFormSchema>

export function ContactForm() {
  const [companyName, setCompanyName] = useState('')
  const [name, setName] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [text, setText] = useState('')
  const [numberPhone, setNumberPhone] = useState('')
  const [objective, setObjective] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createContactFormData>({
    resolver: zodResolver(createContactFormSchema),
  })

  function createContact() {
    if (
      companyName === '' ||
      name === '' ||
      companyEmail === '' ||
      text === '' ||
      numberPhone === '' ||
      objective === '' ||
      objective === 'Selecione o seu objetivo'
    ) {
      return
    }

    const contactFormParms = {
      companyName,
      from_name: name,
      companyEmail,
      menssage: text,
      objective,
      numberPhone,
    }

    emailjs
      .send(
        'service_qcqoaht',
        'template_pjjonqk',
        contactFormParms,
        'RAVo2T5S7VfdRiA3I',
      )
      .then(() => {
        alert('Email enviado com sucesso')

        setCompanyName('')
        setName('')
        setCompanyEmail('')
        setText('')
        setNumberPhone('')
        setObjective('')
      })
      .catch((err) => console.log(err))
  }

  return (
    <section>
      <form className={style.container} onSubmit={handleSubmit(createContact)}>
        <div>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome completo"
            {...register('name')}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {errors.name && <span>{errors.name?.message}</span>}
        </div>

        <div>
          <label htmlFor="companyName">Nome da Empresa</label>
          <input
            type="text"
            id="companyName"
            placeholder="Nome da empresa"
            {...register('companyName')}
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
          />
          {errors.companyName && <span>{errors.companyName.message}</span>}
        </div>

        <div>
          <label htmlFor="companyEmail">Email da Empresa</label>
          <input
            type="text"
            id="companyEmail"
            placeholder="Email da empresa"
            {...register('companyEmail')}
            onChange={(e) => setCompanyEmail(e.target.value)}
            value={companyEmail}
          />
          {errors.companyEmail && <span>{errors.companyEmail.message}</span>}
        </div>

        <div>
          <label htmlFor="numberPhone">Contato</label>

          <input
            type="number"
            id="numberPhone"
            {...register('numberPhone')}
            placeholder="DDD + Número"
            onChange={(e) => {
              setNumberPhone(e.target.value)
            }}
            value={numberPhone}
          />
          {errors.numberPhone && <span>{errors.numberPhone.message}</span>}
        </div>

        <div>
          <label htmlFor="objective">Qual o seu objetivo?</label>
          <select
            id="objective"
            {...register('objective')}
            onChange={(e) => setObjective(e.target.value)}
            value={objective}
          >
            <option value="Selecione o seu objetivo">
              Selecione o seu objetivo
            </option>

            <option value="Quero escalar os resultados da minha empresa">
              Quero escalar os resultados da minha empresa
            </option>
            <option value="Quero aumentar o fluxo de pessoas para minha página de vendas com tráfego pago">
              Quero aumentar o fluxo de pessoas para minha página de vendas com
              tráfego pago
            </option>
            <option value="Quero posicionar minha marca de forma estratégica e aumentar a autoridade dentro e fora do digital">
              Quero posicionar minha marca de forma estratégica e aumentar a
              autoridade dentro e fora do digital
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="text">No que podemos lhe ajudar?</label>
          <textarea
            id="text"
            placeholder="Escreva aqui no que podemos lhe ajudar"
            {...register('text')}
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          {errors.text && <span>{errors.text.message}</span>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
