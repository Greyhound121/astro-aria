interface Experience {
  logo: string;
  dates: string;
  role: string;
  company?: string;  // Made optional since first entry doesn't have it
  description: string;
}

export const experiences: Experience[] = [
  {
    logo: "/assets/images/experiences/d.ico",
    dates: "2022 - Present",
    role: "Freelancer",
    company: "Digitronics",
    description: "Provided consulting and development services for clients, creating tailored solutions for their specific business needs."
  },
  {
    logo: "/assets/images/experiences/hsbc.ico",
    dates: "2019 - 2020",
    role: "Full Stack Developer - Wealth Management",
    company: "HSBC Holdings plc.",
    description: "Spearheaded web development projects focusing on data visualization for wealth management division."
  },
  {
    logo: "/assets/images/experiences/Axis.ico",
    dates: "2017 - 2019",
    role: "Software Developer - Digital Banking",
    company: "Axis Bank Ltd.",
    description: "Integrated and optimized high-performance web applications for secure cross-border financial transactions."
  },
  {
    logo: "/assets/images/experiences/t.ico",
    dates: "2016 - 2017",
    role: "Content Developer & WordPress Specialist",
    company: "Techdroid",
    description: "Architected and scaled a high-performance WordPress platform."
  }
] as const;
