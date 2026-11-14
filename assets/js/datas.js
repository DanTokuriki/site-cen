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

// Aceita a data como a gestão costuma digitar na planilha e devolve sempre "AAAA-MM-DD".
//   "2026-11-28" -> "2026-11-28"
//   "28/11/2026" ou "28/11/26" -> "2026-11-28"
// Qualquer outra coisa (vazio, "28 de novembro", data impossível) -> null.
export function paraISO(texto = "") {
  let ano, mes, dia;
  let m;
  if ((m = texto.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/))) [, ano, mes, dia] = m;
  else if ((m = texto.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/))) [, dia, mes, ano] = m;
  else return null;

  ano = Number(ano.length === 2 ? "20" + ano : ano);
  mes = Number(mes);
  dia = Number(dia);
  // Confere se a data existe: new Date(2026, 1, 31) "vira" 3 de março, então comparamos de volta.
  const d = new Date(ano, mes - 1, dia);
  if (d.getFullYear() !== ano || d.getMonth() !== mes - 1 || d.getDate() !== dia) return null;
  return `${ano}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
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
