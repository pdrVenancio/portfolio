export type ProjectChallenges = {
  title: string;
  description: string;
  details?: string[];
};

export type ProjectDetail = {
  overview: string;
  role: string[];
  technologies: Record<string, string[]>;
  challenges: ProjectChallenges[];
};

export type ProjectSummary = {
  slug: string;
  title: string;
  summary: string;
  githubUrl: string;
  detailPath: string;
  detail: ProjectDetail;
};

export const projects: ProjectSummary[] = [
  {
    slug: "paduni",
    title: "Paduni",
    summary:
      "Solução para a Unifei que usa dados e IA para formar pares reais entre veteranos e calouros, garantindo afinidade no acompanhamento acadêmico.",
    githubUrl: "https://github.com/Brenovnc/TrabalhoFinal---PADUNI",
    detailPath: "/portfolio/projetos/paduni",
    detail: {
      overview:
        "O Paduni resolve o desafio da formação manual e aleatória de padrinhos e calouros na Unifei. Em vez de combinações imprevisíveis, a plataforma centraliza preferências, gostos e perfis comportamentais, conectando usuários por afinidades reais e aumentando o engajamento dos recém-chegados com a universidade.",
      role: [
        "Estruturei e desenvolvi a API utilizando Node.js e Express",
        "Modelei o banco de dados em PostgreSQL e mantive integrações com a biblioteca pg",
        "Implementei autenticação segura com bcrypt e JWT e construí os fluxos de cadastro, login e gerenciamento de usuários",
        "Projetei e automatizei o envio de e-mails e participei da definição da lógica de pareamento",
        "Organizei os dados e criei os endpoints necessários para suportar o algoritmo de matching",
      ],
      technologies: {
        "Back-end": ["Node.js", "Express" ],
        "Banco de dados": ["PostgreSQL (pg)"],
        "Segurança e autenticação": ["bcrypt", "jsonwebtoken"],
        "Infraestrutura e utilidades": ["nodemailer"],
        "Integração com IA": [
          "Hugging Face API (sentence-transformers/all-MiniLM-L6-v2)",
        ],
      },
      challenges: [
        {
          title: "Pareamento inteligente",
          description:
            "Integrar um modelo capaz de comparar afinidades e gerar pares mais compatíveis exigiu adotar IA para calcular similaridades semânticas entre os usuários.",
          details: [
            "Utilizei o modelo sentence-transformers/all-MiniLM-L6-v2 da Hugging Face para mapear interesses em vetores e medir proximidade entre perfis",
            "Gerei pares que consideram gostos e perfis comportamentais em vez de combinações aleatórias",
          ],
        },
        {
          title: "Envio automático de notificações",
          description:
            "Garantir que usuários fossem informados corretamente após o pareamento implicou montar um fluxo confiável de comunicação por e-mail.",
          details: [
            "Configurei o Nodemailer com autenticação e estrutura de mensagens consistentes",
            "Cuidei da confiabilidade do envio, tratando falhas e confirmando entregas",
          ],
        },
        {
          title: "Base segura e escalável",
          description:
            "Manter dados organizados e protegidos foi essencial para que o algoritmo funcionasse com segurança.",
          details: [
            "Estruturei o banco de dados com tabelas claras e relacionamentos preparados para o matching",
            "Priorizei a segurança das informações e a organização do código para facilitar futuras evoluções",
          ],
        },
      ],
    },
  },
  {
    slug: "relatorio-ad-hoc",
    title: "Relatório Ad Hoc – SpaceX Data",
    summary:
      "Aplicação flexível que transforma os dados da API da SpaceX em relatórios personalizados, aproximando pesquisa e análise com uma interface mais acessível.",
    githubUrl: "https://github.com/PedroNB10/bd2-project",
    detailPath: "/portfolio/projetos/relatorio-ad-hoc",
    detail: {
      overview:
        "O Relatório Ad Hoc – SpaceX Data oferece uma maneira de montar consultas dinâmicas sobre missões aeroespaciais sem a necessidade de escrever SQL diretamente. A solução é voltada para pesquisadores, divulgadores e estudantes que desejam montar dashboards e análises a partir de dados reais da SpaceX em uma camada visual acessível.",
      role: [
        "Construí a interface em React com TypeScript e componentes reutilizáveis para seleção dinâmica de tabelas e atributos",
        "Montei a visualização tabular dos resultados para facilitar a leitura dos relatórios",
        "Desenvolvi a API em Flask, modelando o banco com SQLAlchemy e integrando ao PostgreSQL",
        "Criei endpoints capazes de gerar relatórios com filtros avançados",
        "Estruturei o schema relacional, executei testes de carga e ajustei a performance",
      ],
      technologies: {
        "Front-end": ["React", "TypeScript", "Bootstrap"],
        "Back-end": ["Python", "Flask", "SQLAlchemy", "psycopg"],
        "Banco de dados": ["PostgreSQL"],
      },
      challenges: [
        {
          title: "Consultas dinâmicas e válidas",
          description:
            "Permitir que o usuário escolhesse tabelas, colunas e filtros exigiu criar uma estrutura que montasse consultas robustas sem expor SQL cru.",
          details: [
            "Construi um fluxo que seleciona dinamicamente tabelas e atributos com validações em runtime",
            "Implementei joins automáticos entre tabelas para evitar erros e consultas inválidas",
            "Cuidamos da performance para que consultas complexas continuassem responsivas",
          ],
        },
        {
          title: "Grafo de relacionamentos",
          description:
            "A lógica de grafos ajudou a conhecer quais tabelas podiam se conectar e quais caminhos eram os melhores para as junções.",
          details: [
            "Mapeei o relacionamento entre tabelas como um grafo para determinar conexões possíveis",
            "Identifiquei os caminhos de join mais diretos para evitar redundância",
            "O sistema também evita consultas inválidas ao validar se existe um caminho entre as tabelas selecionadas",
          ],
        },
        {
          title: "Experiência intuitiva",
          description:
            "Equilibrar alta flexibilidade com uma interface clara foi crucial para aproximar o público leigo do poder da análise de dados.",
          details: [
            "Construí componentes reutilizáveis que guiam o usuário sem sobrecarregar a tela",
            "Protegi o backend ao validar entradas e manter a experiência fluida",
          ],
        },
      ],
    },
  },
  {
    slug: "traveller",
    title: "Traveller",
    summary:
      "Marketplace de passagens com mapa interativo que destaca destinos e separa experiências entre administradores e usuários finais.",
    githubUrl: "https://github.com/Brenovnc/TrabalhoFinalWeb",
    detailPath: "/portfolio/projetos/traveller",
    detail: {
      overview:
        "Traveller torna a compra de passagens aérea mais visual ao combinar uma lista tradicional com um mapa interativo. Usuários exploram destinos diretamente no mapa, enquanto administradores gerenciam ofertas e histórico de compras em perfis distintos.",
      role: [
        "Desenvolvi toda a interface em React com Vite, focando em componentes dinâmicos e reutilizáveis",
        "Integrei a interface a serviços de dados e construí a navegação entre telas para usuário e administrador",
        "Implementei o mapa interativo para destacar destinos em tempo real",
        "Criei telas de listagem e acompanhamento de passagens",
        "Colaborei na definição da experiência do usuário para manter a navegação simples e eficiente",
      ],
      technologies: {
        "Front-end": ["React", "Vite", "Bootstrap"],
        "Outros conceitos": ["Consumo de APIs", "Componentização", "Gerenciamento de estado"],
      },
      challenges: [
        {
          title: "Mapa interativo funcional",
          description:
            "Integrar uma biblioteca de mapas e sincronizá-la com os dados das passagens foi o maior desafio visual do projeto.",
          details: [
            "Representamos visualmente destinos disponíveis no mapa com indicadores claros",
            "Garantimos interação fluida e responsiva entre o mapa e a lista de passagens",
            "Sincronizamos o mapa com as informações atualizadas de disponibilidade",
          ],
        },
        {
          title: "Experiência para dois perfis",
          description:
            "A interface precisava ser clara tanto para administradores quanto para usuários finais sem perder consistência.",
          details: [
            "Construí fluxos específicos para cada perfil mantendo identidade visual uniforme",
            "Organizei telas que facilitam a tomada de decisão ao comprar ou gerenciar passagens",
          ],
        },
      ],
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getProjectNeighbors = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return {};
  }

  const prev = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;

  return { prev, next };
};
