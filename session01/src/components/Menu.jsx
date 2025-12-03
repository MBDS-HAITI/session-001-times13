export default function Menu() {
  const items = ["Notes", "Etudiants", "Matières", "A propos"];

  const handleClick = (text) => {
    alert(text);
  };

  return (
    <nav className="menu">
      {items.map((item) => (
        <span 
          key={item} 
          className="menu-item"
          onClick={() => handleClick(item)}
        >
          {item}
        </span>
      ))}
    </nav>
  );
}