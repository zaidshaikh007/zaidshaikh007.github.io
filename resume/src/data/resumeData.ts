export const personal = {
  name: "Mohammed Zaid Shaikh",
  title: "Full Stack Developer — SaaS, AI Applications & Enterprise Systems",
  tagline: "5+ years building scalable SaaS platforms, AI-powered products, and enterprise systems.",
  email: "zaidshaikh8158@gmail.com",
  phone: "+91 8200373901",
  location: "Surat, Gujarat, India",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/zaid-shaikh-391aa1138",
  resumeUrl: "/Mohammed_Zaid_Shaikh_Resume_ATS.pdf",
};

export const about =
  "Full Stack Developer with 5+ years of professional experience designing, developing, and deploying scalable SaaS platforms, enterprise applications, AI-powered products, and multi-tenant management systems. Experienced in building modern web applications using React.js, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, Prisma, and cloud-native architectures. Strong expertise in AI integrations, Retrieval-Augmented Generation (RAG), OpenAI & Claude APIs, payment systems, authentication, real-time communication, workflow automation, and enterprise-grade backend systems.";

export const skills: { category: string; items: string[] }[] = [
  { category: "Frontend", items: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Material UI", "Radix UI"] },
  { category: "Backend", items: ["Node.js", "Express.js", "NestJS", "Koa", "REST APIs", "GraphQL"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Redis"] },
  { category: "ORM / Data Access", items: ["Prisma", "TypeORM", "Knex"] },
  { category: "Cloud, AI & Integrations", items: ["OpenAI API", "Anthropic Claude API", "Firecrawl API", "Brave Search API", "Twilio", "Stripe", "Auth0", "Envia"] },
  { category: "CMS & Tools", items: ["WordPress", "CodeIgniter", "Git & GitHub", "Agile Development"] },
  { category: "Architecture", items: ["SaaS Architecture", "Multi-Tenant Systems", "Retrieval-Augmented Generation (RAG)", "AI Integrations"] },
];

export const experience = [
  {
    role: "Freelance Full Stack Developer",
    company: "Independent",
    period: "July 2025 – Present",
    points: [
      "Develop and maintain scalable SaaS, AI-powered, and enterprise-grade web applications for international clients",
      "Architect modern frontend and backend solutions using React.js, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and Prisma",
      "Build AI-powered applications integrating OpenAI, Claude, Firecrawl, Vector Embeddings, and RAG",
      "Deliver complete software solutions including multi-tenant systems, workflow automation, payment integrations, and real-time communication platforms",
      "Manage full project lifecycle: planning, development, deployment, maintenance, and client support",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Prism IT Systems",
    period: "November 2020 – June 2025",
    points: [
      "Started as a MERN Stack Intern, progressed to Full Stack Developer",
      "Developed and maintained 10+ production-ready SaaS and enterprise applications",
      "Led frontend and backend development using React.js, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and Prisma",
      "Integrated Stripe, Twilio, Auth0, WhatsApp APIs, shipping providers, and AI services",
      "Mentored junior developers; participated in architecture discussions, code reviews, and deployments",
    ],
  },
];

export const projects = [
  { name: "Mextodo", url: "https://mextodo.com", description: "Multi-country e-commerce platform (customers, vendors, admins) across Mexico, Canada, and the US. Vendor/customer management, product management, order processing, Envia shipping integration, Stripe payments.", stack: ["React.js", "Vite.js", "TypeScript", "Material UI", "Node.js", "Express.js", "Prisma", "PostgreSQL", "Stripe"] },
  { name: "MexSalon", url: "https://mexsalon.com", description: "Multi-tenant salon management platform for Super Admins, Salon Owners, Staff, and Customers. Subscription-based booking, payroll, commissions, loyalty programs, WhatsApp integration.", stack: ["React.js", "TypeScript", "Radix UI", "Node.js", "Express.js", "PostgreSQL", "Prisma"] },
  { name: "Controlcian", url: "https://controlcian.com", description: "Correctional facility communication platform for secure inmate-family communication. Multi-role portals, messaging, voice/video calls, digital wallet, Twilio Voice SDK.", stack: ["React.js", "TypeScript", "Prisma", "PostgreSQL", "Twilio Voice SDK"] },
  { name: "CoreOperative AI", url: "https://portal.coreoperative.ai", description: "Enterprise AI automation platform with business assistants and intelligent workflows. OpenAI + Claude integration, Firecrawl/Brave Search website intelligence, RAG architecture.", stack: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "OpenAI", "Claude", "Firecrawl", "Supabase"] },
  { name: "InsightFlow", url: "https://knowledge.insightflow.io", description: "Research asset management & monetization platform with subscription access and secure authorization.", stack: ["Next.js", "TypeScript", "SCSS", "Node.js", "Koa", "PostgreSQL"] },
  { name: "Travelin AI", url: "https://travelin.ai", description: "AI-powered travel planning and booking platform with flight/hotel booking workflows and itinerary management.", stack: ["Next.js", "Node.js", "MongoDB"] },
  { name: "PAWSCRM", url: "https://pawscrm.com", description: "Enterprise CRM processing datasets larger than 5GB. High-volume CSV import engine, automated email verification, MailWizz integration.", stack: ["Next.js", "Node.js", "PostgreSQL", "Knex"] },
  { name: "PitPlay", url: "https://pitplay.in", description: "Sports facility booking and management platform with ground management and analytics dashboards.", stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma"] },
  { name: "Digimen", url: "https://digimen.co.in", description: "Digital business card and website builder platform with theme customization and social media integrations.", stack: ["Next.js", "CodeIgniter", "Material UI"] },
];

export const education = [
  { school: "MIT World Peace University (MIT-WPU)", period: "2019–2021", degree: "Master of Science (M.Sc.), Computer Science", grade: "CGPA: 9.54/10" },
  { school: "Uka Tarsadia University", period: "2016–2019", degree: "Bachelor of Science (B.Sc.), Information Technology", grade: "CGPA: 8.02/10" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
