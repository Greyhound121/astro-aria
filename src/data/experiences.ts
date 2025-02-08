interface Experience {
  logo: string;
  dates: string;
  role: string;
  company?: string;  // Made optional since first entry doesn't have it
  description: string;
}

export const experiences: Experience[] = [
  {
    logo: "/assets/images/experiences/fta.ico",
    dates: "2022 - Present",
    role: "Freelancer",
    description: "Provided consulting and development services for clients, creating tailored solutions for their specific business needs."
  },
  {
    logo: "/assets/images/experiences/hsbc.ico",
    dates: "2019 - 2020",
    role: "Full Stack Developer - Wealth Management",
    company: "HSBC Holdings plc.",
    description: "Developed and maintained multiple applications for wealth management."
  },
  {
    logo: "/assets/images/experiences/Axis.ico",
    dates: "2017 - 2019",
    role: "Software Developer - Digital Banking",
    company: "Axis Bank Ltd.",
    description: "Integrated and enhanced web applications for cross-border money transfers"
  }
] as const;
