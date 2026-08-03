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
    slug: "pulsar-investimentos",
    title: "Pulsar Investimentos - Alertas de Mercado em Tempo Real",
    summary:
      "Sistema de alertas financeiros orientado a eventos que monitora ativos da B3 via yFinance e dispara notificações personalizadas por cliente usando Apache Pulsar, com detecção tanto de regras pontuais de preço quanto de padrões temporais (CEP).",
    githubUrl: "https://github.com/pdrVenancio/pulsar-investimentos",
    detailPath: "/portfolio/projetos/pulsar-investimentos",
    detail: {
      overview:
        "O Pulsar Investimentos monitora preços de ativos financeiros em tempo real e envia alertas específicos por cliente, sem depender de um banco de dados: todo o estado é mantido nos próprios tópicos do Apache Pulsar. O sistema suporta dois modos de alerta - regras pontuais de preço (ex: 'avise quando PETR4 passar de R$40') via Pulsar Functions deployadas dinamicamente por cliente, e detecção de padrões temporais (quedas ou altas consecutivas, queda percentual em uma janela de tempo) via um worker de Complex Event Processing.",
      role: [
        "Projetei a arquitetura orientada a eventos do zero, decidindo eliminar o banco de dados em favor de manter o estado nos tópicos Pulsar",
        "Desenvolvi a API em FastAPI responsável por criar/remover assinaturas e fazer deploy de Pulsar Functions em tempo real via Admin REST API",
        "Implementei o ingestor que consulta o yFinance e compartilha uma única task de polling por ativo entre todos os clientes assinantes",
        "Construí o CEP Worker em Python nativo para detecção de padrões temporais, após esbarrar em limitações do protocolo Kafka-on-Pulsar ao tentar usar Flink",
        "Desenvolvi o frontend em React com TypeScript, com interface de alternância entre os dois modos de alerta",
        "Resolvi múltiplos problemas de ambiente Docker e conectividade entre serviços",
        "Documentei a arquitetura, tópicos e fluxos de teste via Postman/WebSocket no README",
      ],
      technologies: {
        "Front-end": ["React", "TypeScript", "Vite"],
        "Back-end": ["Python", "FastAPI", "yFinance"],
        "Streaming/Mensageria": ["Apache Pulsar", "Pulsar Functions", "Pulsar Admin REST API"],
        "Infraestrutura": ["Docker", "Docker Compose"],
      },
      challenges: [
        {
          title: "Arquitetura sem banco de dados",
          description:
            "Decidi eliminar o banco de dados da arquitetura, mantendo o estado de assinaturas e regras apenas em memória e nos tópicos do Pulsar, simplificando o sistema e reduzindo pontos de falha.",
          details: [
            "Simplifiquei a identidade dos usuários para UUIDs gerados em tempo de assinatura",
            "Escopei conscientemente a recuperação de falhas para manter o projeto focado no fluxo principal",
            "Modelei os tópicos Pulsar como a única fonte de verdade do estado do sistema",
          ],
        },
        {
          title: "Detecção de padrões temporais (CEP)",
          description:
            "A ideia inicial era usar Flink para o processamento de eventos complexos, mas limitações do protocolo Kafka-on-Pulsar exigiram uma reimplementação.",
          details: [
            "Identifiquei as limitações do protocolo Kafka-on-Pulsar que inviabilizavam a abordagem original com Flink",
            "Reimplementei o CEP Worker como um serviço Python nativo, mantendo a detecção de quedas/altas consecutivas e quedas percentuais em janela de tempo",
            "Mantive a compatibilidade dos alertas gerados com o restante do pipeline de mensageria",
          ],
        },
        {
          title: "Deploy dinâmico de Pulsar Functions por cliente",
          description:
            "Cada assinatura pontual de um cliente precisa de sua própria Pulsar Function, deployada e removida dinamicamente conforme assinaturas são criadas ou canceladas.",
          details: [
            "Implementei rotas na API que fazem deploy e remoção de Pulsar Functions via Admin REST API em tempo real",
            "Criei rotas de debug que expõem o status de execução da função e os estágios internos de processamento (recebimento, filtro de ativo, comparação, alerta)",
            "Garanti que o ingestor compartilhe o polling de um mesmo ativo entre múltiplos clientes, evitando chamadas redundantes ao yFinance",
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
