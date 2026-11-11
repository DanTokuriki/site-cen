// CALENDÁRIO DE EVENTOS
// Para adicionar um evento, copie um bloco { ... } e mude os campos. A ordem não importa:
// o site ordena por data sozinho e esconde o que já passou (com botão para mostrar).
//
//   data:      "AAAA-MM-DD" (obrigatório)
//   hora:      texto livre, ex.: "18h", "14h–17h" (opcional)
//   titulo:    nome do evento (obrigatório)
//   tipo:      vira filtro na página, ex.: "Festa", "Palestra", "Esporte", "Visita técnica"
//   local:     onde vai ser (opcional)
//   descricao: uma ou duas frases (opcional)
//   link:      inscrição, post do Instagram etc. (opcional)
//
// ATENÇÃO: os eventos abaixo são EXEMPLOS. Troque pelos de verdade.

export const eventos = [
  {
    data: "2026-11-11",
    hora: "18h",
    titulo: "Reunião aberta do CEN",
    tipo: "Reunião",
    local: "Centrinho da Naval",
    descricao: "Pauta: loja de fim de ano e calendário de 2027. Aberta a todo mundo da Naval.",
  },
  {
    data: "2026-11-14",
    hora: "14h–18h",
    titulo: "Visita técnica a estaleiro",
    tipo: "Visita técnica",
    local: "Saída do prédio da Naval",
    descricao: "Vagas limitadas, inscrição pelo formulário.",
    link: "",
  },
  {
    data: "2026-11-21",
    hora: "19h",
    titulo: "Palestra: carreira em offshore",
    tipo: "Palestra",
    local: "Anfiteatro da Naval",
  },
  {
    data: "2026-11-28",
    hora: "a partir das 16h",
    titulo: "Churrasco de fim de semestre",
    tipo: "Festa",
    local: "Raia Olímpica",
    descricao: "Ingresso com desconto para quem tiver a camiseta do CEN.",
  },
  {
    data: "2026-12-05",
    hora: "9h",
    titulo: "Regata de barcos de papelão",
    tipo: "Esporte",
    local: "Raia Olímpica",
    descricao: "Monte seu barco com a sua turma. O que afundar primeiro paga o açaí.",
  },
  {
    data: "2026-10-30",
    hora: "22h",
    titulo: "Festa Pirata",
    tipo: "Festa",
    local: "Espaço Poli",
  },
];
