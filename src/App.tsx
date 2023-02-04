import { useEffect, useRef, useState } from 'react'
import './assets/styles.css'
import { TypeWriter } from './components/TypeWriter';
import { TypeWriterInScroll } from './components/TypeWriterScroll';
import { useTypeWriter } from './hooks/useTypeWriter';

function App() {

  
  return (
    <div className='container'>
      <main>
          <section id="typewriter">  
            <TypeWriter 
                elementType='h1'
                text={`Soy un apasionado del desarrollo de software y la tecnología, con experiencia en la creación y mantenimiento de aplicaciones complejas en diferentes sectores.\n\nMe gusta siempre estar actualizado y aprender cosas nuevas para mejorar en mi profesión. Disfruto trabajar en equipo y ayudar a mis compañeros, además de ser proactivo y rápido para aprender.\n\nMe enfoco en seguir buenas prácticas en desarrollo de software, tales como la escritura de código limpio, mantenible y el uso de patrones de diseño.\n\nEntre las tecnologías que manejo están:`}
                />
          </section>
          <section id="typewriter-scroll">
            <TypeWriterInScroll 
                elementType='p'
                text={`Soy un apasionado del desarrollo de software y la tecnología, con experiencia en la creación y mantenimiento de aplicaciones complejas en diferentes sectores.\n\nMe gusta siempre estar actualizado y aprender cosas nuevas para mejorar en mi profesión. Disfruto trabajar en equipo y ayudar a mis compañeros, además de ser proactivo y rápido para aprender.\n\nMe enfoco en seguir buenas prácticas en desarrollo de software, tales como la escritura de código limpio, mantenible y el uso de patrones de diseño.\n\nEntre las tecnologías que manejo están:`}
                />
          </section>
        </main>
    </div>
  )
}

export default App
