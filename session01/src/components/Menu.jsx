import { useState } from "react";

function Menu({ onSelect }) {
  const menuItems = [
    { name: "Notes", icon: "📝" },
    { name: "Etudiants", icon: "👨‍🎓" },
    { name: "Matières", icon: "📚" },
    { name: "A propos", icon: "ℹ️" }
  ];
  const [active, setActive] = useState("Notes");

  return (
    <nav
      style={{
        display: "flex",
        gap: "10px",
        padding: "20px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        flexWrap: "wrap"
      }}
    >
      {menuItems.map((item) => (
        <button
          key={item.name}
          onClick={() => {
            setActive(item.name);
            onSelect(item.name);
          }}
          style={{
            cursor: "pointer",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: active === item.name ? "700" : "500",
            color: active === item.name ? "#667eea" : "white",
            background: active === item.name 
              ? "white" 
              : "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: active === item.name ? "translateY(-2px)" : "translateY(0)",
            boxShadow: active === item.name 
              ? "0 4px 12px rgba(0, 0, 0, 0.15)" 
              : "0 2px 4px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
          onMouseEnter={(e) => {
            if (active !== item.name) {
              e.target.style.background = "rgba(255, 255, 255, 0.2)";
              e.target.style.transform = "translateY(-1px)";
            }
          }}
          onMouseLeave={(e) => {
            if (active !== item.name) {
              e.target.style.background = "rgba(255, 255, 255, 0.1)";
              e.target.style.transform = "translateY(0)";
            }
          }}
        >
          <span style={{ fontSize: "20px" }}>{item.icon}</span>
          {item.name}
        </button>
      ))}
    </nav>
  );
}

export default Menu;