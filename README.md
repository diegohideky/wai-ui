# Wai-Ui

Este projeto foi desenvolvido com [Angular CLI](https://github.com/angular/angular-cli) versão 1.4.2.

## Descrição

Este projeto tem como objetivo realizar todas as necessidades para a parte de Front-end do software da WAI.
É estabelecida um conexão com o [WAI API](https://github.com/diegohideky/wai-api), que deve ser baixo e rodado em http://localhost:3000

## Ambiente Dev

Rode `ng serve` para iniciar o servidor de dev. Abra seu navegador em `http://localhost:4200/`. A aplicação vai recarregar automaticamente se você modificar qualquer arquivo.

## Gerar novo componente

Rode `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Rode `ng build` para contruir o projeto. O construção dos artifacts serão guardadas no diretório `dist/`. Use o comando `-prod` para construir em produção.

## Rodando testes unitários

Rode `ng test` para executar testes unitários via [Karma](https://karma-runner.github.io).

## Rodando testes end-to-end

Rode `ng e2e` para executar testes end-to-end via [Protractor](http://www.protractortest.org/).
Antes de rodar os testes tenha certeza que vocês está rodando o app via `ng serve`.

## Ajudas futuras

Para ter mais ajuda com Angular CLI use `ng help` ou verifique o [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Observações

Sempre que atualizar ou baixar este projeto rode `npm install` para atualizar as dependências. Dependências antigas, erradas ou a falte de, podem comprometer o funcionamento da aplicação.
