// Funções de data usadas pela agenda de eventos e pelo calendário de provas.

const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho",
  "agosto", "setembro", "outubro", "novembro", "dezembro"];
const SEMANA = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

// "2026-11-20" -> Date à meia-noite no horário LOCAL.
// (new Date("2026-11-20") usaria meia-noite UTC, que no Brasil vira dia 19 às 21h!)
export function lerData(texto) {
  const [ano, mes, dia] = texto.split("-").map(Number);
  return new Date(ano, mes - 1, dia);
}

export function hojeMeiaNoite() {
  const agora = new Date();
  return new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
}

// Diferença em dias inteiros entre duas datas à meia-noite (positivo = no futuro).
export function diasAte(data, hoje = hojeMeiaNoite()) {
  return Math.round((data - hoje) / 86_400_000);
}

export const nomeMes = (data) => `${MESES[data.getMonth()]} de ${data.getFullYear()}`;
export const diaSemana = (data) => SEMANA[data.getDay()];

// Decide a etiqueta que aparece ao lado de cada evento ou prova.
// Recebe `dias` (resultado de diasAte: 0 = hoje, 1 = amanhã, -3 = foi há 3 dias)
// e devolve { texto, classe }, onde classe é uma de: "hoje", "breve", "futuro", "passado"
// (cada uma tem uma cor em componentes.css, nas regras .etiqueta--*).
// Devolva null para não mostrar etiqueta.
export function situacao(dias) {
  // TODO(human): decidir as faixas e os textos das etiquetas.
  if (dias < 0) return { texto: "já foi", classe: "passado" };
  return null;
}
