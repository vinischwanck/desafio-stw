Dashboard de Monitoramento

Dashboard desenvolvido como parte de um teste técnico, com o objetivo de apresentar informações de monitoramento de uma máquina de forma visual e organizada.

Tecnologias utilizadas
Next.js
React
TypeScript
Tailwind CSS
Funcionalidades
Exibição do status da máquina
Monitoramento de temperatura
Monitoramento de RPM
Exibição do tempo de operação
Indicadores de informações da máquina
Gráfico de metas
Atualização dos dados simulados
Layout responsivo
Estrutura dos dados

Foi utilizado o tipo MachineStatus fornecido no desafio para estruturar as informações relacionadas à máquina.

A utilização desse tipo permite manter os dados organizados e facilita a utilização das informações pelos componentes do dashboard.

Dados simulados

Como o projeto não possui uma API ou fonte de dados real, foram utilizadas funções para simular os valores apresentados no dashboard.

Entre os dados simulados estão:

Temperatura
RPM
Tempo de operação

Os valores são atualizados durante a execução da aplicação para representar um cenário de monitoramento em tempo real.

Decisões técnicas
Componentização

Os elementos do dashboard foram organizados de forma a facilitar a manutenção e a reutilização dos componentes.

TypeScript

O TypeScript foi utilizado para definir os tipos dos dados e trazer maior segurança durante o desenvolvimento.

Tailwind CSS

O Tailwind CSS foi utilizado para estilização e construção do layout, permitindo trabalhar com responsividade e organização dos elementos diretamente através das classes.

Responsividade

O layout foi desenvolvido considerando diferentes tamanhos de tela, buscando manter a organização das informações tanto em telas maiores quanto menores.

Como executar

Clone o repositório:

git clone https://github.com/vinischwanck/desafio-stw.git

Entre na pasta do projeto:

cd desafio-stw

Instale as dependências:

npm install

Execute o projeto:

npm run dev

Depois, acesse no navegador:

http://localhost:3000
Screenshots
