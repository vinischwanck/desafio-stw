# Como executar

Clone o repositório:

```bash
git clone https://github.com/vinischwanck/desafio-stw.git
```

Entre na pasta do projeto:

```bash
cd desafio-stw
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois, acesse no navegador:

```text
http://localhost:3000
```

<img width="1912" height="914" alt="image" src="https://github.com/user-attachments/assets/26893e1c-59fa-4930-a949-186fcab7e4aa" />


## Dashboard

**Dashboard de Monitoramento**

Projeto desenvolvido como parte de um teste técnico.

A ideia foi criar um dashboard para acompanhar algumas informações de uma máquina, como temperatura, RPM, tempo de operação e metas.

Também foi uma oportunidade para colocar em prática conhecimentos que já possuo em programação e aprender tecnologias que ainda não tinha utilizado.

# Tecnologias utilizadas

* Next.js
* React
* TypeScript
* Tailwind CSS

# O que foi desenvolvido

* Status da máquina
* Temperatura
* RPM
* Tempo de operação
* Variação dos dados durante a execução
* Organização das informações em um dashboard

# Como desenvolvi

Esse foi meu primeiro contato com as tecnologias utilizadas no projeto (React, TypeScript, Next.js e Tailwind CSS).

Meus conhecimentos práticos em programação são principalmente em Progress 4GL, no modelo procedural e voltado à criação de relatórios, e C#, que utilizo em alguns pontos do meu dia a dia no trabalho. Também já tive contato com HTML e CSS em alguns trabalhos da faculdade.

Por isso, utilizei principalmente meus conhecimentos de lógica de programação e consultei documentações oficiais, comunidades como Stack Overflow e sites como DevMedia.

Em alguns casos, utilizei funções e exemplos como referência para entender a lógica e depois adaptei o código para o que precisava no projeto. Por exemplo, primeiro consegui desenvolver a função para simular a temperatura e, depois, reaproveitei a mesma ideia para o RPM. O mesmo aconteceu com a lógica utilizada para obter os valores máximos.

Para os dados apresentados no dashboard, utilizei funções para simular a variação das informações da máquina durante a execução.

# Algumas decisões e aprendizados

Utilizei o tipo MachineStatus fornecido no desafio para organizar as informações da máquina.

Também separei as funções em arquivos e pastas diferentes do page.tsx, buscando deixar o código mais organizado.

Para desenvolver a função de simulação da temperatura, consultei a documentação oficial do React sobre o useState: https://pt-br.react.dev/reference/react/useState
# Como executar

Clone o repositório:

```bash
git clone https://github.com/vinischwanck/desafio-stw.git
```

Entre na pasta do projeto:

```bash
cd desafio-stw
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois, acesse no navegador:

```text
http://localhost:3000
```

<img width="1912" height="914" alt="image" src="https://github.com/user-attachments/assets/26893e1c-59fa-4930-a949-186fcab7e4aa" />


## Dashboard

**Dashboard de Monitoramento**

Projeto desenvolvido como parte de um teste técnico.

A ideia foi criar um dashboard para acompanhar algumas informações de uma máquina, como temperatura, RPM, tempo de operação e metas.

Também foi uma oportunidade para colocar em prática conhecimentos que já possuo em programação e aprender tecnologias que ainda não tinha utilizado.

# Tecnologias utilizadas

* Next.js
* React
* TypeScript
* Tailwind CSS

# O que foi desenvolvido

* Status da máquina
* Temperatura
* RPM
* Tempo de operação
* Variação dos dados durante a execução
* Organização das informações em um dashboard

# Como desenvolvi

Esse foi meu primeiro contato com as tecnologias utilizadas no projeto (React, TypeScript, Next.js e Tailwind CSS).

Meus conhecimentos práticos em programação são principalmente em Progress 4GL, no modelo procedural e voltado à criação de relatórios, e C#, que utilizo em alguns pontos do meu dia a dia no trabalho. Também já tive contato com HTML e CSS em alguns trabalhos da faculdade.

Por isso, utilizei principalmente meus conhecimentos de lógica de programação e consultei documentações oficiais, comunidades como Stack Overflow e sites como DevMedia.

Em alguns casos, utilizei funções e exemplos como referência para entender a lógica e depois adaptei o código para o que precisava no projeto. Por exemplo, primeiro consegui desenvolver a função para simular a temperatura e, depois, reaproveitei a mesma ideia para o RPM. O mesmo aconteceu com a lógica utilizada para obter os valores máximos.

Para os dados apresentados no dashboard, utilizei funções para simular a variação das informações da máquina durante a execução.

# Algumas decisões e aprendizados

Utilizei o tipo MachineStatus fornecido no desafio para organizar as informações da máquina.

Também separei as funções em arquivos e pastas diferentes do page.tsx, buscando deixar o código mais organizado.

Para desenvolver a função de simulação da temperatura, consultei a documentação oficial do React sobre o useState: https://pt-br.react.dev/reference/react/useState
Pelo que fui entendendo, o useState parece ser uma das peças principais do React, mas não consegui entender totalmente a funcionalidade, mas entendi que o useState é utilizado para guardar valores que podem mudar durante a execução da aplicação.


Nesse caso, ele foi importante para armazenar o valor atual da temperatura e permitir que esse valor fosse atualizado durante a simulação. Quando o estado é atualizado, o React consegue refletir essa mudança na interface.

Depois de entender essa lógica para a temperatura, utilizei uma ideia semelhante para fazer a simulação do RPM e outras partes que precisavam de valores dinâmicos.

Utilizei a propriedade {children} no componente InfoCard para conseguir reutilizar o mesmo componente com conteúdos diferentes.

# Referências utilizadas

## React

https://pt-br.react.dev/learn

## Tailwind CSS

https://tailwindcss.com/
