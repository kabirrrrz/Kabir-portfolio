export const SkillsSection = () => {
  const skills = [
    {
      title: "Programming Languages",
      items: ["C++", "Python", "SQL", "JavaScript"],
    },
    {
      title: "Web Development",
      items: ["HTML", "CSS", "REST APIs"],
    },
    {
      title: "Database Management",
      items: ["Oracle SQL", "MySQL", "MongoDB"],
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS", "Docker", "CI/CD Pipelines", "Kubernetes"],
    },
    {
      title: "Languages",
      items: ["English", "Hindi", "Marathi", "Japanese"],
    },
  ];

  const certifications = [
    {
      title: "DevOps and Agile Methodologies",
      provider: "IBM",
    },
    {
      title: "Cloud Computing",
      provider: "NPTEL",
    },
    {
      title: "Full Stack Web Development",
      provider: "Udemy",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm text-center"
            >
              <h3 className="font-semibold text-lg mb-2">
                {cert.title}
              </h3>

              <p className="text-muted-foreground text-sm">
                {cert.provider}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};