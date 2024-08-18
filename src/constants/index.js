import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  git,
  docker,
  incube,
  isec,
  elmas,
  python,
  vue,
  android,
  arduino,
  c,
  cp,
  java,
  maven,
  linux,
  mysql,
  postgre,
  opencv,
  r,
  raspi,
  tensorflow,
  numpy,
} from "../assets";


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "App developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Developer",
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
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "OpenCV ",
    icon: opencv,
  },
  // {
  //   name: "R",
  //   icon: r,
  // },
  // {
  //   name: "Raspi",
  //   icon: raspi,
  // },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Android",
    icon: android,
  },
  // {
  //   name: "Arduino",
  //   icon: arduino,
  // },
  {
    name: "C++",
    icon: cp,
  },
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "Maven",
  //   icon: maven,
  // },
  // {
  //   name: "Linux",
  //   icon: linux,
  // },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  // },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  // {
  //   name: "Numpy",
  //   icon: numpy,
  // },
];

const experiences = [
  {
    title: "Software Engineer intern",
    company_name: "Incube Venture Studios",
    icon: incube,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Implementing RESTful apis using Java and Quarkus",
      "learning to Apply clean architecture in the backend",
      "Implementing Frontend applications using VueJs",
      "Getting prepared to Participate in large scale projects",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "ELMAS",
    icon: elmas,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Implemented UML and ER diagrams using ms Visio to make a use-case diagram for a coupon redemption platform.",
      "Optimized and normalized address records database (3 million+ records) in mySQL",
      "I Conducted web scraping to extract relevant data regarding addresses in Istanbul using BeautifulSoup.",
    ],
  },
  {
    title: "Application Development intern",
    company_name: "ISEC",
    icon: isec,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Oct 2022",
    points: [
      "Contributed to Developing Angular applications for client use.",
      "enhanced functionality and efficiency based on user feedback",
      "Improved the frontend UI for the company's website",
    ],
  },

];



const projects = [
  {
    name: " Classification of Freshness and Healthiness of Food using Computer Vision",
    description:
      "Deep learning model to classify the freshness (VGG16) and healthiness (EfficientNet-B0) of fruits and vegetables.",
    tags: [
      {
        name: "VGG16",
        color: "blue-text-gradient",
      },
      {
        name: "EfficientNet",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "red-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Hamza-Sallam/FV_CLF",
  },
  {
    name: "Product Restful api",
    description:
      "Implemented a RESTful API for a simple Product Management System where Products can be created, read, updated, and deleted.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Quarkus",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://github.com/Hamza-Sallam/products-api",
  },
  {
    name: "Smart door lock with face recognition",
    description:
      "Developed a smart door lock system using face recognition technology using Raspberry pi and opencv python.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "RaspBerry pi",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Hamza-Sallam/Face-Lock-Project",
  },
  {
    name: "ML regression model for salary prediction",
    description:
      "Built a machine learning regression model to predict salaries based on various features.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "Numpy and Pandas",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Hamza-Sallam/SalaryPrediction",
  },
  {
    name: " NLP machine translation model",
    description:
      "An example-based machine translation model that translates sentences from Turkish English and Turkish-Azerbaijani based on a corpus of 30k sentences.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NLTK",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Hamza-Sallam/EBMT",
  },
  {
    name: "Android application for university form",
    description:
      " Android application developed in Android Studio using Java for the university to fill in students’ information and save it in a database",
    tags: [
      {
        name: "Andriod studio",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Java and XML",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Hamza-Sallam/BilgiForm-App",
  },
  {
    name: "Newspaper Database",
    description:
      "A functional newspaper database implemented in python with pyMySQL plugin",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "PyMySQL",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Hamza-Sallam/SQL_project",
  },
  {
    name: "NIM Game",
    description:
      "a UI game built in C++ that uses logic and dynamic programming",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Hamza-Sallam/Nim-Game",
  },
];

export { services, technologies, experiences, projects };
