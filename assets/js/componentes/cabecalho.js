// Cabeçalho fixo com logo e menu. O item da página atual fica destacado.
import { site } from "../config.js";
import { url } from "../site.js";

export default function cabecalho(el) {
  const atual = location.pathname.replace(/index\.html$/, "");
  const itens = site.menu
    .map(({ rotulo, caminho }) => {
      const href = url(caminho);
      const ativo = new URL(href).pathname === atual;
      return `<li><a href="${href}"${ativo ? ' aria-current="page"' : ""}>${rotulo}</a></li>`;
    })
    .join("");

  el.outerHTML = `
    <header class="cabecalho">
      <div class="container cabecalho__barra">
        <a class="cabecalho__marca" href="${url("")}">
          <img src="${url("assets/img/logo-cen.png")}" alt="" width="44" height="44">
          <span>${site.sigla} · Naval USP</span>
        </a>
        <button class="menu__botao" aria-expanded="false" aria-controls="menu-principal">Menu</button>
        <nav aria-label="Principal">
          <ul class="menu" id="menu-principal">${itens}</ul>
        </nav>
      </div>
    </header>`;

  const botao = document.querySelector(".menu__botao");
  const menu = document.getElementById("menu-principal");
  botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", aberto);
  });
}
