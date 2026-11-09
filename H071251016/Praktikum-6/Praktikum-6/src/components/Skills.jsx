function Skills() {
  // Daftar keahlian disimpan sebagai array string
  const daftarSkill = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="scroll-mt-20 bg-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">Keahlian</h2>

        <ul className="mt-8 flex flex-wrap gap-3">
          {daftarSkill.map((skill, index) => (
            <li
              key={index}
              className="rounded-full border border-accent bg-white px-5 py-2.5 font-medium text-primary shadow-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
