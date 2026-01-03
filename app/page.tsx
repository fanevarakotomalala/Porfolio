import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
   {
        id: 1,
        title: "Todo List",
        description: "Une application simple pour gérer vos tâches quotidiennes.",
        year: 2022,
        stacks: ["React", "JavaScript", "CSS", "Bootstrap"],
        image: "/todo-list-app.png",
        details:""
    },
    {
        id: 2,
        title: "Katro",
        description: "Application de l'algorithme Minimax pour le jeu de Katro.",
        year: 2023,
        stacks: ["React", "TypeScript", "Tailwind CSS"],
        image: "/katro-game.png",
        details:""
    },
];

export default function Home() {

  return (
   <div className="space-y-32">
    <section className="max-w-3xl space-y-8">
        <h1 className="text-4xl md:text-5xl leading-[1.1] font-medium">
         Développeur web FullStack spécialisé en NextJS, React et ASP.NET Web API
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Fraîchement diplômé, à la recherche d&apos;un emplois.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-muted transition-colors text-sm"
        >
          En savoir plus
        </Link>
      </section>

      <section className="space-y-12">
        <div className="flex items-end justify-between border-b pb-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Projets sélectionnés</h2>
          <Link href="/projets" className="text-sm hover:underline flex items-center gap-1">
            Tous les projets <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.title} className="group space-y-4">
              <div className="aspect-4/3 overflow-hidden bg-muted relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 border rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex gap-2 pt-2">
                  {project.stacks.map((stack) => (
                    <span
                      key={stack}
                      className="text-[10px] uppercase tracking-wider px-2 py-0.5 border rounded-full text-muted-foreground"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

   </div>
  );
}
