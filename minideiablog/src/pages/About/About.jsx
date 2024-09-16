import React from 'react'
import style from './About.module.css'

const About = () => {
  return (
    <>
    <div className={style.about}>
        <h2>Sobre o IdeiaMini<span>Blog</span></h2>
        <p>
            Este projeto será desenvolvido pra aprimorar as habilidades
            de turma de desenvolvimento de sistemas da Etec Sylvio de Mattos
            Carvalho de Matão - SP.
        </p>
        <a href="#"className={style.btn}>
            Nova Postagem
        </a>
    </div>
    </>
  )
}

export default About