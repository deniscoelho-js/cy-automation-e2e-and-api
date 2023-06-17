# Cypress REST API sbr

<!-- <h1 align="center">
    <img alt="Layout Website" src="./cypress/images/cypress.png" width="100%" />
</h1> -->

## Projeto

Projeto desenvolvido para estudos de testes automatizados e2e e de API utilizando Cypress

## Funcionalidades

- Criar testes automatizados de interface gráfica
- Criar testes automatizados de API (com feedback visual no navegador)
- Testar APIs que necessitam um token de acesso
- Criar testes otimizados
- Salvar a sessão do usuário no navegador para posterior restauração
- Validar se a sessão do usuário ainda é válida e como lidar com isso quando a mesma é invalidada
- Fazer a limpeza e criação da massa de dados antes do teste começar
- Proteger dados sensíveis,senhas, tokens de acesso
- Organizar os testes e comandos customizados em diferentes "camadas" (API, CLI, GUI)
- Estruturar os testes pensando em pré-condições, ações e resultados esperados
- Gerar dados aleatórios para uso nos testes automatizados
- Habilitar funcionalidades experimentais do Cypress
- Executar comandos à nível de sistema operacional
- Testar a leitura de arquivos

## Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- [x] Cypress
- [x] Javascript
- [x] Docker
- [x] Facker
- [x] Mochajs
- [x] ChaiJs
- [x] Github Actions | CICD

## Instalação e uso

Clone o repositório

```bash
git clone https://github.com/deniscoelho-js/cy-automation-e2e-and-api.git

```

Siga os passos abaixo

```bash
# Instale as dependências
$ npm i

# Inicie o servidor
$ npx cypress open
```
