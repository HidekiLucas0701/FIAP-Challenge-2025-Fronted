
import { useState, useEffect } from "react";
import "../index.css";

const FONT_SIZES = ["100%", "110%", "120%", "130%", "140%"];

export function AccessibilityButtons() {
  {/*const [darkMode, setDarkMode] = useState(false);*/}
  const [fontSizeIdx, setFontSizeIdx] = useState(0);

  {/*useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);*/}

  useEffect(() => {
    document.documentElement.style.fontSize = FONT_SIZES[fontSizeIdx];
  }, [fontSizeIdx]);

  return (
    <div className="fixed top-4 right-4 flex gap-2 z-[9999] bg-white/70 rounded-3xl px-2 py-1 shadow-lg items-center">
      {/* TODO: implentar depois dark mode com tailwind
      <button
        aria-label="Alternar modo escuro/claro"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.2em",
          color: darkMode ? "#FFD700" : "#333"
        }}
        onClick={() => setDarkMode((d) => !d)}>{darkMode ? "🌙" : "☀️"}</button>*/}

      <button aria-label="Aumentar fonte"
        className={`bg-none border-none cursor-pointer text-xl font-bold text-gray-700 px-2 py-1 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
        onClick={() => setFontSizeIdx((i) => Math.min(FONT_SIZES.length - 1, i + 1))} disabled={fontSizeIdx === FONT_SIZES.length - 1}>A+</button>

      <button aria-label="Diminuir fonte"
        className={`bg-none border-none cursor-pointer text-xl font-bold text-gray-700 px-2 py-1 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
        onClick={() => setFontSizeIdx((i) => Math.max(0, i - 1))} disabled={fontSizeIdx === 0}>A-</button>    
    </div>
  );
}
