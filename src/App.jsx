import React from 'react'
import { Galeria } from './components/Galeria'

const App = () => {
  return (
    <>
        <header className='bg-dark text-light text-center py-5'>
            <p className='h1'>Práctica Buscador de Fotos con API Pexels</p>
        </header>

        <main className='container my-5'>
            {/* {Formulario} */}

            {/* Grid de cada categoria */}
            <Galeria/>
            {/* Cada grid va a contener una coleccion de cards */}
        </main>

        <footer className='bg-dark text-light text-center py-1'>
            <p className='h6'>Footer</p>
        </footer>

    </>
  )
}

export default App
