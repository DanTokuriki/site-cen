// Rodapé com contato e redes. Só mostra o que estiver preenchido em config.js.
import { site } from "../config.js";

export default function rodape(el) {
  const { email, instagram } = site.contato;
  const links = [
    instagram && `<a href="https://instagram.com/${instagram}" rel="noopener">Instagram @${instagram}</a>`,
    email && `<a href="mailto:${email}">${email}</a>`,
    site.drive && `<a href="${site.drive}" target="_blank" rel="noopener">Drive da Naval</a>`,
    site.forms?.cco && `<a href="${site.forms.cco}" target="_blank" rel="noopener">Forms da CCO</a>`,
  ].filter(Boolean).join("");

  el.outerHTML = `
    <footer class="rodape">
      <div class="container rodape__grade">
        <div><strong>${site.sigla}</strong> · ${site.nome}<br>${site.instituicao}</div>
        <div class="rodape__redes">${links}</div>
      </div>
    </footer>`;
}
