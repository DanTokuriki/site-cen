// Lê uma planilha do Google Sheets e devolve uma lista de objetos, um por linha.
// Etapas: buscar (fetch) → converter (PapaParse) → [quem chama valida].
//
// Usa o endereço "gviz" do Google, que lê a planilha original (sem o atraso do
// "Publicar na Web") e libera a leitura pelo navegador (CORS). Só exige que a
// planilha esteja compartilhada como "Qualquer pessoa com o link: Leitor".

import Papa from "https://cdn.jsdelivr.net/npm/papaparse@5.4.1/+esm";

// "Título " -> "titulo": minúsculas, sem acento, sem espaços nas pontas.
// Assim o nome da coluna na planilha pode ser escrito do jeito "humano".
export const normalizar = (texto) =>
  texto.normalize("NFD").replace(/[̀-ͯ]/g, "").trim().toLowerCase();

export async function lerPlanilha({ id, aba }) {
  const endereco = new URL(`https://docs.google.com/spreadsheets/d/${id}/gviz/tq`);
  endereco.searchParams.set("tqx", "out:csv");
  if (aba) endereco.searchParams.set("sheet", aba);

  const resposta = await fetch(endereco);
  if (!resposta.ok) throw new Error(`A planilha respondeu ${resposta.status}`);

  const { data } = Papa.parse(await resposta.text(), {
    header: true,                 // a 1ª linha vira o nome dos campos
    skipEmptyLines: "greedy",     // ignora linhas vazias (inclusive só com espaços)
    transformHeader: normalizar,  // "Título" -> "titulo"
    transform: (valor) => valor.trim(),
  });
  return data;
}
