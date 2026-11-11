// Ponto de entrada de todas as páginas (mesmo padrão do site do Grêmio Politécnico).
// Procura elementos com data-componente="nome" e monta o componente correspondente.
// Para criar um componente novo: crie o arquivo em componentes/ e registre em `componentes`.

import cabecalho from "./componentes/cabecalho.js";
import rodape from "./componentes/rodape.js";
import agenda from "./componentes/agenda.js";
import vitrine from "./componentes/vitrine.js";
import drive from "./componentes/drive.js";
import linkForms from "./componentes/link-forms.js";

// Raiz do site calculada a partir deste arquivo (assets/js/site.js):
// funciona em qualquer domínio ou subpasta (ex.: usuario.github.io/cen/).
export const RAIZ = new URL("../../", import.meta.url);
export const url = (caminho) => (/^[a-z]+:/i.test(caminho) ? caminho : new URL(caminho, RAIZ).href);

const componentes = { cabecalho, rodape, agenda, vitrine, drive, "link-forms": linkForms };

for (const el of document.querySelectorAll("[data-componente]")) {
  const montar = componentes[el.dataset.componente];
  if (!montar) {
    console.warn(`Componente desconhecido: ${el.dataset.componente}`);
    continue;
  }
  try {
    montar(el, el.dataset);
  } catch (erro) {
    console.error(`Erro ao montar ${el.dataset.componente}:`, erro);
  }
}
