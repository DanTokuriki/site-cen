// CALENDÁRIO DE PROVAS
// Uma linha por avaliação. O site ordena por data e cria o filtro por semestre sozinho.
//
//   data:       "AAAA-MM-DD" (obrigatório)
//   hora:       ex.: "7h30" (opcional)
//   sigla:      código da disciplina no JupiterWeb, ex.: "PNV3311"
//   disciplina: nome da disciplina
//   avaliacao:  "P1", "P2", "PSub", "Entrega do projeto"...
//   semestre:   número do semestre ideal (vira o filtro "3º semestre")
//   sala:       sala ou prédio (opcional)
//
// ATENÇÃO: as provas abaixo são EXEMPLOS (siglas e datas inventadas). Troque pelas de verdade,
// conferindo com o professor ou o e-Disciplinas.

export const provas = [
  { data: "2026-11-12", hora: "7h30",  sigla: "PNV3100", disciplina: "Introdução à Engenharia Naval",   avaliacao: "P2",    semestre: 1, sala: "Sala N-01" },
  { data: "2026-11-13", hora: "9h20",  sigla: "PNV3212", disciplina: "Mecânica dos Fluidos",            avaliacao: "P2",    semestre: 3, sala: "Sala N-12" },
  { data: "2026-11-17", hora: "13h10", sigla: "PNV3321", disciplina: "Hidrostática e Estabilidade",     avaliacao: "P2",    semestre: 5, sala: "Laboratório de Hidrodinâmica" },
  { data: "2026-11-19", hora: "7h30",  sigla: "PNV3412", disciplina: "Estruturas Navais",               avaliacao: "Entrega do projeto", semestre: 7 },
  { data: "2026-11-26", hora: "9h20",  sigla: "PNV3212", disciplina: "Mecânica dos Fluidos",            avaliacao: "PSub",  semestre: 3, sala: "Sala N-12" },
  { data: "2026-12-01", hora: "13h10", sigla: "PNV3321", disciplina: "Hidrostática e Estabilidade",     avaliacao: "PSub",  semestre: 5 },
  { data: "2026-12-03", hora: "7h30",  sigla: "PNV3100", disciplina: "Introdução à Engenharia Naval",   avaliacao: "PRec",  semestre: 1 },
  { data: "2026-10-22", hora: "7h30",  sigla: "PNV3100", disciplina: "Introdução à Engenharia Naval",   avaliacao: "P1",    semestre: 1, sala: "Sala N-01" },
];
