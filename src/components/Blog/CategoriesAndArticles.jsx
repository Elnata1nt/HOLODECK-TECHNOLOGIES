// Botões de + e - para mostrar mais categorias e fechar
export const btnMore = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50px"
    height="50px"
    viewBox="0 0 24 24"
    className="stroke-current text-[#3c297a] transition-colors duration-300"
    style={{ fill: 'none' }} // Remove fill if you only want to apply stroke color
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      strokeWidth="1.5"
    ></path>
    <path d="M8 12H16" strokeWidth="1.5"></path>
    <path d="M12 16V8" strokeWidth="1.5"></path>
  </svg>
);

export const btnClose = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50px"
    height="50px"
    viewBox="0 0 24 24"
    className="stroke-current text-[#3c297a] transition-colors duration-300"
    style={{ fill: 'none' }} // Remove fill if you only want to apply stroke color
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      strokeWidth="1.5"
    ></path>
    <path d="M8 12H16" strokeWidth="1.5"></path>
  </svg>
);

// lista de categorias
export const listCategory = [
  { value: "artificial-intelligence" },
  { value: "digital-media" },
  { value: "gadgets" },
  { value: "cybersecurity" },
  { value: "internet-of-things" },
  { value: "mobile-technology" },
  { value: "software-development" },
  { value: "virtual-reality" },
  { value: "technology" },
  { value: "tech-industry-news" },
];

// Lista de artigos principais
export const articlesMainList = [
  {
    title: "O que vai mudar dramaticamente no mundo nos próximos 20 anos",
    content:
      "À medida que a tecnologia continua a evoluir a um ritmo acelerado, um dos fenômenos mais marcantes é a crescente importância das comunidades na configuração do futuro digital.",
    imgSrc: "https://www.napratica.org.br/wp-content/uploads/2018/07/profissoes_do_futuro-1024x683.jpg",
    link: "https://www.mundodigital.art.br/o-que-vai-mudar-dramaticamente-no-mundo-nos-proximos-20-anos/",
    author: "Mariana Costa",
    date_create: "10-02-2023",
    theme: "Futuro Digital"
  },
  {
    title: "O Impacto da Inteligência Artificial no Mercado de Trabalho",
    content:
      "Com o avanço da inteligência artificial, muitos setores estão passando por transformações significativas. Este artigo explora como a IA está mudando o mercado de trabalho e o que isso significa para os profissionais.",
    imgSrc: "https://neofeed.com.br/wp-content/uploads/2019/07/inteligencia-artificial-e-mercado-de-trabalho-1.jpg",
    link: "https://neofeed.com.br/experts/qual-o-impacto-da-inteligencia-artificial-no-mercado-de-trabalho/",
    author: "Lucas Almeida",
    date_create: "10-03-2024",
    theme: "Inteligência Artificial "
  },
  {
    title: "Como a Blockchain Está Transformando Indústrias",
    content:
      "A tecnologia blockchain está revolucionando diversas indústrias além das criptomoedas. Descubra como ela está sendo utilizada para garantir segurança e transparência em diferentes setores.",
    imgSrc: "https://www.estrategiasdeinversion.com/uploads/noticias_redaccion/Portada2/blockchain1.jpeg",
    link: "https://www.estrategiasdeinversion.com/analisis/bolsa-y-mercados/informes/blockchain-oportunidad-en-la-tecnologia-que-esta-n-505857",
    author: "Ana Paula Santos",
    date_create: "12-05-2024",
    theme: "Blockchain e Segurança"
  },
  {
    title: "A Evolução das Redes 5G e Seus Impactos",
    content:
      "Com a chegada das redes 5G, as comunicações móveis estão passando por uma grande transformação. Este artigo explora os avanços trazidos pelo 5G e como eles afetarão o cotidiano.",
    imgSrc: "https://economizador.net.br/wp-content/uploads/2023/06/top-view-smartphone-with-sim-cards-ethernet-cables.jpg",
    link: "https://economizador.net.br/evolucao-da-internet-1g-5g/",
    author: "Felipe Oliveira",
    date_create: "30-05-2024",
    theme: "Transformações Tecnológicas"
  }
];

export const btnSearch = (  <svg
  xmlns="http://www.w3.org/2000/svg"
  id="Isolation_Mode"
  data-name="Isolation Mode"
  viewBox="0 0 24 24"
  width="22"
  height="22"
  className="text-white"
>
  <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
</svg>  );