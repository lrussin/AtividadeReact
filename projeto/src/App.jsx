import { useState } from 'react'
import './App.css'
import Cabecalho from './Cabecalho'
import Section from './Section'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <Cabecalho/>
      <Section titulo="Sobre Mim" subtitulo="Me chamo lucas e sou formado em analista de desenvolvimento de sistema..." contar={contador} setCont={setContador} tipo="sobre"/>
      <Section contar={contador} setCont={setContador} titulo="Alguns filmes que assistir" subtitulo="São alguns filmes que assistir esse mês" tipo="filmes"/>
      <Section contar={contador} setCont={setContador} titulo="Meus contatos" subtitulo="Entre em contato comigo" tipo="contatos"/>
    </>
  )
}

export default App
