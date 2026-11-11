// Botão para a pasta da Naval no Google Drive (link em config.js > drive).
import { site } from "../config.js";

export default function drive(el) {
  el.innerHTML = site.drive
    ? `<a class="botao botao--grande" href="${site.drive}" target="_blank" rel="noopener">Abrir o Drive da Naval ↗</a>`
    : `<p class="aviso">O link do Drive ainda não foi configurado. Cole o link em <code>assets/js/config.js</code>, no campo <code>drive</code>.</p>`;
}
