const posts = [
  {
    id: 1,
    title: "Mercado de Trabalho Tech em Alta",
    excerpt: "Profissionais de tecnologia seguem em alta demanda globalmente, com foco em IA e segurança.",
    date: "21 Out 2025",
    category: "Career", // ajustado
    featured: true,
    image: "https://picsum.photos/800/400?random=1",
    content: "Conteúdo completo do artigo sobre o mercado de trabalho tech em alta, incluindo tendências, salários e oportunidades globais."
  },
  {
    id: 2,
    title: "Novas Tendências em Desenvolvimento Web",
    excerpt: "Frameworks JavaScript continuam evoluindo e dominando o mercado de front-end.",
    date: "18 Out 2025",
    category: "Tech", // ajustado
    featured: false,
    image: "https://picsum.photos/800/400?random=2",
    content: "Conteúdo completo detalhando novas ferramentas e frameworks em desenvolvimento web, dicas e melhores práticas."
  },
  {
    id: 3,
    title: "Trabalhar Remotamente: Dicas e Ferramentas",
    excerpt: "Veja como organizar seu ambiente de trabalho e manter produtividade de casa.",
    date: "15 Out 2025",
    category: "Home Office", // já estava correto
    featured: true,
    image: "https://picsum.photos/800/400?random=3",
    content: "Artigo completo sobre como trabalhar remotamente com eficiência, usando ferramentas de comunicação e produtividade."
  },
  {
    id: 4,
    title: "O Futuro do Emprego com IA",
    excerpt: "A automação inteligente está mudando a forma como trabalhamos — e criando novas funções.",
    date: "12 Out 2025",
    category: "Tech", // ajustado
    featured: false,
    image: "https://picsum.photos/800/400?random=4",
    content: "Análise detalhada sobre o impacto da inteligência artificial no mercado de trabalho, novas funções e tendências futuras."
  },
  {
  id: 5,
  title: "Como Aprender React Mais Rápido",
  excerpt: "Estratégias práticas para acelerar seu aprendizado em React sem perder tempo.",
  date: "10 Out 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=5",
  content: "Guia completo com foco em prática, projetos reais e entendimento de conceitos fundamentais do React."
},
{
  id: 6,
  title: "Como Montar um Setup de Home Office Eficiente",
  excerpt: "Um bom ambiente de trabalho impacta diretamente na produtividade.",
  date: "08 Out 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=6",
  content: "Dicas sobre ergonomia, iluminação, equipamentos e organização para um home office funcional."
},
{
  id: 7,
  title: "Soft Skills Mais Valorizadas em TI",
  excerpt: "Não é só código: habilidades comportamentais fazem diferença na carreira.",
  date: "05 Out 2025",
  category: "Career",
  featured: true,
  image: "https://picsum.photos/800/400?random=7",
  content: "Comunicação, trabalho em equipe e adaptabilidade são cada vez mais exigidos no mercado tech."
},
{
  id: 8,
  title: "O Que é API e Como Funciona na Prática",
  excerpt: "Entenda de forma simples como APIs conectam sistemas.",
  date: "02 Out 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=8",
  content: "Explicação direta sobre requisições, endpoints e uso de APIs no dia a dia do desenvolvimento."
},
{
  id: 9,
  title: "Como Evitar Distrações no Home Office",
  excerpt: "Trabalhar de casa exige disciplina e controle de foco.",
  date: "30 Set 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=9",
  content: "Técnicas para manter foco, reduzir interrupções e melhorar a produtividade diária."
},
{
  id: 10,
  title: "Como se Preparar para Entrevistas em TI",
  excerpt: "Saiba como se destacar em processos seletivos na área tech.",
  date: "28 Set 2025",
  category: "Career",
  featured: false,
  image: "https://picsum.photos/800/400?random=10",
  content: "Dicas sobre portfólio, testes técnicos e comportamento durante entrevistas."
},
{
  id: 11,
  title: "Clean Code: Por Que Isso Importa",
  excerpt: "Código limpo facilita manutenção e colaboração.",
  date: "25 Set 2025",
  category: "Tech",
  featured: true,
  image: "https://picsum.photos/800/400?random=11",
  content: "Boas práticas de organização, nomenclatura e estruturação de código."
},
{
  id: 12,
  title: "Rotina Produtiva para Desenvolvedores",
  excerpt: "Organizar o dia pode aumentar sua eficiência.",
  date: "22 Set 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=12",
  content: "Métodos como Pomodoro, planejamento semanal e pausas estratégicas."
},
{
  id: 13,
  title: "Freelancer ou CLT: Qual Escolher?",
  excerpt: "Entenda vantagens e desvantagens de cada modelo.",
  date: "20 Set 2025",
  category: "Career",
  featured: false,
  image: "https://picsum.photos/800/400?random=13",
  content: "Comparação entre estabilidade, ganhos e liberdade profissional."
},
{
  id: 14,
  title: "Git e Versionamento na Prática",
  excerpt: "Controle de versão é essencial no desenvolvimento moderno.",
  date: "18 Set 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=14",
  content: "Uso de commits, branches e colaboração em equipe com Git."
},
{
  id: 15,
  title: "Como Funciona o Event Loop no JavaScript",
  excerpt: "Entenda o coração assíncrono do JavaScript de forma simples.",
  date: "16 Set 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=15",
  content: "Explicação prática sobre call stack, callbacks, promises e o funcionamento do event loop."
},
{
  id: 16,
  title: "Como Criar um Portfólio que Contrata",
  excerpt: "Seu portfólio pode ser decisivo para conseguir uma vaga.",
  date: "14 Set 2025",
  category: "Career",
  featured: true,
  image: "https://picsum.photos/800/400?random=16",
  content: "Dicas sobre projetos, organização e apresentação para atrair recrutadores."
},
{
  id: 17,
  title: "Ferramentas Essenciais para Home Office",
  excerpt: "Apps que ajudam a manter organização e produtividade.",
  date: "12 Set 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=17",
  content: "Lista de ferramentas para comunicação, gestão de tarefas e foco."
},
{
  id: 18,
  title: "O Que é TypeScript e Por Que Usar",
  excerpt: "Tipagem estática pode evitar muitos bugs.",
  date: "10 Set 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=18",
  content: "Introdução ao TypeScript, vantagens e como começar no dia a dia."
},
{
  id: 19,
  title: "Como Negociar Salário em TI",
  excerpt: "Saiba quanto pedir e como argumentar.",
  date: "08 Set 2025",
  category: "Career",
  featured: false,
  image: "https://picsum.photos/800/400?random=19",
  content: "Estratégias práticas para negociação salarial baseada em mercado."
},
{
  id: 20,
  title: "Como Criar uma Rotina de Deep Work",
  excerpt: "Foco profundo gera mais resultado em menos tempo.",
  date: "06 Set 2025",
  category: "Home Office",
  featured: true,
  image: "https://picsum.photos/800/400?random=20",
  content: "Como aplicar deep work no dia a dia e eliminar distrações."
},
{
  id: 21,
  title: "Diferença entre Front-end e Back-end",
  excerpt: "Entenda os papéis no desenvolvimento web.",
  date: "04 Set 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=21",
  content: "Explicação clara das responsabilidades e tecnologias de cada área."
},
{
  id: 22,
  title: "Como se Destacar no LinkedIn",
  excerpt: "Seu perfil pode ser sua vitrine profissional.",
  date: "02 Set 2025",
  category: "Career",
  featured: false,
  image: "https://picsum.photos/800/400?random=22",
  content: "Otimização de perfil, conteúdo e networking."
},
{
  id: 23,
  title: "Como Organizar Seu Dia Trabalhando de Casa",
  excerpt: "Disciplina é a chave para produtividade.",
  date: "30 Ago 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=23",
  content: "Planejamento diário e definição de prioridades."
},
{
  id: 24,
  title: "O Que é REST API",
  excerpt: "Arquitetura padrão para comunicação entre sistemas.",
  date: "28 Ago 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=24",
  content: "Princípios REST e exemplos práticos."
},
{
  id: 25,
  title: "Como Lidar com Rejeição em Entrevistas",
  excerpt: "Rejeição faz parte do processo.",
  date: "26 Ago 2025",
  category: "Career",
  featured: false,
  image: "https://picsum.photos/800/400?random=25",
  content: "Como aprender com feedbacks e melhorar continuamente."
},
{
  id: 26,
  title: "Ergonomia no Home Office",
  excerpt: "Evite dores e problemas físicos trabalhando melhor.",
  date: "24 Ago 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=26",
  content: "Posição correta, cadeira ideal e hábitos saudáveis."
},
{
  id: 27,
  title: "O Que é Node.js",
  excerpt: "JavaScript também no backend.",
  date: "22 Ago 2025",
  category: "Tech",
  featured: true,
  image: "https://picsum.photos/800/400?random=27",
  content: "Como funciona o Node e onde ele é usado."
},
{
  id: 28,
  title: "Como Evoluir Rápido na Carreira Dev",
  excerpt: "Consistência e prática são fundamentais.",
  date: "20 Ago 2025",
  category: "Career",
  featured: false,
  image: "https://picsum.photos/800/400?random=28",
  content: "Plano de evolução contínua para desenvolvedores."
},
{
  id: 29,
  title: "Como Evitar Burnout no Home Office",
  excerpt: "Trabalhar demais também é um problema.",
  date: "18 Ago 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=29",
  content: "Equilíbrio entre vida pessoal e trabalho."
},
{
  id: 30,
  title: "Diferença entre SQL e NoSQL",
  excerpt: "Escolha o banco certo para seu projeto.",
  date: "16 Ago 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=30",
  content: "Comparação entre bancos relacionais e não relacionais."
},
{
  id: 31,
  title: "Networking na Área de TI",
  excerpt: "Conexões abrem portas.",
  date: "14 Ago 2025",
  category: "Career",
  featured: false,
  image: "https://picsum.photos/800/400?random=31",
  content: "Como construir uma rede profissional forte."
},
{
  id: 32,
  title: "Como Criar um Espaço Minimalista",
  excerpt: "Menos distração, mais foco.",
  date: "12 Ago 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=32",
  content: "Organização e redução de estímulos visuais."
},
{
  id: 33,
  title: "O Que é Docker",
  excerpt: "Padronize ambientes de desenvolvimento.",
  date: "10 Ago 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=33",
  content: "Containers e como usar no dia a dia."
},
{
  id: 34,
  title: "Como Criar um Currículo para TI",
  excerpt: "Menos é mais quando bem estruturado.",
  date: "08 Ago 2025",
  category: "Career",
  featured: true,
  image: "https://picsum.photos/800/400?random=34",
  content: "Formato ideal e o que incluir."
},
{
  id: 35,
  title: "Como Manter Foco no Trabalho Remoto",
  excerpt: "Ambiente influencia sua produtividade.",
  date: "06 Ago 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=35",
  content: "Técnicas para manter concentração."
},
{
  id: 36,
  title: "O Que é CI/CD",
  excerpt: "Automação no desenvolvimento moderno.",
  date: "04 Ago 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=36",
  content: "Integração e entrega contínua na prática."
},
{
  id: 37,
  title: "Como Escolher Sua Área em TI",
  excerpt: "Front, back ou dados?",
  date: "02 Ago 2025",
  category: "Career",
  featured: false,
  image: "https://picsum.photos/800/400?random=37",
  content: "Guia para decidir sua especialização."
},
{
  id: 38,
  title: "Rotina Matinal Produtiva",
  excerpt: "Comece o dia com mais energia.",
  date: "31 Jul 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=38",
  content: "Hábitos que aumentam produtividade."
},
{
  id: 39,
  title: "O Que é GraphQL",
  excerpt: "Alternativa moderna ao REST.",
  date: "29 Jul 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=39",
  content: "Consultas flexíveis e eficientes."
},
{
  id: 40,
  title: "Como Pedir Feedback no Trabalho",
  excerpt: "Feedback acelera crescimento.",
  date: "27 Jul 2025",
  category: "Career",
  featured: false,
  image: "https://picsum.photos/800/400?random=40",
  content: "Como solicitar e aplicar feedback."
},
{
  id: 41,
  title: "Como Criar Limites no Home Office",
  excerpt: "Separe vida pessoal e profissional.",
  date: "25 Jul 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=41",
  content: "Dicas para evitar sobrecarga."
},
{
  id: 42,
  title: "O Que é JWT",
  excerpt: "Autenticação segura em aplicações.",
  date: "23 Jul 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=42",
  content: "Como funciona autenticação com tokens."
},
{
  id: 43,
  title: "Como Crescer Dentro da Empresa",
  excerpt: "Promoções exigem estratégia.",
  date: "21 Jul 2025",
  category: "Career",
  featured: false,
  image: "https://picsum.photos/800/400?random=43",
  content: "Proatividade e entrega de valor."
},
{
  id: 44,
  title: "Como Criar Hábitos Produtivos",
  excerpt: "Consistência é mais importante que motivação.",
  date: "19 Jul 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=44",
  content: "Formação de hábitos no dia a dia."
},
{
  id: 45,
  title: "O Que é Microservices",
  excerpt: "Arquitetura escalável.",
  date: "17 Jul 2025",
  category: "Tech",
  featured: true,
  image: "https://picsum.photos/800/400?random=45",
  content: "Divisão de sistemas em serviços independentes."
},
{
  id: 46,
  title: "Como Trabalhar para o Exterior",
  excerpt: "Ganhar em moeda forte é possível.",
  date: "15 Jul 2025",
  category: "Career",
  featured: false,
  image: "https://picsum.photos/800/400?random=46",
  content: "Passos para conseguir vagas internacionais."
},
{
  id: 47,
  title: "Como Melhorar Seu Setup",
  excerpt: "Pequenos ajustes fazem diferença.",
  date: "13 Jul 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=47",
  content: "Upgrade de equipamentos e conforto."
},
{
  id: 48,
  title: "O Que é WebSocket",
  excerpt: "Comunicação em tempo real.",
  date: "11 Jul 2025",
  category: "Tech",
  featured: false,
  image: "https://picsum.photos/800/400?random=48",
  content: "Como funciona comunicação bidirecional."
},
{
  id: 49,
  title: "Como Se Tornar Sênior",
  excerpt: "Não é só tempo de experiência.",
  date: "09 Jul 2025",
  category: "Career",
  featured: false,
  image: "https://picsum.photos/800/400?random=49",
  content: "Mentalidade e responsabilidade."
},
{
  id: 50,
  title: "Como Organizar Tarefas Diárias",
  excerpt: "Clareza aumenta produtividade.",
  date: "07 Jul 2025",
  category: "Home Office",
  featured: false,
  image: "https://picsum.photos/800/400?random=50",
  content: "Uso de listas e priorização."
}
];

export default posts;
