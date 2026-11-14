// CALENDÁRIO DE EVENTOS: agora vem da planilha do Google (link em config.js > planilhas.eventos).
// Para adicionar um evento, basta preencher uma linha na planilha. Não precisa mexer aqui.
//
// Colunas reconhecidas (maiúsculas e acentos não importam; a ordem também não):
//   Data       28/11/2026 ou 2026-11-28 (obrigatória)
//   Título     nome do evento (obrigatório)
//   Hora       texto livre, ex.: "18h", "14h–17h"
//   Tipo       vira filtro na página, ex.: "Festa", "Palestra"
//   Local
//   Descrição  (coluna opcional; pode ser criada na planilha)
//   Link       (coluna opcional)
//
// Linhas sem data válida ou sem título são ignoradas, com aviso no console (F12).

import { site } from "../config.js";
import { lerPlanilha } from "../planilha.js";
import { paraISO } from "../datas.js";

export async function carregarEventos() {
  const linhas = await lerPlanilha(site.planilhas.eventos);
  const eventos = [];

  linhas.forEach((linha, i) => {
    const data = paraISO(linha.data);
    if (!data || !linha.titulo) {
      // i + 2: a linha 1 da planilha é o cabeçalho e as listas começam em 0.
      console.warn(`Planilha de eventos, linha ${i + 2} ignorada (data ou título inválido):`, linha);
      return;
    }
    eventos.push({ ...linha, data, descricao: linha.descricao || "" });
  });

  return eventos;
}
