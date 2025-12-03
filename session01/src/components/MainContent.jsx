import RandomNote from './RandomNote';

function MainContent({selectedMenu}) {
  const now = new Date();
  const jour = now.getDate().toString().padStart(2, "0");   // 01–31
  const mois = now.toLocaleString("fr-FR", { month: "long" }); // janvier, février…
  const annee = now.getFullYear();
  const heure = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const seconde = now.getSeconds().toString().padStart(2, "0");
  return (
    <main>
      <h2>{selectedMenu}</h2>
        <RandomNote />
       Bonjour, on est le {jour}, {mois}, {annee} et il est {heure}:{minute}:{seconde}
    </main>
  );
}

export {MainContent}