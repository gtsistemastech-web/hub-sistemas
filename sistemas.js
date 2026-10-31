/* ============================================================================
   Hub de Sistemas — dados
   Secretaria Executiva da Presidência

   Este é o ÚNICO arquivo que precisa ser editado para atualizar o hub.
   Para adicionar, remover ou renomear um sistema, mexa apenas aqui.
   Depois, abra o index.html para conferir e suba para o GitHub Pages.
   ==========================================================================*/

window.HUB = {

  /* Identificação do hub ---------------------------------------------- */
  orgao: "Secretaria Executiva da Presidência",
  titulo: "Hub de Sistemas",
  apresentacao:
    "Registro único dos sistemas do departamento. Um ponto de entrada, " +
    "os mesmos oito sistemas de sempre.",

  /* Paleta por categoria -----------------------------------------------
     Segue o design system do Sistema de Comunicações e Contatos.
     Cada categoria tem sua cor no tile de ícone. Para acrescentar uma
     categoria nova, basta adicioná-la aqui — o hub cria o filtro sozinho.
  -------------------------------------------------------------------- */
  paleta: {
    "Processos":   ["#4A8DFF", "#2B5CB8"],
    "Comunicação": ["#2FBF71", "#1B8F5C"],
    "Documentos":  ["#8B5CF6", "#6D3FE0"],
    "Prazos":      ["#F0A13C", "#D9761E"],
    "Pesquisa":    ["#14B8E0", "#0C8FB5"],
    "Escala":      ["#E0567C", "#B93860"]
  },

  /* Sistemas publicados ------------------------------------------------
     id        → identificador estável (usado como chave interna)
     nome      → como o sistema é chamado no dia a dia
     categoria → agrupamento do menu lateral (deve existir em "paleta")
     url       → endereço público no GitHub Pages
     descricao → uma linha curta sobre o que o sistema faz
     icone     → chave do ícone (veja a lista em ICONES, no index.html)
     palavras  → termos extras para a busca, além do nome e da categoria
  -------------------------------------------------------------------- */

  sistemas: [
    {
      id: "distribuidor",
      nome: "Distribuidor de processos",
      categoria: "Processos",
      url: "https://gutormin.github.io/orquestrador/#dashboard",
      descricao: "Distribuição e andamento dos processos da pasta.",
      icone: "fluxo",
      palavras: ["orquestrador", "dashboard", "distribuição", "processos"]
    },
    {
      id: "contatos",
      nome: "Comunicações e Contatos",
      categoria: "Comunicação",
      url: "https://gutormin.github.io/secexecpres_contatos/",
      descricao: "Cadastro de contatos e registro das comunicações.",
      icone: "pessoas",
      palavras: ["comunicações", "contatos", "telefones", "secexecpres"]
    },
    {
      id: "certidoes",
      nome: "Emissão de certidões",
      categoria: "Documentos",
      url: "https://gutormin.github.io/geradorcertidoes/",
      descricao: "Geração das certidões emitidas pelo departamento.",
      icone: "selo",
      palavras: ["certidões", "certidão", "gerador", "emissão"]
    },
    {
      id: "formatacao",
      nome: "Formatador de textos",
      categoria: "Documentos",
      url: "https://gtsistemastech-web.github.io/formatacao/",
      descricao: "Padronização de formatação de textos e peças.",
      icone: "texto",
      palavras: ["formatação", "formatador", "textos", "padronização"]
    },
    {
      id: "prazos",
      nome: "Controle de prazos",
      categoria: "Prazos",
      url: "https://gutormin.github.io/prazocontrol/",
      descricao: "Acompanhamento de prazos e vencimentos.",
      icone: "relogio",
      palavras: ["prazos", "prazocontrol", "vencimento", "controle"]
    },
    {
      id: "pdf",
      nome: "Tudo para PDF",
      categoria: "Documentos",
      url: "https://gutormin.github.io/pdf/",
      descricao: "Conversões e ajustes em arquivos PDF.",
      icone: "arquivo",
      palavras: ["pdf", "conversão", "arquivos", "documento"]
    },
    {
      id: "assuntos",
      nome: "Busca de Assuntos",
      categoria: "Pesquisa",
      url: "https://gutormin.github.io/gerador-assuntos/",
      descricao: "Consulta e seleção de assuntos padronizados.",
      icone: "lupa",
      palavras: ["assuntos", "busca", "consulta", "gerador"]
    },
    {
      id: "escalas",
      nome: "Gerador de Escalas",
      categoria: "Escala",
      url: "https://gtsistemastech-web.github.io/Escala/",
      descricao: "Montagem das escalas de serviço.",
      icone: "grade",
      palavras: ["escalas", "escala", "serviço", "gerador"]
    }
  ],

  /* Acesso local --------------------------------------------------------
     Caso à parte: não é um sistema publicado e não entra na contagem.
     Existe apenas no computador onde a aplicação está instalada, então o
     link não resolve para mais ninguém. Preencha nome, porta e descrição
     conforme a sua instalação, ou use "visivel: false" para esconder.
  -------------------------------------------------------------------- */
  local: {
    visivel: true,
    nome: "Sistema local",
    descricao: "Aplicação web rodando no seu computador, em localhost.",
    url: "http://localhost:8080",
    porta: "8080"
  }
};
