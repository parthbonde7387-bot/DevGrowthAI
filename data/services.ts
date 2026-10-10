export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
  technologies: string[];
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    subtitle: "Websites designed to make your business stand out.",
    description:
      "We create modern, responsive websites that showcase your brand, communicate your value, and help turn visitors into customers.",
    icon: "Globe",
    gradient: "from-violet-500 to-blue-500",
    features: [
      "Responsive website design",
      "Business and company websites",
      "Landing pages",
      "Portfolio websites",
      "Modern user interfaces",
      "Performance optimization",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    benefits: [
      "Professional online presence",
      "Mobile-friendly experience",
      "Fast and accessible pages",
      "Design aligned with your brand",
    ],
    faqs: [
      {
        question: "How long does website development take?",
        answer:
          "The timeline depends on the number of pages, features, and design requirements. A simple website generally takes less time than a complex business website.",
      },
      {
        question: "Will my website work on mobile devices?",
        answer:
          "Yes. We aim to make websites responsive across mobile phones, tablets, laptops, and desktop screens.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We can help modernize an existing website's design, layout, usability, and performance.",
      },
    ],
  },

  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    subtitle: "Complete web applications, from frontend to backend.",
    description:
      "We develop web applications that connect intuitive interfaces with server-side logic, databases, and business workflows.",
    icon: "Code2",
    gradient: "from-blue-500 to-cyan-400",
    features: [
      "Frontend development",
      "Backend development",
      "Authentication and authorization",
      "Admin dashboards",
      "Database integration",
      "Application testing",
    ],
    technologies: ["React", "Next.js", "Python", "Flask", "Node.js", "SQL"],
    benefits: [
      "Connected frontend and backend",
      "Solutions tailored to your workflow",
      "Organized and maintainable code",
      "Room for future expansion",
    ],
    faqs: [
      {
        question: "What is full-stack development?",
        answer:
          "Full-stack development combines the user-facing frontend with the backend logic and data storage needed to operate a web application.",
      },
      {
        question: "Can you build an admin dashboard?",
        answer:
          "Yes. Dashboards can include data tables, forms, user management, reports, and other features based on your requirements.",
      },
      {
        question: "Can you add login and registration?",
        answer:
          "Yes. User authentication can be included, with access permissions designed around the application's requirements.",
      },
    ],
  },

  {
    slug: "database-solutions",
    title: "Database Solutions",
    subtitle: "Reliable data storage, organization, and management.",
    description:
      "We help applications store, organize, retrieve, and manage information using database solutions suited to their needs.",
    icon: "Database",
    gradient: "from-cyan-400 to-teal-400",
    features: [
      "Database design",
      "Table and relationship design",
      "Application integration",
      "Query optimization",
      "Data validation",
      "Backup planning",
    ],
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "SQL"],
    benefits: [
      "Organized information",
      "More efficient data retrieval",
      "Consistent application data",
      "A foundation for future growth",
    ],
    faqs: [
      {
        question: "Which database should my project use?",
        answer:
          "The choice depends on your data structure, application requirements, expected workload, and maintenance needs.",
      },
      {
        question: "Can you connect a database to my website?",
        answer:
          "Yes. We can integrate a suitable database with the backend of your web application.",
      },
      {
        question: "Can you improve an existing database?",
        answer:
          "We can review its structure and queries and recommend improvements based on the problems and requirements identified.",
      },
    ],
  },

  {
    slug: "seo",
    title: "SEO Services",
    subtitle: "Help the right audience discover your website.",
    description:
      "We help improve your website's search visibility through technical improvements, on-page optimization, and useful content structure.",
    icon: "Search",
    gradient: "from-emerald-400 to-cyan-400",
    features: [
      "On-page SEO",
      "Keyword research",
      "Title and meta description optimization",
      "Technical SEO checks",
      "Image optimization",
      "Search performance monitoring",
    ],
    technologies: [
      "Google Search Console",
      "Google Analytics",
      "SEO audit tools",
      "Structured data",
    ],
    benefits: [
      "Improved search accessibility",
      "Better page structure",
      "Clearer search snippets",
      "Measurable optimization work",
    ],
    faqs: [
      {
        question: "How long does SEO take?",
        answer:
          "SEO results vary by competition, website condition, content quality, and other factors. Meaningful improvements often take several months.",
      },
      {
        question: "Can you guarantee the first position on Google?",
        answer:
          "No. Search rankings depend on many factors, and no responsible SEO provider can guarantee a particular position.",
      },
      {
        question: "Can you optimize a newly launched website?",
        answer:
          "Yes. We can help establish a sound technical foundation and optimize important pages as the website launches.",
      },
    ],
  },

  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Connect your brand with the people who matter.",
    description:
      "We help businesses build a stronger online presence through digital campaign planning, social media content, and performance tracking.",
    icon: "Megaphone",
    gradient: "from-orange-400 to-pink-500",
    features: [
      "Digital marketing strategy",
      "Social media planning",
      "Content planning",
      "Campaign setup",
      "Audience research",
      "Performance reporting",
    ],
    technologies: [
      "Google Analytics",
      "Meta Business Suite",
      "Social media platforms",
      "Campaign reporting tools",
    ],
    benefits: [
      "Consistent brand communication",
      "Clear campaign objectives",
      "Better audience understanding",
      "Trackable marketing activities",
    ],
    faqs: [
      {
        question: "Which platforms can you help with?",
        answer:
          "The platforms depend on your audience and goals. We can discuss options such as Instagram, Facebook, and Google.",
      },
      {
        question: "Can you create a marketing plan for a small business?",
        answer:
          "Yes. We can plan activities around your target audience, objectives, resources, and budget.",
      },
      {
        question: "Will you report campaign performance?",
        answer:
          "Reporting can be included so you can review agreed metrics and understand campaign performance.",
      },
    ],
  },

  {
    slug: "video-editing",
    title: "Video Editing",
    subtitle: "Turn raw footage into engaging visual stories.",
    description:
      "We edit video content for brands, creators, and businesses, with an emphasis on clear storytelling and platform-appropriate presentation.",
    icon: "Clapperboard",
    gradient: "from-pink-500 to-violet-500",
    features: [
      "Short-form video editing",
      "Reels and Shorts",
      "Transitions and effects",
      "Text and subtitles",
      "Basic color correction",
      "Social media video formatting",
    ],
    technologies: [
      "Video editing software",
      "Motion graphics",
      "Subtitle tools",
      "Social media formats",
    ],
    benefits: [
      "Consistent visual presentation",
      "Platform-ready video formats",
      "Clearer storytelling",
      "Content tailored to your brief",
    ],
    faqs: [
      {
        question: "Can you edit Instagram Reels and YouTube Shorts?",
        answer:
          "Yes. Short-form videos can be edited to suit the format and requirements of the intended platform.",
      },
      {
        question: "Can I provide my own footage?",
        answer:
          "Yes. You can provide footage, reference videos, branding assets, and instructions for the edit.",
      },
      {
        question: "Can you add subtitles and transitions?",
        answer:
          "Yes. Subtitles, transitions, text overlays, and other agreed editing elements can be included.",
      },
    ],
  },
];