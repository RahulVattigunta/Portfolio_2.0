import type { Metadata } from 'next';
import { FaReact, FaAws, FaMoneyCheckAlt, FaExchangeAlt, FaCloud, FaAndroid, FaMicrochip, FaRaspberryPi, FaTasks, FaStripeS ,FaTerminal, FaGitAlt, FaNetworkWired, FaKey, FaApple} from "react-icons/fa";
import { FaJava } from 'react-icons/fa6';
import { SiSpringboot, SiMysql, SiTypescript, SiNextdotjs, SiChartdotjs, SiTailwindcss, SiAppwrite, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiSpring, SiPostman, SiHibernate, SiGithub, SiSwift, SiFirebase, SiXcode, SiDjango, SiReact, SiPython, SiScikitlearn,  SiStreamlit, SiPandas,  SiNumpy, SiVisualstudiocode, SiGit , SiFlask, SiPytorch, SiTensorflow, SiOpenai, SiGo, SiJavascript, SiHtml5, SiCss3, SiFlutter, SiFigma, SiFramer, } from "react-icons/si";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteMetadata = {
  title: 'Rahul Vattigunta - Portfolio',
  description: 'Professional portfolio showcasing full-stack development projects and skills',
  author: 'Rahul Vattigunta',
  siteUrl: 'https://RahulVattigunta.github.io/portfolio/',
  twitterHandle: '@rahul',
};

export const generateMetadata = (path: string): Metadata => {
  const currentUrl = `${siteMetadata.siteUrl}${basePath}${path}`;
  
  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
    authors: [{ name: siteMetadata.author }],
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: currentUrl,
      siteName: siteMetadata.title,
      type: 'website',
      images: [
        {
          url: `${currentUrl}/images/rahul2.png`,
          width: 1200,
          height: 630,
          alt: siteMetadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetadata.title,
      description: siteMetadata.description,
      creator: siteMetadata.twitterHandle,
      images: [`${currentUrl}/images/devika1.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(siteMetadata.siteUrl),
  };
}; 

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "PTC",
    location: "Boston, MA",
    type: "Full-time",
    date: "2024 - 2025",
    // description: "Built an event-driven data processing system using the PERN stack with WebSocket, improving real-time data processing. Optimized RESTful APIs with caching and load balancing for better reliability. Enhanced system architecture with AWS services while collaborating in an Agile environment.",
    skills: ["PostgreSQL", "Express", "React.js", "Node.js", "WebSocket", "AWS", "Agile"],
  },
  {
    title: "Application Development Associate",
    company: "Accenture",
    location: "Pune, IN",
    type: "Full-time",
    date: "2021 - 2022",
    // description: "Spearheaded the development of a microservices-based inventory system using Spring Boot, React.js, and MongoDB, improving stock accuracy and automating operations across multiple locations. Migrated backend services to Azure Kubernetes Service (AKS), reducing downtime and integrating Apache Kafka for real-time updates. Managed the entire software development lifecycle, delivering the project two weeks ahead of schedule while optimizing costs.",
    skills: ["Java", "Spring boot", "React", "Azure Kubernetes Service(AKS)", "MongoDB", "Kafka", "REST API", "Jenkins"],
  },
  {
    title: "Software Developer",
    company: "Sigma Infosolutions Ltd.",
    location: "Bangalore, IN",
    type: "Full-time",
    date: "2019 - 2021",
    // description: "Developed 3+ full-stack applications, improving scalability and engagement. Built an management web app with Spring Boot and MySQL, optimizing API performance. Designed a CRM dashboard using React.js, Redux, and MongoDB for efficient data handling. Architected an e-commerce backend with Node.js and PayPal integration, ensuring reliable transactions. Improved CI/CD pipelines with Jenkins and Docker while enhancing security with Spring Security and JUnit testing.",
    skills: ["Java", "Spring boot", "React", "Node.js", "Express", "AWS", "MySQL", "MongoDB", "Docker", "Jenkins"],
  },
];

export const education = [
  {
    title: "Master of Science in Computer Science",
    institution: "California State University Dominguez Hills",
    location: "Carson, CA",
    date: "2022 - 2024",
  },
  {
    title: "Bachelor of Engineering in Computer Science",
    institution: "Presidency University, IN",
    location: "Bengaluru, IN",
    date: "2017 - 2021",
  }
];

export const projects = [
  {
    id: 1,
    title: " SmartPrice AI - Mobile Price Predictor & Classifier",
    des: "A Streamlit-based ML app for real-time mobile price prediction and classification, featuring interactive inputs, instant feedback, and easy-to-understand metrics for all users.",
    img: "images/projects/project1.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },             // Python
      { icon: SiScikitlearn, color: "#F7931E" },        // Scikit-learn
      { icon: SiStreamlit, color: "#FF4B4B" },          // Streamlit
      { icon: SiPandas, color: "#150458" },             // Pandas
      { icon: SiNumpy, color: "#013243" },              // NumPy
      { icon: SiVisualstudiocode, color: "#007ACC" },   // VS Code
      { icon: SiGit, color: "#F05032" }                 // Git
    ],
    link: "https://github.com/RahulVattigunta/SmartPrice_AI",
  },
  {
    id: 2,
    title: "ChatGPT Proactive-Protection",
    des: "An AI-driven content moderation system that proactively detects and mitigates toxic online interactions in real time using transformer-based NLP models like GPT and BERT.",
    img: "images/projects/project2.png",
    icons: [
      { icon: SiNextdotjs, color: "#000000" },  // Next.js
      { icon: SiPython, color: "#3776AB" },             // Python
      { icon: SiTypescript, color: "#3178C6" },  // TypeScript
      { icon: SiNodedotjs, color: "#339933" },  // Node.js
      { icon: SiFlask, color: "#000000" },  
      { icon: SiPytorch, color: "#EE4C2C" },
      { icon: SiTensorflow, color: "#FF6F00" },  
      { icon: SiOpenai, color: "#412991" } ,
      { icon: SiExpress, color: "#000000" },  // Express.js (No official color, commonly represented in black)
      { icon: FaAws, color: "#FF9900" },  // Amazon Web Services (AWS)
      { icon: SiTailwindcss, color: "#38B2AC" },  // Tailwind CSS

    ],
    
    link: "https://github.com/RahulVattigunta/ChatGPT-Proactive-Protection-Against-Malicious-Engagements",
  },
  {
    id: 3,
    title: "LSTM Stock Price Prediction",
    des: "An LSTM-based stock prediction tool using historical Yahoo Finance data, built with TensorFlow and Matplotlib to visualize real vs. predicted prices.",
    img: "images/projects/project3.png",
    icons: [
      { icon: SiPython, color: "#3776AB" },             // Python
      { icon: SiTensorflow, color: "#FF6F00" }, 
      { icon: SiNumpy, color: "#013243" },   
      { icon: SiScikitlearn, color: "#F7931E" },  
    ],
    link: "https://github.com/RahulVattigunta/LSTM_Stock_Predictor",
  },
  {
    id: 4,
    title: "Go Neural Network",
    des: "A simple neural network in Go using Gonum, trained on the Iris dataset for flower classification with feedforward and backpropagation.",
    img: "images/projects/project4.png",
    icons: [
      { icon: SiGo, color: "#00ADD8" },               // Go (Golang)
      { icon: SiGithub, color: "#181717" },           // GitHub
      { icon: SiVisualstudiocode, color: "#007ACC" }, // VS Code
      { icon: FaTerminal, color: "#000000" },         // Terminal (for CLI)
      { icon: FaGitAlt, color: "#F05032" }            // Git
  ],
    link: "https://github.com/RahulVattigunta/Neural-Network-Go",
  },
  {
    id: 5,
    title: "Minimal Blockchain Project",
    des: " A lightweight blockchain built in Node.js with proof-of-work, P2P networking, wallet integration, and a web-based explorer UI for real-time transaction and block visualization.",
    img: "images/projects/project5.png",
    icons: [
      { icon: SiNodedotjs, color: "#339933" },         // Node.js
      { icon: SiJavascript, color: "#F7DF1E" },        // JavaScript
      { icon: SiHtml5, color: "#E34F26" },             // HTML
      { icon: SiCss3, color: "#1572B6" },              // CSS
      { icon: FaNetworkWired, color: "#000000" },      // P2P Networking
      { icon: FaKey, color: "#FFD700" }                // Cryptographic Wallet
    ],
    
    link: "https://github.com/RahulVattigunta/Blockchain_Project",
  },
  {
    id: 6,
    title: "MyAudi App Redesign - AR Feature Integration",
    des: "A redesigned MyAudi App with AR scanning to identify car parts in real time, featuring interactive manuals, videos, and an intuitive UI for a seamless user experience.",
    img: "images/projects/project6.png",
    icons: [
      
        { icon: SiReact, color: "#61DAFB" },               // React Native
        { icon: SiFlutter, color: "#02569B" },             // Flutter
        { icon: SiFirebase, color: "#FFCA28" },            // Firebase
        { icon: SiFigma, color: "#F24E1E" },               // Figma
        { icon: SiFramer, color: "#0055FF" },              // Framer
        { icon: FaAndroid, color: "#3DDC84" },             // ARCore (Android)
        { icon: FaApple, color: "#000000" }                // ARKit (iOS)
      ],
    
    link: "https://github.com/RahulVattigunta/Audi_App_Figma",
  },
];
