<h1>Conversor de Moedas Dinâmico</h1>  
Uma aplicação web interativa que permite a conversão de valores entre diferentes moedas e criptomoedas em tempo real. O projeto conta com uma interface moderna, responsiva e uma experiência de usuário imersiva.
 
<h2>🚀 Funcionalidades Principais</h2>
Conversão Multimoedas: Suporte para conversões entre Real Brasileiro (R$), Dólar Americano (US$), Euro (€), Libra Esterlina (£) e Bitcoin (₿).

Seleção Flexível (De/Para): Permite escolher livremente a moeda de origem e a moeda de destino.

Atualização Visual Dinâmica: Ao alterar as moedas nos menus, os nomes e as bandeiras dos países correspondentes mudam instantaneamente na tela.

Formatação Inteligente de Valores: Utiliza a API nativa do JavaScript (Intl.NumberFormat) para exibir os valores formatados perfeitamente de acordo com a moeda escolhida (ex: adicionando os símbolos e casas decimais corretos).

Suporte Especial para Cripto: Algoritmo dedicado para calcular e exibir frações exatas de Bitcoin (com até 8 casas decimais).

Interface Imersiva: Design moderno com um vídeo de fundo em loop focado no tema tecnológico/digital, card de conversão centralizado com efeitos de hover e active nos botões.

<h2>🛠️ Tecnologias Utilizadas</h2>
HTML5: Estruturação semântica da aplicação "(main, section, select, video)".

CSS3: Estilização moderna e layout flexível (Flexbox), reset global de estilos, responsividade para telas móveis e posicionamento fixo para o vídeo de background.

JavaScript (ES6): Lógica de programação responsável por:

Manipulação do DOM (captura de inputs e alteração de textos/imagens).

Escuta de eventos (addEventListener para cliques e mudanças de seleção).

Cálculos matemáticos de conversão baseados em taxas pré-definidas.
<br>

<h2>  📐 Como a Aplicação Funciona por Trás dos Panos</h2>
Entrada de Dados: O usuário digita o valor desejado e escolhe a moeda que possui e a moeda para a qual deseja converter.

Mudança de Interface: Assim que o usuário muda a moeda, o JavaScript intercepta a ação e atualiza o nome e o caminho da imagem da bandeira na tela.

Cálculo e Processamento: Ao clicar no botão "Converter", a função analisa os valores selecionados, faz a divisão matemática necessária com base na cotação e formata o resultado final com a pontuação monetária ideal de cada país.


