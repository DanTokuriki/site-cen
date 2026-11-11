// Agenda: lista itens com data, agrupados por mês, com filtros em chips.
// Usada em duas páginas:
//   <div data-componente="agenda" data-fonte="eventos"></div>   (Calendário de eventos)
//   <div data-componente="agenda" data-fonte="provas"></div>    (Calendário de provas)
//   data-limite="3" mostra só os próximos N itens, sem filtros (usado na página inicial).

import { eventos } from "../dados/eventos.js";
import { provas } from "../dados/provas.js";
import { lerData, diasAte, nomeMes, diaSemana, situacao } from "../datas.js";

// Cada fonte diz como filtrar e como escrever o título e a linha de detalhes de um item.
const FONTES = {
  eventos: {
    itens: eventos,
    filtro: (e) => e.tipo,
    titulo: (e) => e.titulo,
    meta: (e) => [e.hora, e.local].filter(Boolean).join(" · "),
    vazio: "Nenhum evento marcado por enquanto. Fique de olho no Instagram!",
  },
  provas: {
    itens: provas,
    filtro: (p) => `${p.semestre}º semestre`,
    titulo: (p) => `<span class="agenda__sigla">${p.sigla}</span> ${p.avaliacao} · ${p.disciplina}`,
    meta: (p) => [p.hora, p.sala].filter(Boolean).join(" · "),
    vazio: "Nenhuma prova cadastrada para este filtro.",
  },
};

const escapar = (t = "") => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

export default function agenda(el, { fonte = "eventos", limite }) {
  const cfg = FONTES[fonte];
  const todos = cfg.itens
    .map((item) => ({ ...item, _data: lerData(item.data) }))
    .sort((a, b) => a._data - b._data || (a.hora || "").localeCompare(b.hora || ""));

  // Modo resumo (página inicial): só os próximos N, sem filtros.
  if (limite) {
    const proximos = todos.filter((i) => diasAte(i._data) >= 0).slice(0, Number(limite));
    el.innerHTML = proximos.length
      ? `<ul class="agenda__lista">${proximos.map((i) => linha(i, cfg)).join("")}</ul>`
      : `<p class="agenda__meta">${cfg.vazio}</p>`;
    return;
  }

  const categorias = [...new Set(todos.map(cfg.filtro))].sort();
  let ativo = "Todos";
  let mostrarPassados = false;

  function desenhar() {
    const visiveis = todos.filter((i) =>
      (ativo === "Todos" || cfg.filtro(i) === ativo) && (mostrarPassados || diasAte(i._data) >= 0));

    const chips = ["Todos", ...categorias]
      .map((c) => `<button class="chip" data-filtro="${escapar(c)}" aria-pressed="${c === ativo}">${escapar(c)}</button>`)
      .join("");

    // Agrupa por mês mantendo a ordem cronológica.
    const meses = new Map();
    for (const i of visiveis) {
      const chave = nomeMes(i._data);
      if (!meses.has(chave)) meses.set(chave, []);
      meses.get(chave).push(i);
    }
    const blocos = [...meses]
      .map(([mes, itens]) => `<h2 class="agenda__mes">${mes}</h2>
        <ul class="agenda__lista">${itens.map((i) => linha(i, cfg)).join("")}</ul>`)
      .join("");

    el.innerHTML = `
      <div class="chips" role="group" aria-label="Filtrar">${chips}
        <button class="chip" data-passados aria-pressed="${mostrarPassados}">Mostrar o que já passou</button>
      </div>
      ${blocos || `<div class="agenda__vazio">${cfg.vazio}</div>`}`;
  }

  el.addEventListener("click", (ev) => {
    const chip = ev.target.closest(".chip");
    if (!chip) return;
    if (chip.hasAttribute("data-passados")) mostrarPassados = !mostrarPassados;
    else ativo = chip.dataset.filtro;
    desenhar();
  });

  desenhar();
}

function linha(item, cfg) {
  const dias = diasAte(item._data);
  const etiqueta = situacao(dias);
  const link = item.link ? ` <a href="${escapar(item.link)}" rel="noopener">mais informações</a>` : "";
  return `
    <li class="agenda__item${dias < 0 ? " agenda__item--passado" : ""}">
      <div class="agenda__data" aria-hidden="true">
        <span class="agenda__dia">${item._data.getDate()}</span>
        <span class="agenda__semana">${diaSemana(item._data)}</span>
      </div>
      <div>
        <p class="agenda__titulo">${cfg.titulo(item)}
          ${etiqueta ? `<span class="etiqueta etiqueta--${etiqueta.classe}">${etiqueta.texto}</span>` : ""}</p>
        <p class="agenda__meta"><span class="sr-only">${item._data.toLocaleDateString("pt-BR")} · </span>${cfg.meta(item)}</p>
        ${item.descricao || link ? `<p class="agenda__desc">${escapar(item.descricao || "")}${link}</p>` : ""}
      </div>
    </li>`;
}
