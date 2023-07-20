import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [nameInput, setNameInput] = useState('')

  const [ageInput, setAgeInput] = useState('')

  const [marital, setMarital] = useState('')

  const [emailInput, setEmailInput] = useState('')

  const [passwordInput, setPasswordInput] = useState('')

  const handleName = (event) => {
    setNameInput(event.target.value)
  }

  const handleAge = (event) => {

    setAgeInput(event.target.value)
  }

  const handleMarital = (event) => {
    setMarital(event.target.value)
  }

  const handleEmail = (event) => {
    setEmailInput(event.target.value)
  }

  const handlePassword = (event) => {
    setPasswordInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // if (nameInput.length && ageInput.length && marital.length) {
    //   console.log(nameInput, ageInput, marital)

    // } else {
    //   alert('Preencha os campos abaixo')
    // }

    setNameInput('')
    setAgeInput('')
    setMarital('')
    setEmailInput('')
    setPasswordInput('')
  }


  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit={handleSubmit}>
        <label>
          Nome:
          <Input
            type={'text'}
            value={nameInput}
            onChange={handleName} />
        </label>
        <label>
          E-mail:
          <Input
            type={'email'}
            value={emailInput}
            onChange={handleEmail} />
        </label>
        <label>
          Idade:
          <Input
            type={'number'}
            onChange={handleAge}
            value={ageInput}
          />
          <label>
            Senha:
            <Input
              type={'password'}
              value={passwordInput}
              onChange={handlePassword} />
          </label>
        </label>
        <select onChange={handleMarital}>
          <option value="Nenhum">Nenhum</option>
          <option value="Solteiro">Solteiro(a)</option>
          <option value="Casado">Casado(a)</option>
          <option value="Viúvo">Viúvo(a)</option>
          <option value="Divorciado">Divorciado(a)</option>
        </select>
        <button
          disabled={
            nameInput.length && ageInput.length && marital.length
              ? false
              : true
          }
        >Enviar Formulário</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
