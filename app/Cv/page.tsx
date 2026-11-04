export default function Cv() {
  const missions = [
    {
      title: "Mon premier stage",
      company: "Entreprise A",
      location: "Brussels",
      period: "Janvier 2025 – Mars 2025",
      project: "Application de gestion interne",
      mission:
        "Développement d'une API REST permettant de gérer les données et de faciliter les processus internes de l'entreprise.",
      skills: ["Java", "Spring Boot", "SQL", "Git"],
    },
    {
      title: "Mon deuxième stage",
      company: "Entreprise B",
      location: "Brussels",
      period: "Avril 2025 – Juin 2025",
      project: "Interface web interactive",
      mission:
        "Création d'une interface web responsive permettant aux utilisateurs de consulter et de gérer leurs informations.",
      skills: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Mon troisième projet",
      company: "Projet personnel",
      location: "Brussels",
      period: "Juillet 2025 – Septembre 2025",
      project: "Application de gestion de tâches",
      mission:
        "Conception d'une application permettant de créer, modifier et supprimer des tâches, avec une API pour gérer les données.",
      skills: ["JavaScript", "Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Portfolio professionnel
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Mon CV & mes projets
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Découvrez mes expériences professionnelles, les projets réalisés et
            les compétences techniques acquises.
          </p>
        </header>

        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Mes expériences
            </h2>
            <p className="mt-2 text-slate-500">
              Un projet représentatif pour chaque expérience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission, index) => (
              <Mission key={mission.title} {...mission} number={index + 1} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

type MissionProps = {
  title: string;
  company: string;
  location: string;
  period: string;
  project: string;
  mission: string;
  skills: string[];
  number: number;
};

function Mission({
  title,
  company,
  location,
  period,
  project,
  mission,
  skills,
  number,
}: MissionProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
          {String(number).padStart(2, "0")}
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {location}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-1 font-medium text-blue-600">{company}</p>
      <p className="mt-2 text-sm text-slate-500">{period}</p>

      <div className="my-5 h-px bg-slate-100" />

      <div className="mb-5">
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Projet réalisé
        </h4>
        <h5 className="mb-2 text-lg font-semibold text-slate-800">{project}</h5>
        <p className="text-sm leading-6 text-slate-600">{mission}</p>
      </div>

      <div className="mt-auto pt-4">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Compétences acquises
        </h4>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
