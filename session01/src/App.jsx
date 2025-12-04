import { useState } from 'react'
import './App.css'
import Menu from "./components/Menu";
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Notes");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMenuSelect = (page) => {
    if (page === selectedMenu) return;
    
    // Déclenche l'animation de sortie
    setIsAnimating(true);
    
    // Attend la fin de l'animation avant de changer de page
    setTimeout(() => {
      setSelectedMenu(page);
      setIsAnimating(false);
    }, 300); // Correspond à la durée de l'animation CSS
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column",
      //background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)"
    }}>
      <div style={{ 
        position: "sticky", 
        top: 0, 
        zIndex: 1000,
      //  background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "20px" }}>
          <Menu onSelect={handleMenuSelect} />
        </div>
      </div>

      <Header />
      
      <main
        style={{
          flex: 1,
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? "translateY(20px)" : "translateY(0)",
          transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out"
        }}
      >
        <MainContent selectedMenu={selectedMenu} />
      </main>
      
      <Footer />
    </div>
  )
}

export default App