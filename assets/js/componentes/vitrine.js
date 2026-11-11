// Vitrine dos produtos do CEN. O botão "Quero" abre o WhatsApp (ou o Instagram)
// com uma mensagem pronta. Não há pagamento online: a venda é combinada com a gestão.
import { produtos } from "../dados/produtos.js";
import { site } from "../config.js";
import { url } from "../site.js";

const real = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function linkPedido(produto) {
  const msg = `Olá, CEN! Tenho interesse em: ${produto.nome} (${real(produto.preco)}).`;
  const { whatsapp, instagram, email } = site.contato;
  if (whatsapp) return `https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`;
  if (instagram) return `https://ig.me/m/${instagram}`;
  if (email) return `mailto:${email}?subject=${encodeURIComponent("Pedido: " + produto.nome)}&body=${encodeURIComponent(msg)}`;
  return null;
}

export default function vitrine(el) {
  el.innerHTML = `<div class="vitrine">${produtos.map((p) => {
    const pedido = linkPedido(p);
    const foto = p.foto
      ? `<div class="produto__foto"><img src="${url(p.foto)}" alt="${p.nome}" loading="lazy"></div>`
      : `<div class="produto__foto produto__foto--logo"><img src="${url("assets/img/logo-cen.png")}" alt=""></div>`;
    const selo = p.esgotado
      ? `<span class="etiqueta etiqueta--passado produto__selo" style="background:#fff">esgotado</span>`
      : p.novo ? `<span class="etiqueta etiqueta--hoje produto__selo">novo</span>` : "";
    const tamanhos = p.tamanhos?.length
      ? `<div class="produto__tamanhos" aria-label="Tamanhos">${p.tamanhos.map((t) => `<span>${t}</span>`).join("")}</div>` : "";
    const botao = p.esgotado || !pedido ? "" : `<a class="botao" href="${pedido}" rel="noopener">Quero</a>`;
    return `
      <article class="produto${p.esgotado ? " produto--esgotado" : ""}">
        ${foto.replace("</div>", `${selo}</div>`)}
        <div class="produto__corpo">
          <h3 class="produto__nome">${p.nome}</h3>
          <span class="produto__preco">${real(p.preco)}</span>
          ${p.descricao ? `<p class="muted" style="margin:0">${p.descricao}</p>` : ""}
          ${tamanhos}
          ${botao}
        </div>
      </article>`;
  }).join("")}</div>
  ${linkPedido({ nome: "", preco: 0 }) ? "" : `<p class="aviso">Para ativar o botão "Quero", preencha o WhatsApp, o Instagram ou o e-mail em <code>assets/js/config.js</code>.</p>`}`;
}
