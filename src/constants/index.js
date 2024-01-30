import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  cmas,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "C++ Developer",
    icon: cmas,
    iconBg: "#383E56",
    date: "Marzo 2020 - Presente",
    points: [
      "Experto en programación en C++, con sólidos conocimientos en estructuras de datos y programación orientada a objetos.",
      "Destreza destacada en el análisis de algoritmos para optimizar el rendimiento de los programas.",
      "Amplia experiencia en el desarrollo de soluciones eficientes y robustas mediante C++.",
      "Comprometido con la excelencia técnica, aportando habilidades probadas en el diseño y ejecución de proyectos de programación.",
    ],
  },
  {
    title: "HTML, CSS Y JS Developer",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Abril 2021 - Presente",
    points: [
      "Desarrollo de aplicaciones web y móviles utilizando HTML, CSS y JavaScript.",
      "Habilidades sólidas en diseño responsive y garantía de compatibilidad entre navegadores.",
      "Colaborador eficaz en equipos multifuncionales para la entrega de productos de alta calidad.",
    ],
  },
  {
    title: "React Developer",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Junio 2022 - Presente",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaborando con equipos multifuncionales, incluidos diseñadores, gerentes de productos y otros desarrolladores para crear productos de alta calidad.",
      "Implementación de diseño responsive y garantía de compatibilidad entre navegadores.",
      "Participación en revisiones de código y proporcionar comentarios constructivos a otros desarrolladores.",
    ],
  },
  {
    title: "Full stack Developer",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Junio 2023 - Presente",
    points: [
      "Desarrollador con experienca en Node.js, React.js, MongoDB, Express.js, y otras tecnologías relacionadas",
      "Amplia experiencia en la implementación de soluciones robustas y escalables utilizando estas tecnologías modernas.",
      "Profundo conocimiento en la integración de bases de datos MongoDB y en la creación de API eficientes con Node.js y Express.js.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
