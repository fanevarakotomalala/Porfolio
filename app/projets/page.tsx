import Image from "next/image"
import { AllProjects } from "../data/AllProjects"

export default function ProjectsPage (){
    return (
        <div className="space-y-16">
      <header className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-medium italic font-serif">Travaux</h1>
        <p className="text-lg text-muted-foreground">
          Une sélection de projets récents mêlant design d&apos;interface, développement front-end et backend.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-24">
        {AllProjects.map((project) => (
          <div key={project.title} className="group flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-2/3 aspect-video relative overflow-hidden bg-muted">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="w-full md:w-1/3 space-y-4 pt-4 md:pt-0">
              <div className="flex justify-between items-baseline border-b pb-2">
                <h2 className="text-2xl font-medium">{project.title}</h2>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
              <p className="text-muted-foreground uppercase tracking-widest text-[10px]">{project.category}</p>
              <p className="text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}