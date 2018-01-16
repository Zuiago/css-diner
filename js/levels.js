var levels = [
  {
    helpTitle : "Selecione os elementos por seu tipo",
    selectorName : "Type Selector",
    doThis : "Selecione os pratos",
    selector : "plate",
    syntax : "A",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. O tipo se refere ao type da tag, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são todos tipos de elementos diferentes.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>.',
      '<strong>p</strong> seleciona todos os elementos <tag>p</tag>.',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "Selecione os bentos",
    selector : "bento",
    syntax : "A",
    helpTitle : "Seleciona elementos por seu tipo",
    selectorName : "Type Selector",
    help : "Selecione todos os elementos do tipo <strong>A</strong>. O tipo se refere ao type da tag, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são todos tipos de elementos diferentes.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>.',
      '<strong>p</strong> seleciona todos os elementos <tag>p</tag>.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "Selecione o prato contornado",
    selector : "#fancy",
    selectorName: "ID Selector",
    helpTitle: "Seleciona um elemento com um ID",
    syntax: "#id",
    help : 'Seleciona o elemento com o <strong>id</strong> específico. Você também pode combinar o seletor por ID com um Type seletor.',
    examples : [
      '<strong>#cool</strong> Seleciona qualquer elemento com <strong>id="cool"</strong>',
      '<strong>ul#long</strong> Seleciona <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "Seleciona um elemento dentro de outro elemento",
    selectorName : "Descendant Selector",
    doThis : "Selecione a maçã dentro do prato",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "Seleciona todos os elementos <strong>B</strong> dentro de <strong>A</strong>. <strong>B</strong> é um descendente porque ele está dentro de um outro elemento.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> seleciona todos os elementos <tag>strong</tag> que estão dentro de qualquer elemento <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> seleciona qualquer elemento <tag>span</tag> que estão dentro do elemento com <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "Selecione o picles do prato contornado.",
    selector : "#fancy pickle",
    helpTitle: "Combine Descendant & ID Selectors",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Você pode combinar qualquer seletor com descendent selector.',
    examples : [
      '<strong>#cool&nbsp;span</strong> seleciona todos os elementos <tag>span</tag> que estão dentro do elemento com <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "Selecione as maçãs pequenas",
    selector : ".small",
    selectorName: "Class Selector",
    helpTitle: "Sleeciona elementos por sua classe declarada",
    syntax: ".classname",
    help : 'Class selector seleciona todos os elementos com determinado atributo class. Elementos podem apenas ter um ID, porém muitas classes.',
    examples : [
    '<strong>.neato</strong> seleciona todos os elementos com <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "Selecione as laranjas pequenas",
    selector : "orange.small",
    helpTitle: "Combine Class Selector",
    syntax: "A.className",
    help : 'Voce pode combinar class selector com outros seletores, como o type selector.',
    examples : [
      '<strong>ul.important</strong> selecina todos os elementos <tag>ul</tag> que possuem <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selecina todos os elementos com <strong>id="big"</strong> que também possuem <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "Selecione as maçãs em bentos",
    selector : "bento orange.small",
    syntax: "Relembrar é viver!",
    helpTitle: "Você consegui...",
    help : 'Combine o que você estudou nos níveis anteriores para solucionar esse!',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "Selecione todos os pratos nos bentos",
    selector : "plate,bento",
    selectorName : "Comma Combinator",
    helpTitle: "Combine selectors, with... commas!",
    syntax : "A, B",
    help : 'Isto seleciona todos os elementos <strong>A</strong> e <strong>B</strong>. Você pode combinar qualquer seletor deste modo, e voce pode especificar mais de dois.',
    examples: [
    '<strong>p, .fun</strong> seleciona todos os elementos <tag>p</tag>, assim como todos os elementos com <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> seleciona todos os elementos <tag>a</tag>, <tag>p</tag> e <tag>div</tag>'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "Selecione tudo, absolutamento tudo!!",
    selector : "*",
    selectorName:  "The Universal Selector",
    helpTitle: "Voce pode selecionar tudo!",
    syntax : "*",
    help : 'Voce pode selecionar todos os elementos com o universal selector! ',
    examples : [
      '<strong>p *</strong> seleciona qualquer elemento dentro de todos os elementos <tag>p</tag>.',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "Selecione tudo nos pratos",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combine the Universal Selector",
    help : 'Isto seleciona todos os elementos dentro de <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> seleciona cada elemento dentro de todos os elementos <tag>p</tag>.',
      '<strong>ul.fancy *</strong> seleciona cada elemento dentro de todos os elementos <tag>ul class="fancy"</tag>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "Selecione cada maçã que está proxíma a um prato",
    selector : "plate + apple",
    helpTitle: "Seleciona um elemento que está diretamente seguido de outro elemento",
    selectorName: "Adjacent Sibling Selector",
    syntax : "A + B",
    help : "Isto seleciona todos os elementos <strong>B</strong> que estão diretamente seguidos de <strong>A</strong>. Elmentos que seguem um outro elemento são chamados de siblings(irmãos). Eles estão no mesmo nível ou profundidade. <br/><br/> Na marcação HTML para este nível, elementos que possuem a mesma identação são irmãos.",
    examples : [
      '<strong>p + .intro</strong> seleciona cada elemento com <strong>class="intro"</strong> que está diretamente seguindo um elemento <tag>p</tag>',
      '<strong>div + a</strong> seleciona cada elemento <tag>a</tag> que está diretamente seguindo um elemento <tag>div</tag>'
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "General Sibling Selector",
    helpTitle: "Seleciona elementos que seguem outro elemento",
    syntax: "A ~ B",
    doThis : "Selecione os picles ao lado do bento",
    selector : "bento ~ pickle",
    help : "Você pode selecionar todos os irmãos de um elemento que o segue. Isto é como o Adjacent Selector (A + B) exceto que obtém todos os seguintes elementos em vez de um.",
    examples : [
      '<strong>A ~ B</strong> seleciona todos os elementos <strong>B</strong> que seguem o elemento <strong>A</strong>'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "Child Selector",
    syntax: "A > B&nbsp;",
    doThis : "Selecione a maçã diretamente no prato",
    selector : "plate > apple",
    helpTitle: "Seleciona o filho direto de um elemento",
    help : "Voçe pode selecionar elementos que são filhos diretos de outro elemento. O elemento filho é qualquer elemento que é alinhado diretamente em outro elemento. <br><br>Elementos que são alinhados mais profundamente do que os chamados elementos descendentes.",
    examples : [
      '<strong>A > B</strong> seleciona todos os elementos <strong>B</strong> que são diretamente filhos do elemento <strong>A</strong>'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "First Child Pseudo-selector",
    helpTitle: "Seleciona o primeiro elemento filho dentro de outro elemento",
    doThis : "Selecione a larange no topo",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "Voce pode selecionar o primeiro elemento filho. O elemento filho é qualquer elemento que é alinhado diretamente em outro elemento. Você pode combinar esse pseudo-selector com outros seletores.",
    examples : [
      '<strong>:first-child</strong> seleciona todos os primeiros elementos.',
      '<strong>p:first-child</strong> seleciona todos os primeiros elementos <tag>p</tag>.',
      '<strong>div p:first-child</strong> seleciona todos os primeiros elementos <tag>p</tag> que estão em uma <tag>div</tag>.'
    ],
    boardMarkup :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Only Child Pseudo-selector",
    helpTitle: "Seleciona um elemento que é o único elemento dentro de outro.",
    doThis : "Selecione a maçã e o picles no prato",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "Você pode selecionar qualquer elemento que seja o único elemento dentro de outro.",
    examples : [
      '<strong>span:only-child</strong> seleciona o elemento<tag>span</tag> que é o único filho de algum outro elemento.',
      '<strong>ul li:only-child</strong> seleciona o único elemento <tag>li</tag> que está em um<tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Last Child Pseudo-selector",
    helpTitle: "Seleciona o último elemento dentro de outro elemento",
    doThis : "Selecione a maçã pequena e o picles",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "Você pode usar esse seletor para selecionar um elemeneto que é o último elemento filho dentro de outro elemento. <br><br>Pro Tip &rarr; Em casos onde há apenas um elemento, esse elemento conta como o first-child, only-child e last-child!",
    examples : [
      '<strong>:last-child</strong> seleciona todos os elementos last-child.',
      '<strong>span:last-child</strong> seleciona todos os elementos last-child <tag>span</tag>.',
      '<strong>ul li:last-child</strong> seleciona o último elemento <tag>li</tag> dentro de qualquer<tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "Nth Child Pseudo-selector",
    helpTitle: "Seleciona um elemento por sua ordem em outro elemento",
    doThis : "Selecione o terceiro prato",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Seleciona o <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) elemento filho em outro elemento.",
    examples : [
      '<strong>:nth-child(8)</strong> seleciona cada elemento que é o oitavo filho de outro elemento.',
      '<strong>div p:nth-child(2)</strong> seleciona o segunto elemento <strong>p</strong> em cada <strong>div</strong>',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
//   {
//     selectorName: "Nth Last Child Selector",
//     helpTitle: "Seleciona um elemento por sua ordem em outro elemento, contando da direita para esquerda",
//     doThis : "Selecione o primeiro bento",
//     selector : "bento:nth-last-child(3)",
//     syntax: ":nth-last-child(A)",
//     help : "Seleciona o filho pela parte inferior do pai. É parecido com nth-child, mas conta do final!",
//     examples : [
//       '<strong>:nth-last-child(2)</strong> seleciona todos os seguntos elementos filhos do final.'
//     ],
//     boardMarkup: `
//     <plate/>
//     <bento/>
//     <plate>
//       <orange/>
//       <orange/>
//       <orange/>
//     </plate>
//     <bento/>
//     `
//   },
//   {
//     selectorName: "First of Type Selector",
//     helpTitle: "Seleciona o primeiro elemento de um tipo específico",
//     doThis : "Selecione a primeira maçã",
//     selector : "apple:first-of-type",
//     syntax: ":first-of-type",
//     help : "Seleciona o primeiro elemento do seu tipo, dentro de outro elemento.",
//     examples : [
//       '<strong>span:first-of-type</strong> seleciona o primeiro elemento <tag>span</tag> em qualquer elemento.'
//     ],
//     boardMarkup: `
//     <orange class="small"/>
//     <apple/>
//     <apple class="small"/>
//     <apple/>
//     <apple class="small"/>
//     <plate>
//       <orange class="small"/>
//       <orange/>
//     </plate>
//     `
//   },
//   {
//     selectorName: "Nth of Type Selector",
//     doThis: "Selecione todos os pratos pares (divisíveis por 2)",
//     selector: "plate:nth-of-type(even)",
//     syntax: ":nth-of-type(A)",
//     help: "Seleciona um elemento específico baseado no seu tipo e ordem em outro componente - instâncias pares(even) ou ímpares deste elemento.",
//     examples: [
//       '<strong>div:nth-of-type(2)</strong> seleciona a segunda instância de uma div.',
//       '<strong>.example:nth-of-type(odd)</strong> seleciona todas as instancias ímpares de um example class.'
// ],
//     boardMarkup : `
//     <plate/>
//     <plate/>
//     <plate/>
//     <plate/>
//     <plate id="fancy"/>
//     <plate/>
//     `
//   },
//   {
//     selectorName: "Nth-of-type Selector with Formula",
//     doThis: "Selecione o segundo prato, começando do terceiro",
//     selector: "plate:nth-of-type(2n+3)",
//     syntax: ":nth-of-type(An+B)",
//     help: "A formula nth-of-type seleciona cada elemento nth, começando a contagem na instância específica deste elemento.",
//     examples: [
//       '<strong>span:nth-of-type(6n+2)</strong> seleciona cada sexta instância de <tag>span</tag>, começando (e incluindo) a sengunda instância.'
//     ],
//     boardMarkup : `
//     <plate/>
//     <plate>
//       <pickle class="small" />
//     </plate>
//     <plate>
//       <apple class="small" />
//     </plate>
//     <plate/>
//     <plate>
//       <apple />
//     </plate>
//     <plate/>
//     `
//   },
//   {
//     selectorName: "Only of Type Selector",
//     helpTitle: "Seleciona os elementos que são os únicos de seu tipo dentro do elemento pai",
//     selector : "apple:only-of-type",
//     syntax: ":only-of-type",
//     doThis : "Selecione a maçã no meio do prato",
//     help : "Seleciona o único elemento de seu tipo dentro de outro elemento.",
//     examples : [
//       '<strong>p span:only-of-type</strong> seleciona um <tag>span</tag> dentro de qualquer <tag>p</tag> se ele for o único <tag>span</tag> presente.'
//     ],
//     boardMarkup: `
//     <plate id="fancy">
//       <apple class="small" />
//       <apple />
//     </plate>
//     <plate>
//       <apple class="small" />
//     </plate>
//     <plate>
//       <pickle />
//     </plate>
//     `
//   },
//   {
//     selectorName: "Last of Type Selector",
//     helpTitle: "Seleciona o último elemento de um tipo específico",
//     doThis : "Selecione as últimas maçãs e laranjas",
//     selector : ".small:last-of-type",
//     syntax: ":last-of-type",
//     help : "Seleciona cada último elemento desse tipo dentro de outro elemento. Lembre-se tipo se refere ao tipo da tag, então <tag>p</tag> e <tag>span</tag> são diferentes tipos. <br><br> Pergunto-me se é assim que o último dinossauro foi selecionado antes de extinção.",
//     examples : [
//       '<strong>div:last-of-type</strong> seleciona a últim <tag>div</tag> em cada elemento.',
//       '<strong>p span:last-of-type</strong> seleciona o último <tag>span</tag> em cada elemento <tag>p</tag>.'
//     ],
//     boardMarkup : `
//     <orange class="small"/>
//     <orange class="small" />
//     <pickle />
//     <pickle />
//     <apple class="small" />
//     <apple class="small" />
//     `
//   },
//   {
//     selectorName: "Empty Selector",
//     helpTitle: "Seleciona elementos que não tem filhos",
//     doThis : "Selecione os bents vazios",
//     selector : "bento:empty",
//     syntax: ":empty",
//     help : "Seleciona elementos que não possuem outros elementos dentro deles.",
//     examples : [
//       '<strong>div:empty</strong> seleciona todos os elementos <tag>div</tag> vazios.'
//     ],
//     boardMarkup:`
//     <bento/>
//     <bento>
//       <pickle class="small"/>
//     </bento>
//     <plate/>
//     <bento/>`
//   },
//   {
//     selectorName: "Negation Pseudo-class",
//     helpTitle: "Seleciona todos os elementos que não correspondem ao seletor de negação",
//     doThis : "Selecione a maior maçã",
//     selector : "apple:not(.small)",
//     syntax: ":not(X)",
//     help : 'Você pode usar isso para selecionar todos os elementos que não correspondem ao seletor <strong>"X"</strong>.',
//     examples : [
//       '<strong>:not(#fancy)</strong> seleciona todos os elementos que não tem <strong>id="fancy"</strong>.',
//       '<strong>div:not(:first-child)</strong> seleciona cada <tag>div</tag> que não é first child.',
//       '<strong>:not(.big, .medium)</strong> seleciona todos os elementos que não possuem <strong>class="big"</strong> ou <strong>class="medium"</strong>.'
//     ],
//     boardMarkup: `
//     <plate id="fancy">
//       <apple class="small" />
//     </plate>
//     <plate>
//       <apple />
//     </plate>
//     <apple />
//     <plate>
//       <orange class="small" />
//     </plate>
//     <pickle class="small" />
//     `
//   },
//   {
//     selectorName: "Attribute Selector",
//     helpTitle: "Seleciona todos os elementos que possuem um atributo específico",
//     doThis : "Selecione os itens para alguém",
//     selector : "[for]",
//     syntax: "[attribute]",
//     help : 'Atributos aparecem dentro de uma tag de um elemento, exemplo: <tag>span attribute="value"</tag>. Um atributo nem sempre tem um valor, pode ser vazio!',
//     examples : [
//       '<strong>a[href]</strong> seleciona todos os elementos <tag>a</tag> que possuem um atributo <strong>href="anything"</strong>.',
//       '<strong>[type]</strong> seleciona todos os elementos que possuem o atributo <strong>type="anything"</strong>.'
//     ],
//     boardMarkup:`
//     <bento><apple class="small"/></bento>
//     <apple for="Ethan"/>
//     <plate for="Alice"><pickle/></plate>
//     <bento for="Clara"><orange/></bento>
//     <pickle/>`
//   },
//   {
//     selectorName: "Attribute Selector",
//     helpTitle: "Seleciona todos os elementos que possuem um atributo específico",
//     doThis : "Selecione os pratos para alguém",
//     selector : "plate[for]",
//     syntax: "A[attribute]",
//     help : "Combine o attribute selector com outro selector (como a tag name selector)",
//     examples : [
//       '<strong>[value]</strong> selecione todos elementos que possuem o atributo <strong>value="anything"</strong>.',
//       '<strong>a[href]</strong> selecione todos elementos <tag>a</tag> que possuem o atributo <strong>href="anything"</strong>.',
//       '<strong>input[disabled]</strong> selecione todos elementos <tag>input</tag> que possuem o atributo <strong>disabled</strong>'
//     ],
//     boardMarkup:`
//     <plate for="Sarah"><pickle/></plate>
//     <plate for="Luke"><apple/></plate>
//     <plate/>
//     <bento for="Steve"><orange/></bento>
//     `
//   },
//   {
//     selectorName: "Attribute Value Selector",
//     helpTitle: "Seleciona todos os elementos que possuem um valor de atributo específico",
//     doThis : "Selecione a comida da Vitaly",
//     selector : "[for=Vitaly]",
//     syntax: '[attribute="value"]',
//     help : "Attribute Value Selectors são case sensitive, cada caractere precisa exatamente corresponder.",
//     examples : [
//       '<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'
//     ],
//     boardMarkup:`
//     <apple for="Alexei" />
//     <bento for="Albina"><apple /></bento>
//     <bento for="Vitaly"><orange/></bento>
//     <pickle/>
//     `
//   },
//   {
//     selectorName: "Attribute Starts With Selector",
//     helpTitle: "Seleciona todos elementos com um valor de atributo que começa com caracteres específicos",
//     doThis : "Selecione os itens para para os nomes que começam com 'Sa'",
//     selector : '[for^="Sa"]',
//     syntax: '[attribute^="value"]',
//     help : "Você pode usar aspas entre os valores no seletor, ou não, é opcional!",
//     examples : [
//       '<strong>.toy[category^="Swim"]</strong> seleciona elementos com a class <strong>toy</strong> e também <strong>category="Swimwear"</strong> ou <strong>category="Swimming"</strong>.'
//     ],
//     boardMarkup: `
//     <plate for="Sam"><pickle/></plate>
//     <bento for="Sarah"><apple class="small"/></bento>
//     <bento for="Mary"><orange/></bento>
//     `
//   },
//   {
//     selectorName: "Attribute Ends With Selector",
//     helpTitle: "Seleciona todos elementos com um valor de atributo que termina com caracteres específicos",
//     doThis : "Selecione os itens para os nomes que terminam em 'ato'",
//     selector : '[for$="ato"]',
//     syntax: '[attribute$="value"]',
//     help : '',
//     examples : [
//       '<strong>img[src$=".jpg"]</strong> selecione todas as imagens que terminam com <strong>.jpg</strong>.',
//     ],
//     boardMarkup:`
//     <apple class="small"/>
//     <bento for="Hayato"><pickle/></bento>
//     <apple for="Ryota"></apple>
//     <plate for="Minato"><orange/></plate>
//     <pickle class="small"/>
//     `
//   },
//   {
//     selectorName: "Attribute Wildcard Selector",
//     helpTitle: "Seleciona todos elementos com o valor de atributo que contém caracteres específicos em qualquer lugar",
//     syntax: '[attribute*="value"]',
//     doThis : "Selecione as comidas para os nomes que contém 'obb'",
//     selector : '[for*="obb"]',
//     help : 'Um seletor útil se você pode identificar um padrão comum em <strong>class</strong>, <strong>href</strong> ou atributos <strong>src</strong>.',
//     examples : [
//       '<strong>img[src*="/thumbnails/"]</strong> seleciona todos elementos de imagem que mostra imagens de uma pasta chamada "thumbnails".',
//       '<strong>[class*="heading"]</strong> seleciona todos elementos que contém "heading" em sua class, como <strong>class="main-heading"</strong> e <strong>class="sub-heading"</strong>'
//     ],
//     boardMarkup:`
//     <bento for="Robbie"><apple /></bento>
//     <bento for="Timmy"><pickle /></bento>
//     <bento for="Bobby"><orange /></bento>
//     `
//   }
];
