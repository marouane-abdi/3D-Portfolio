import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    python,
    java,
    django,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    footy,
    upwork,
    minstery,
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
      title: "Web Scraper",
      icon: mobile,
    },
    {
      title: "Data Analytics",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
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
      name: "java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "django",
      icon: django,
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
      title: "Data Analytics , Web Scrapper",
      company_name: "FootyAmigo",
      icon: footy,
      iconBg: "#383E56",
      date: "March 2023 - Jun 2023",
      points: [
        "Scraped sports odds across various platforms (NFL, soccer, NBA) from OddsChecker.com, circumventing Cloudflare.",
        "Implemented arbitrage algorithms to identify and execute profitable betting opportunities.",
        "Developed a custom data pipeline to automate the extraction, transformation, and loading (ETL) process of betting odds, significantly reducing manual effort and increasing operational efficiency.",
        "Collaborated with a cross-functional team to refine betting algorithms, contributing to a substantial increase in successful arbitrage opportunities.",
      ],
    },
    {
      title: "Data Scrapper",
      company_name: "Upwork",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "April 2023 – July 2023",
      points: [
        "Extracted detailed real estate sale data from Redfin.com, including dates, buyer names, and locations, using Beautiful Soup and Requests, requiring a VPN.",
        "Developed a sophisticated scraping solution to navigate and mine data efficiently from highly dynamic auction listings.",
        "Implemented advanced data cleansing and normalization techniques to ensure the integrity and usability of the extracted data for market analysis.",
        "Compiled and presented insights in a structured format, enabling the real estate agent to make informed decisions on property investments and valuation strategies.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Ministry of Economy and Finance",
      icon: minstery,
      iconBg: "#383E56",
      date: "Jun 2022 - Sept 2023",
      points: [
        "Designed and deployed an advanced ASP.NET web application for importing, validating, cleaning, and analyzing Excel data, including the integration of sophisticated algorithms for statistical and financial calculations to derive relevant insights.",
        "Engineered a robust data processing framework within the ASP.NET environment to handle large volumes of financial data with high precision and efficiency.",
        "Implemented custom validation rules to ensure the integrity and accuracy of imported datasets, significantly reducing errors in financial analysis.",
        "Developed intuitive data visualization tools within the application, enabling users to easily interpret complex financial trends and patterns.",
      ],
    },
    {
      title: "Data Analytics for a real estate agent",
      company_name: "Upwork",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Present",
      points: [
        "Developed a comprehensive web scraping solution to extract key information from Realtors.com, targeting real estate agents' names, email addresses, physical addresses, and mobile phone numbers directly through the API.",
        "Implemented advanced techniques to bypass JWT token authentication, ensuring seamless data extraction without detection, using Requests and Selenium with undetected_chrome_driver, compatible with Chrome version 114.",
        "Applied sophisticated data cleaning and normalization processes to ensure the usability of the scraped data for marketing and networking purposes.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He really has a passion to do the job right and what we appreciated most about him was his honesty and work ethic to go the extra mile and complete the task. He seems to have only one way of approaching jobs and thats getting it done the right way. We will look to hire Marouane again for future projects.",
      name: "Daniel Nejo",
      designation: "CEO",
      company: "FootyAmigo",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      testimonial:
        "It was a pleasure working with Marouane on this project. He's a very talented coder and is very knowledgable in Google sheets. He was able to meet our expectations and complete the job on time. What we liked most was his eagerness to make certain the job was completed to our spec's and that we were completely satisfied with the work. And we were very pleased.",
      name: "Brandon Lee",
      designation: "Trader",
      company: "MIC Partners",
      image: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
      testimonial:
        "As usual, perfectly executed, on time and great communication. I highly recommend Marouane. He's a great freelancer to work with, always a pleasure Marouane!",
      name: "Charlie Fry",
      designation: "Founder",
      company: "Charlie Net",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Cricket Match Insights: Ball-by-Ball Analysis",
      description:
        "A specialized web scraping tool designed to meticulously gather detailed information on cricket matches. It captures ball-by-ball data and seamlessly integrates this wealth of statistics into Google Sheets for real-time updates and accessible analysis ",
      tags: [
        
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Google_Sheets",
          color: "green-text-gradient",
        },
        {
          name: "Requests",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "ODDS Scraping , arbitrage",
      description:
        "Scraping the odds of the oddschecker of multiple sports such as (nfl , soccer , basketball) and use them to calcul arbitrage , and profits more ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "DigitalOcean",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Realtors.com",
      description:
        "Extracting multiple real estate agents'informations using the api of realtors.com , and encountring the jwt token , and also bypassing the security",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "requests",
          color: "green-text-gradient",
        },
        {
          name: "data ",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };