**Teste Front-End Cakto - João Pedro Sanchez de Almeida Santos**

**Decisões Técnicas**

O framework escolhido foi Next.js além de ser um diferencial para o teste técnico, esse framework nos traz uma gama de facilidades para o desenvolvimento, com suporte para as últimas funcionalidades do React 19 como:
RSC, novos hooks, etc. Para estilização realzeia escolha do tailwindcss pela facilidade e rapidez que ele traz para o desenvolvimento, e fiz o uso da lib shadcn/ui para os componentes de UI, o que me permitiu focar mais na lógica do que na construção dos componentes.
Para a parte de testes, optei por usar o Vitest e o React Testing Library, que são ferramentas amplamente utilizadas e oferecem uma boa integração com o React.

Utilizei a biblioteca Decimal.js para lidar com os cálculos de preços e taxas, garantindo precisão e evitando problemas comuns de arredondamento em JavaScript.

Para a arquitetura do projeto optei por uma arquitetura baseada em features, onde cada funcionaliadde tem sua pasta com componentes, hooks, layouts, server actions e etc. garantindo uma melhor organização e escalabilidade do projeto.
Recursos reutilizáveis ficam na pasta raiz do projeto, como componentes do shadcn/ui, hooks genéricos, etc.

**Transparência de Uso de IA (Obrigatório)**

- A IA foi utilizada para auxiliar na criação da micro-interação do botão de PIX.
- Utilizei também para auxilio na configuração do tooling (prettier, eslint, vitest, etc)
- **Não** utilizei a IA para montagem da função de calculo de taxas, mas usei para revisar se o funcionamento da mesma estava coreto de acordo com o enunciado da questão.
- Utilizei a IA para auxilio na nomeclatura de variáveis, funções e componentes, buscando sempre nomes mais descritivos e claros para facilitar a leitura do código.

**Regras de Negócio (Obrigatório)**

Para garantir que o comprador pague sempre o preço fixo do produto, implementei uma função de calculo que calcula as taxas fixas (3,99% e 4,99%) em separado e não soma essas taxas ao preço final do produto.
Dessa forma consigo apresentar ao usuário final ta taxa cackto no sumário da compra, porém com o valor final do produto sem as taxas.

Porém gostaria de destacar que no meu entendimento, a taxa de 2% para cada parcela extra é repassada para o comprador, neste caso em compras parceladas, eu realizei o calculo da taxa e somei ao produto final,
mas não somei a taxa fixa de 3,99% e 4,99% ao valor final do produto, garantindo que o comprador pague o preço fixo do produto mais as taxas de parcelamento.

Eu realizei essa lógica de calculo com base no próprio enunciado elaborado por vocês:

![Imagem do Enunciado](./image.png)

**Como Executar**

Instalação das dependências:
```bash
yarn install
```

Rodar o projeto em ambiente de desenvolvimento:
```bash
yarn dev
```

Rodar os testes:
```bash
yarn test
```

**Resposta Bônus**

Para aumentar a conversão de vendas no checkout, eu listaria produtos relacionados ao que ele está comprando, sejam do próprio produtor ou de outro produtor, também salvaria os dados pessoais como e-mail, para que
em caso de desistência pudessemos mandar um e-mail para cliente oferecendo uma condição especial para o cliente finalizar a compra.
