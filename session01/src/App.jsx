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
  const now = new Date();
  const jour = now.getDate().toString().padStart(2, "0");   // 01–31
  const mois = now.toLocaleString("fr-FR", { month: "long" }); // janvier, février…
  const annee = now.getFullYear();
  const heure = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const seconde = now.getSeconds().toString().padStart(2, "0");
  return (
    <main>
       Bonjour, on est le {jour}, {mois}, {annee} et il est {heure}:{minute}:{seconde}
    </main>
  );
}

function Footer() {
  const annee = new Date().getFullYear();
  const nom = "Alfred";
  const prenom = "Times";
  return (
    <footer>
       © {annee} - {prenom}.{nom}, Tous droits réservés.
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
