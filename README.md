# 🛒 Quicklist

Aplicação web simples para gerenciamento de listas de compras. Permite adicionar, marcar e remover itens de forma rápida e intuitiva.

## 📋 Funcionalidades

- **Adicionar itens** à lista via formulário
- **Marcar itens como concluídos** com checkbox (riscando o texto)
- **Remover itens** individualmente com botão de exclusão
- **Notificação de item removido** com nome do produto e opção de fechar
- **Alerta de campo vazio** ao tentar adicionar item sem texto
- Layout **responsivo** para mobile e desktop

## 🗂️ Estrutura do Projeto

```
quicklist/
├── index.html       # Estrutura da página
├── style.css        # Estilização
├── app.js           # Lógica da aplicação
└── assets/          # Imagens e ícones
    ├── arrow.png
    ├── Frame.svg
    ├── warning-circle-filled.svg
    └── delete-small.svg
```

## 🚀 Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/quicklist.git
   ```

2. Abra o arquivo `index.html` no navegador — não é necessário nenhum servidor ou instalação.

## 🛠️ Tecnologias

- HTML5 (com uso de `<template>` para criação dinâmica de itens)
- CSS3 (Flexbox, variáveis CSS, responsividade)
- JavaScript puro (vanilla JS, sem dependências)

## 📱 Responsividade

| Breakpoint | Largura do conteúdo |
|------------|---------------------|
| Mobile     | 327px               |
| Desktop    | 627px (≥ 720px)     |

## 💡 Como funciona

- Ao submeter o formulário, um novo `<li>` é criado a partir de um `<template>` HTML e inserido na lista.
- O checkbox alterna a classe `line-through` no item correspondente.
- Ao remover um item, uma notificação aparece com o nome do produto e some automaticamente após 3 segundos.
- Caso o campo esteja vazio ao submeter, um alerta é exibido por 3 segundos.
