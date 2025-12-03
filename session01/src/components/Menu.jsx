import { useState } from "react";

function Menu({ onSelect }) {
  const menuItems = ["Notes", "Etudiants", "Matières", "A propos"];
  const [active, setActive] = useState("Notes");

  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      {menuItems.map((item) => (
        <span
          key={item}
          onClick={() => {
            setActive(item);
            onSelect(item);
          }}
          style={{
            cursor: "pointer",
            fontWeight: active === item ? "bold" : "normal"
          }}
        >
          {item}
        </span>
      ))}
    </nav>
  );
}

export default Menu;