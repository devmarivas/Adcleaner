# AdCleaner

Sistema de sanitização e validação de cadastros de anunciantes, construído em JavaScript puro (vanilla JS).

## O problema que resolve

Em qualquer sistema que recebe dados via formulário, informações chegam "sujas": espaços em branco acidentais, capitalização inconsistente, campos mal formatados. Esses problemas quebram buscas, relatórios e comparações no banco de dados.

O AdCleaner simula a camada de tratamento de dados que normalmente fica entre o formulário e o banco de dados — limpando, padronizando e validando cada cadastro antes de seguir adiante no fluxo.

## Funcionalidades

- **Sanitização** — remove espaços extras e padroniza capitalização de nome, email e senha
- **Conversão de dados** — transforma categorias de string separada por vírgula em array estruturado
- **Validação de regras de negócio** — verifica nome, email e senha contra critérios mínimos, retornando lista detalhada de erros
- **Análise de performance** — classifica anúncios como escalados ou não, com base em tempo no ar e impressões
- **Relatório consolidado** — processa uma lista completa de cadastros e exibe o resultado formatado

## Conceitos técnicos aplicados

- Arrow functions
- Métodos de string (`trim`, `toLowerCase`, `split`, `includes`)
- Métodos de array (`forEach`, `map`)
- Composição de funções (uma função orquestrando outras)
- Separação de responsabilidades

## Como rodar

\`\`\`bash
node index.js
\`\`\`

## Exemplo de saída

\`\`\`
Cadastro: napoleao
Validação: Inválido
Erros: Senha muito curta
Status do anúncio: Escalado
-------------------
\`\`\`

## Próximos passos

- Validação de email com expressão regular
- Persistência dos dados em banco (PostgreSQL)
- API REST para receber cadastros via HTTP