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
  promineo,
  zara,
  daiso,
  csuf,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
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
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sales Associate",
    company_name: "Daiso",
    icon: daiso,
    iconBg: "#E6DEDD",
    date: "April 2014 - March 2020",
    points: [
      "Provide customer service to 40+ people on a daily basis.",
      "Maintain an organized and fully stocked sales floor to reach six-digit monthly sales goal.",
      "Assist store manager with administrative tasks such as making phone calls, sending emails, and scanning documents.",
      "Update and file delivery and inventory logs with the utmost accuracy.",
    ],
  },
  {
    title: "B.A. Business Administration Program",
    company_name: "California State University, Fullerton",
    icon: csuf,
    iconBg: "#383E56",
    date: "August 2014 - May 2017",
    points: [
      "Enrolled in the B.A. Business Administration program with a concentration in Entertainment and Tourism Management.",
    ],
  },
  {
    title: "Cashier",
    company_name: "Zara",
    icon: zara,
    iconBg: "#E6DEDD",
    date: "August 2017 - Feb 2022",
    points: [
      "Process sales transactions quickly and effectively while adhering to company policies.",
      "Maintain adequate cash denominations and reconcile cash drawers.",
      "Assist closing manager with the cash register closing procedure and cash balance.",
      "Troubleshoot POS systems, TGT  system, card readers, and other devices when necessary.",
    ],
  },
  {
    title: "Front End Software Development Program",
    company_name: "PromineoTech - El Camino College",
    icon: promineo,
    iconBg: "#383E56",
    date: "March 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "SINT Associate",
    company_name: "Zara",
    icon: zara,
    iconBg: "#E6DEDD",
    date: "March 2022 - Present",
    points: [
      "Co-lead integrated digital platform, in which store inventory helps fulfill online demand, generating an additional daily revenue of $6,000+ for the store.",
      "Use RFID system and devices to complete e-commerce orders to achieve faster deliveries and ensure store continues to produce the highest volume of online sales in the region.",
      "Coordinate with other departments and teams in the replenishment and transferring of 700+ units of merchandise to ensure accurate stock levels.",
      "Communicate with managers and regional supervisors of improvements to the SINT application and the integrated RFID system.",
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
    name: "Pokemon API",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Item Reviews",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
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
