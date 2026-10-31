# Hub de Sistemas

Ponto de entrada único dos sistemas da **Secretaria Executiva da Presidência**.

Abra o `index.html` e tenha os oito sistemas do departamento à vista, sem abrir um por um no navegador.

---

## Como publicar

O hub é uma página **estática**: não tem servidor, não tem banco de dados e não precisa de instalação. Para colocá-lo no ar em qualquer hosting estático, basta subir os arquivos.

### GitHub Pages

1. Crie um repositório público, por exemplo `hub-sistemas`.
2. Suba o conteúdo desta pasta na raiz do repositório (`index.html`, `sistemas.js` e este `README.md`).
3. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
4. Aguarde alguns segundos. O endereço fica no formato `https://<seu-usuario>.github.io/hub-sistemas/`.

Você tem sistemas publicados em duas contas (`gutormin.github.io` e `gtsistemastech-web.github.io`). Publique o hub na conta que fizer mais sentido como porta de entrada — os links continuam funcionando para as duas, porque são endereços absolutos.

### Abrir localmente

Duplo clique em `index.html`. Como o hub lê o `sistemas.js` via `<script>`, funciona também por `file://` — nesse caso, alguns navegadores podem bloquear o carregamento do arquivo externo. Se isso acontecer, sirva a pasta com qualquer servidor simples:

```bash
python3 -m http.server 8000
# depois abra http://localhost:8000
```

---

## Como atualizar a lista de sistemas

Todo o conteúdo fica em **`sistemas.js`**. Não é preciso tocar no `index.html`.

Para **adicionar** um sistema, acrescente um objeto em `sistemas`:

```js
{
  id: "nome-interno",              // identificador estável
  nome: "Nome que aparece no card",
  categoria: "Nome da categoria",
  url: "https://usuario.github.io/repositorio/",
  descricao: "Uma linha sobre o que o sistema faz.",
  icone: "lupa",                   // ver a lista de ícones abaixo
  palavras: ["termo1", "termo2"]   // termos extras para a busca
}
```

A cor do quadro de ícone vem da **paleta por categoria**, definida logo no início do `sistemas.js`. O hub segue o design system do Sistema de Comunicações e Contatos: cada categoria tem sua cor — azul Processos, verde Comunicação, roxo Documentos, âmbar Prazos, ciano Pesquisa e rosa Escalas. Se você criar uma categoria nova, acrescente-a nesse bloco, senão o sistema cai no azul padrão.

Para **remover**, apague o objeto. Para **renomear**, edite `nome` e `categoria` — os contadores e os filtros se atualizam sozinhos.

### Ícones disponíveis

`fluxo` · `pessoas` · `selo` · `texto` · `relogio` · `arquivo` · `lupa` · `grade` · `local`

---

## O caso do sistema local

O sistema local **não é o nono item da lista** e fica fora da contagem. Ele é uma exceção: uma aplicação web que roda no seu próprio computador, em `localhost`.

Isso tem uma consequência prática — **o link só funciona na sua máquina**. Para qualquer outra pessoa que abrir o hub, o endereço não resolve. Por isso o card dele é marcado em âmbar, com um aviso explicando a limitação.

Preencha em `sistemas.js`, no bloco `local`:

```js
local: {
  visivel: true,
  nome: "Sistema local",
  descricao: "Aplicação web rodando no seu computador.",
  url: "http://localhost:8080",   // ajuste a porta conforme a sua instalação
  porta: "8080"
}
```

Use `visivel: false` para esconder esse card por completo.

---

## O que o hub **não** faz

É importante ter isso claro antes de apresentar a solução, porque define o que pode e o que não pode ser prometido:

**Não é login único.** Como a página é estática, não há servidor para autenticar ninguém. Cada sistema continua com o seu próprio acesso — ou sem acesso, como no GitHub Pages público. O hub é um *índice*, não um *portão*.

**Não embarca sistemas.** Ele não carrega os outros sistemas dentro dele (via iframe ou similar). Cada clique abre o sistema na sua própria aba. Além de mais simples, isso evita problemas de segurança: páginas modernas bloqueiam a incorporação de outros sites.

**Não resolve o sistema local para terceiros.** Já explicado acima.

**Depende da rede.** Os links apontam para o GitHub Pages, então é preciso estar online.

---

## Arquitetura

```
hub-sistemas/
├── index.html   estrutura, estilos e comportamento
├── sistemas.js  dados dos sistemas (o único arquivo para editar)
└── README.md    este documento
```

Sem dependências, sem build, sem servidor. A tipografia (Inter) vem do Google Fonts e é carregada via CDN; se a rede estiver indisponível, o navegador cai para a fonte do sistema.

---

## Acessibilidade

A busca ignora acentos e caixa alta (`certidoes`, `certidões` e `CERTIDÕES` encontram a mesma coisa). O atalho `/` foca a busca e `Esc` limpa. Todos os cards abrem em nova aba, têm rótulo para leitor de tela e são navegáveis por teclado. A página respeita as preferências de movimento reduzido e de maior contraste do sistema operacional.
