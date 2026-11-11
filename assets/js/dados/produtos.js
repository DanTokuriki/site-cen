// PRODUTOS DO CEN
//
//   nome:      nome do produto (obrigatório)
//   preco:     número, em reais. Use ponto para centavos: 59.9 (obrigatório)
//   foto:      caminho da imagem a partir da raiz, ex.: "assets/img/produtos/camiseta.jpg".
//              Use fotos quadradas (1000 × 1000 px). Sem foto, aparece a logo do CEN.
//   descricao: uma frase (opcional)
//   tamanhos:  lista, ex.: ["P", "M", "G", "GG"] (opcional)
//   novo:      true mostra o selo "novo" (opcional)
//   esgotado:  true deixa o cartão cinza e tira o botão (opcional)
//
// ATENÇÃO: produtos e preços abaixo são EXEMPLOS.

export const produtos = [
  { nome: "Camiseta CEN Caveira", preco: 60, descricao: "Algodão, estampa da caveira na frente e NAVAL USP nas costas.", tamanhos: ["P", "M", "G", "GG"], novo: true },
  { nome: "Moletom Naval USP",    preco: 150, descricao: "Moletom canguru preto, bordado no peito.", tamanhos: ["P", "M", "G", "GG"] },
  { nome: "Caneca de latão",      preco: 45, descricao: "Caneca esmaltada estilo de bordo, 350 ml." },
  { nome: "Kit de adesivos",      preco: 15, descricao: "6 adesivos de vinil à prova d'água." },
  { nome: "Bandana pirata",       preco: 25, descricao: "Para a Festa Pirata e para a vida.", esgotado: true },
];
