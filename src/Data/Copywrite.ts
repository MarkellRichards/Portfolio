export const processData = [
  {
    id: 1,
    title: "Brain Storm",
    src: "https://res.cloudinary.com/divqhnxeq/image/upload/v1622578013/Portfolio%20Images/brainstorm_yjzrko.svg",
    alt: "brainstorming",
    summary:
      "After discussing your needs and wants, it's time for brainstorming! I will map out how to reach your goals while using web marketing and design strategies.",
  },
  {
    id: 2,
    title: "Wireframe / Design",
    src: "https://res.cloudinary.com/divqhnxeq/image/upload/v1622578013/Portfolio%20Images/wireframe_gsseve.svg",
    alt: "wireframe",
    summary:
      "The next step is bringing these decisions to life. A wireframe will be created to show the layout of the app and or website.",
  },
  {
    id: 3,
    title: "Programming",
    src: "https://res.cloudinary.com/divqhnxeq/image/upload/v1622578013/Portfolio%20Images/programming_vokzop.svg",
    alt: "programming",
    summary:
      "The programming process is taking designs and translating them to code. I build websites and mobile applications. ",
  },
  {
    id: 4,
    title: "Site Launch",
    src: "https://res.cloudinary.com/divqhnxeq/image/upload/v1622578013/Portfolio%20Images/sitelaunch_ariubj.svg",
    alt: "sitelaunch",
    summary:
      "The final step is launching your site! Once we have a set date, we will plan for your launch date. Here we can use advertisements and SEO capabilities to share your website. ",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "Website Development",
    summary:
      "Expand your company reach by having a custom website that successfully spreads your brand and services to your target audience.",
    src: "https://res.cloudinary.com/divqhnxeq/image/upload/v1622578015/Portfolio%20Images/mockup_ezq9pf.jpg",
    alt: "Website Mockup",
  },
  {
    id: 2,
    title: "API Development",
    summary:
      "Add more capabilities to your website or mobile app by having a custom application programming interface tailored to your services.",
    src: "https://res.cloudinary.com/divqhnxeq/image/upload/v1622583367/Portfolio%20Images/api_hpcpmn.jpg",
    alt: "Laptop screen with code on it",
  },
  {
    id: 3,
    title: "Convert website to mobile app",
    summary:
      "Over 45% of website visits are with mobile applications. Converting your site is an excellent step in the right direction to ensure growth and your site's reach!",
    src: "https://res.cloudinary.com/divqhnxeq/image/upload/v1622583366/Portfolio%20Images/convert_suljqk.jpg",
    alt: "Phone with application open",
  },
];

export interface Project {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  description: string;
  role: string;
  challenges?: string;
  solution?: string;
  technology: Array<string>;
  features?: Array<string>;
  site?: string;
  github?: string;
}

export const projectData: Array<Project> = [
  {
    id: 1,
    title: "Portfolio",
    category: "React",
    src: "https://res.cloudinary.com/divqhnxeq/image/upload/v1622583310/Portfolio%20Images/mockup_port_hgvpyt.png",
    alt: "Portfolio website",
    description:
      "A multi-paged portfolio project created using React. The color scheme of the website is white, purple, and orange. The typography choice for headers is Righteous and the body copy is Raleway. This is version 2 of my portfolio and is a major update in terms of techonology used.",
    role: "My wife is a UI/UX designer. I collaborated with her on the design of this website",
    challenges:
      "Filtering on the client side, as well as more exposure to TypeScript",
    solution:
      "I created a filtering menu component that updates the filter criteria in PortfolioSection component state. I referenced the TypeScript handbook and was able to determine the best approach to declaring types and interfaces.",
    technology: [
      "React",
      "Styled-components",
      "Flexbox",
      "CSS3 Grid",
      "TypeScript",
      "Functional Components",
    ],
    site: "",
    github: "https://github.com/MarkellRichards/Portfolio",
  },
  {
    id: 2,
    title: "Donate Gifts",
    category: "Node",
    src: "https://res.cloudinary.com/divqhnxeq/image/upload/v1622577973/Portfolio%20Images/dg_gbfxmu.png",
    alt: "donate-gifts.com mockup",
    description:
      "A full-stack Nodejs application that enables users to donate holiday & birthday gifts to foster children and homeless youth. It has user authentication and Stripe & Paypal payment gateways for e-commerce (buying of gifts). Uses Bootstrap framework for styling, alongside custom css. ",
    role: "My primary role for this application was frontend developer and designer. I created custom mockups in Adobe XD and collaborated with DonateGifts CEO. I made use of Embedded JavaScript templates (EJS) and Bootstrap 4 to create highly responsive mobile first web pages.",
    technology: [
      "Express",
      "MongoDb",
      "Stripe & Paypal",
      "Docker",
      "EJS",
      "OAuth",
    ],
    site: "https://donate-gifts.com/",
    github: "https://github.com/donategifts/donategifts",
  },
];

export const pricingData = [
  {
    id: 1,
    title: "Personal",
    src: "https://res.cloudinary.com/divqhnxeq/image/upload/v1622578013/Portfolio%20Images/personal_wfdcdm.svg",
    alt: "Man and woman talking",
    features: [
      "1-4 page site",
      "Responsive for mobile devices",
      "6 months of maintenance",
    ],
  },
  {
    id: 2,
    title: "Business",
    src: "https://res.cloudinary.com/divqhnxeq/image/upload/v1622578015/Portfolio%20Images/business_olcuqc.svg",
    alt: "People looking at screen",
    features: [
      "All previous features",
      "1-15 page site",
      "Branding Kit",
      "Content Management System",
      "1 year of maintenance",
    ],
  },
  {
    id: 3,
    title: "Advanced",
    src: "https://res.cloudinary.com/divqhnxeq/image/upload/v1622578015/Portfolio%20Images/advanced_g9mk4f.svg",
    alt: "High five",
    features: [
      "All previous features",
      "1-30 page site",
      "Mobile application",
      "E-Commerce",
      "UI/UX Designer joins team",
      "2 years of maintenance",
    ],
  },
];
