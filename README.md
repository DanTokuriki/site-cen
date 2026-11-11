# Site do CEN · Engenharia Naval USP

Site estático do centro acadêmico, no mesmo modelo do [site do Grêmio Politécnico](https://github.com/ChapaPrisma/Site_gremio_poli):
HTML + CSS + JavaScript puro, **sem etapa de build**. O que está no repositório é exatamente o que vai ao ar.

## Estrutura

```
index.html              página inicial (cartões + próximos eventos)
eventos/index.html      Calendário de eventos
provas/index.html       Calendário de provas
produtos/index.html     Produtos
drive/index.html        Link para o Drive da Naval
assets/
  css/tokens.css        CORES E FONTES (identidade visual: mude aqui)
  css/base.css          reset e tipografia
  css/componentes.css   cabeçalho, cartões, agenda, vitrine, rodapé
  img/logo-cen.png      logo
  js/config.js          nome, link do Drive, contatos, menu
  js/site.js            monta os componentes de cada página
  js/datas.js           funções de data (etiquetas "hoje", "amanhã"...)
  js/componentes/       um arquivo por componente
  js/dados/             >>> O QUE A GESTÃO EDITA NO DIA A DIA <<<
    eventos.js
    provas.js
    produtos.js
```

Cada página HTML só tem marcações como `<div data-componente="agenda" data-fonte="provas">`.
O `site.js` encontra essas marcações e coloca o conteúdo nelas.

## Passo a passo

### 1. Rodar no seu computador

Como o site usa módulos JavaScript (`import`), ele precisa de um servidor local. Abrir o arquivo com dois cliques não funciona.

```sh
cd ~/Downloads/CEN
python3 -m http.server 8000
```

Acesse http://localhost:8000. Para parar o servidor, use Ctrl+C.

### 2. Personalizar

1. **`assets/js/config.js`**: cole o link do Drive e preencha e-mail, Instagram e WhatsApp.
2. **`assets/js/dados/*.js`**: troque os exemplos por eventos, provas e produtos reais.
3. **Fotos dos produtos**: salve em `assets/img/produtos/` (quadradas, 1000 × 1000 px) e aponte no campo `foto`.
4. **Cores**: tudo fica em `assets/css/tokens.css`.

### 3. Criar o repositório no GitHub

1. Em https://github.com/new, crie um repositório **público** chamado, por exemplo, `site-cen`, sem README.
2. No terminal, dentro da pasta do site:

```sh
git init
git add .
git commit -m "Primeira versão do site do CEN"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/site-cen.git
git push -u origin main
```

> Se o GitHub pedir senha, use um **token**: GitHub > Settings > Developer settings > Personal access tokens.
> Outra opção é instalar o GitHub CLI e rodar `gh auth login`.

### 4. Publicar com o GitHub Pages (grátis)

1. No repositório: **Settings > Pages**.
2. Em *Source*, escolha **Deploy from a branch**, depois a branch `main` e a pasta `/ (root)`, e clique em **Save**.
3. Em 1 ou 2 minutos, o site fica no ar em `https://SEU_USUARIO.github.io/site-cen/`.

O arquivo `.nojekyll` faz o GitHub servir os arquivos exatamente como estão.

### 5. Atualizar o site depois

Edite o arquivo, por exemplo `assets/js/dados/eventos.js`, e rode:

```sh
git add .
git commit -m "Adiciona evento X"
git push
```

Também dá para editar direto pelo site do GitHub: abra o arquivo, clique no lápis ✏️ e depois em *Commit changes*.
Assim, quem é da gestão e não programa consegue atualizar a agenda.

### 6. Dar acesso à gestão

No repositório: **Settings > Collaborators > Add people**, com o usuário GitHub de cada membro.
