import React from "react";
import ExperienceCard from "./experienceCard";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Fincita Consulting",
      logo: "https://i.imgur.com/DsoHv4t.png",
      duration: "Sep 2024 - Apr 2025",
      location: "Toronto, CA",
      description: [
        "Designed and implemented RESTful APIs for a high-traffic e-commerce platform, leveraging optimized request handling, caching, and load balancing to improve UX and reduce latency by 40%",
        "Optimized backend architecture with MySQL query tuning and AWS Cloud Services enhancements, improving data retrieval efficiency, scalability, and reducing server response times by 25% while cutting costs by 20%",
        "Mentored junior developers and documented backend best practices to boost productivity and knowledge transfer",
      ],
      technologies: [
        "Python",
        "AWS",
        "Kubernetes",
        "Kibana",
        "React.js",
        "MySQL",
      ],
    },
    {
      title: "Site Reliability Engineer Intern",
      company: "Kinaxis",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC2AhByfU85EGCxYiVghPZ72vjEO1GuWAubA&s",
      duration: "Jan 2023 - Aug 2023",
      location: "Toronto, CA",
      description: [
        "Automated Salesforce–Datadog synchronization with Python pipelines executing 100+ daily jobs, integrating custom Datadog wrappers to cut manual monitoring by 100% and ensure zero data drift across teams",
        "Modernized SOAP APIs to REST & optimized SQL–Pandas workflows, cutting runtime by 20% for 100+ employees",
        "Collaborated with Google's data engineers to evaluate potential migration from Grafana to Looker Studio, contributing insights during strategy meetings, resulting in a good understanding of use cases and benefits",
      ],
      technologies: [
        "Python",
        "PostgreSQL",
        "Azure",
        "Datadog",
        "Grafana",
        "Salesforce",
        "ServiceNow",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Andie Technologies",
      logo: "https://i.imgur.com/CNHnImt.png",
      duration: "Jan 2022 - Dec 2022",
      location: "Toronto, CA",
      description: [
        "Developed a ReactJS + Django web app for corporate catering, integrating RESTful APIs that enable clients to schedule events, organize inventory & receive tailored quotes with seamless backend support",
        "Enhanced engagement with real-time updates and notifications using Twilio & SendGrid in a 20-person Agile team",
        "Participated in design meetings & client-facing events to gather direct feedback, which informed product decisions & contributed to final app design that aligned with real-world user needs & industry standards",
      ],
      technologies: [
        "React.js",
        "React Native",
        "Django",
        "SendGrid",
        "Docker",
        "Node.js",
      ],
    },
    {
      title: "Freelance Developer, UI/UX Designer & Music Producer",
      company: "Freelance",
      // logo: "https://i.imgur.com/rvmb1KG.png",
      // logo: "https://i.imgur.com/SE5yH55.png",
      logo: "https://i.imgur.com/PewCU9V.png",
      duration: "2019 - Present",
      location: "Remote + Various",
      description: [
        "Developed responsive and visually stunning websites for 20+ customers across various industries, boosting client satisfaction ratings to 8.5/10",
        "Spearheaded SEO strategies that increased organic search traffic by 70% and enhanced website rankings for 10+ clients on search engines",
        "Optimized website performance by reducing page load times by ~5+ seconds, increasing user engagement from 20% to 60%",
        "Designed 6 company logos utilizing Adobe Illustrator, photographed 20+ clients for headshots, creative shoots & modeling shoots, and filmed professional grade promotional material for social media",
        "Utilized FL Studio to produce, mix, and master audio tracks for multiple projects, allowing for a 27% increase in overall production efficiency",
        "Contributed original music for promotional materials, resulting in an increase in user engagement and brand recognition across social media platforms",
      ],
      technologies: ["React.js", "Python", "Flask", "Adobe CC", "FL Studio"],
    },
  ];

  return (
    <section className="xl:pb-16 md:pb-10 max-w-6xl mx-auto">
      <span id="experience" className="block h-0 w-0 absolute -mt-40"></span>
      {/* <h2 className="text-3xl font-bold mb-8 text-foreground">Experience</h2> */}
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
