// Configuração geral do site: nome, links e menu.
// Quase tudo que muda de uma gestão para outra está aqui.

export const site = {
  sigla: "CEN",
  nome: "Centro Acadêmico da Engenharia Naval",
  instituicao: "Escola Politécnica da USP",

  // Link da pasta compartilhada da Naval no Google Drive.
  // No Drive: botão direito na pasta > Compartilhar > "Qualquer pessoa com o link" > Copiar link.
  // Deixe "" enquanto não tiver o link: a página do Drive mostra um aviso no lugar do botão.
  drive: "https://drive.google.com/drive/folders/1Dr0uAWSzGJLsaeWPdo1eqtAxhg1XXCkZ",

  // Formulário da CCO (aparece num cartão da página inicial e no rodapé).
  forms: {
    cco: "https://forms.gle/VsF2szpZvXbdxQ4r9",
  },

  contato: {
    email: "",          // ex.: "cen@usp.br"
    instagram: "",      // só o usuário, sem @. ex.: "cen.usp"
    whatsapp: "",       // número com DDI e DDD, só dígitos. ex.: "5511999999999" (usado nos pedidos da loja)
  },

  // Itens do menu, na ordem em que aparecem. `caminho` é relativo à raiz do site.
  menu: [
    { rotulo: "Início", caminho: "" },
    { rotulo: "Eventos", caminho: "eventos/" },
    { rotulo: "Provas", caminho: "provas/" },
    { rotulo: "Produtos", caminho: "produtos/" },
    { rotulo: "Drive", caminho: "drive/" },
  ],
};
