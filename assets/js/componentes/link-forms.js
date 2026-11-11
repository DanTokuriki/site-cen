// Liga um <a data-componente="link-forms" data-chave="cco"> ao link em config.js > forms.
// Assim o endereço fica num lugar só; sem link configurado, o cartão some.
import { site } from "../config.js";

export default function linkForms(el, { chave }) {
  const link = site.forms?.[chave];
  if (!link) return el.remove();
  el.href = link;
  el.target = "_blank";
  el.rel = "noopener";
}
