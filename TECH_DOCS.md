# Documentação Técnica

## Sumário

1. [Introdução](#introdução)
2. [Panorama Geral](#panorama-geral)
3. [Especificação dos Componentes](#especificação-dos-componentes)
   - [PasswordInputComponent](#passwordinputcomponent)
   - [PasswordValidatorComponent](#passwordvalidatorcomponent)
4. [Especificação das Telas](#especificação-das-telas)
   - [Tela de Login](#tela-de-login)
   - [Tela de Inscrição](#tela-de-inscrição)
6. [Considerações Finais](#considerações-finais)

## Introdução

Este documento visa especificar a implementação da aplicação web composta por duas telas principais: Login e Inscrição. 

A aplicação utiliza componentes customizados para gerenciar o input de senha e validação de senha, garantindo modularidade e reutilização de código.

## Panorama Geral

A aplicação possui duas páginas:

1. **Página de Login**: Permite que o usuário insira seu email e senha para acessar a aplicação.
2. **Página de Inscrição**: Permite que novos usuários se registrem, inserindo nome, email e senha, com validação de complexidade de senha.

## Especificação dos Componentes

### PasswordInputComponent

**Descrição:** Componente responsável por exibir um campo de entrada de senha com a funcionalidade de mostrar/ocultar a senha.

**Inputs:**
- `password` (string): Senha inserida pelo usuário.
- `label` (string): Etiqueta para o campo de senha. Campo opcional, com valor padrão de 'Password'.

**Outputs:**
- `passwordChange` (EventEmitter<string>): Evento emitido sempre que a senha for alterada.

**Código de Exemplo:**
```html
<app-password-input [(password)]="userPassword" [label]="Senha" />
```

### PasswordValidatorComponent

**Descrição:**
Componente responsável por validar a complexidade da senha e exibir os critérios de validação.

**Inputs:**
- `password` (string): Senha a ser validada.

**Outputs:**
- Nenhum.

**Código de Exemplo:**
```html
<app-password-validator [password]="userPassword" />
```

**Pontos de melhoria:**
- Adicionar configuração para definir parâmetros das validações.

## Especificação das Telas

### Tela de Login

**Componentes Utilizados:**
- `PasswordInputComponent`

**Descrição:**
A tela de login permite ao usuário inserir seu email e senha. A senha é gerenciada pelo componente `PasswordInputComponent`.

### Tela de Inscrição

**Componentes Utilizados:**
- `PasswordInputComponent`
- `PasswordValidatorComponent`

**Descrição:**
A tela de inscrição permite que novos usuários se registrem, inserindo e-mail, nome e senha. 

A senha é validada pelo componente `PasswordValidatorComponent` para garantir que atenda aos critérios de complexidade.

## Considerações Finais

Os componentes `PasswordInputComponent` e `PasswordValidatorComponent` foram projetados para serem reutilizáveis e modulares, facilitando a manutenção e expansão da aplicação.

Além disso, é importante notar que a inscrição e login são falsos.
