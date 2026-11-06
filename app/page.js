"use client";

import { useEffect } from "react";

const filosofos = [
  "Sócrates",
  "Platão",
  "Aristóteles",
  "Immanuel Kant",
  "Friedrich Nietzsche",
];

// Ajusta o tamanho da fonte de cada nome para ocupar toda a largura da página
function ajustarFontes() {
  const largura = document.documentElement.clientWidth;
  document.querySelectorAll("li").forEach((li) => {
    li.style.fontSize = "100px";
    const larguraTexto = li.firstChild.getBoundingClientRect().width;
    li.style.fontSize = `${(100 * largura) / larguraTexto}px`;
  });
}

export default function Home() {
  useEffect(() => {
    ajustarFontes();
    document.fonts.ready.then(ajustarFontes);
    window.addEventListener("resize", ajustarFontes);
    return () => window.removeEventListener("resize", ajustarFontes);
  }, []);

  return (
    <ul>
      {filosofos.map((nome) => (
        <li key={nome}>
          <span>{nome}</span>
        </li>
      ))}
    </ul>
  );
}
