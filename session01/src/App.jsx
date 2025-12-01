import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return (
    <header >
      <img 
        src="/mbds_logo_transparent.svg" 
        alt="Logo formation" 
      />
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      Ici, nous afficherons des informations interessantes :)
    </main>
  );
}

function Footer() {
  return (
    <footer>
      Tous droits réservés - Alfred Times
    </footer>
  );
}

function App() {
  
  return (
    <>
       <Header />
       <MainContent />
       <Footer />
    </>
  )
}

export default App
