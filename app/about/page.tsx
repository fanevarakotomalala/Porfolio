import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-16">
      <h1 className="text-4xl font-medium italic font-serif">Histoire</h1>

      <div className="space-y-8 text-xl leading-relaxed">
        <p>
          Je suis un designer qui croit fermement que les meilleurs produits naissent d&apos;une compréhension profonde de la
          technologie. Mon approche combine une esthétique minimaliste avec une exécution technique rigoureuse.
        </p>
        <p className="text-muted-foreground">
          Au cours des huit dernières années, j&apos;ai eu le privilège de travailler avec des équipes innovantes pour
          construire des outils qui facilitent la vie des gens. Je m&apos;intéresse particulièrement à l&apos;intersection entre
          l&apos;IA et le design d&apos;interface.
        </p>
      </div>

      <div className=" aspect-video relative overflow-hidden bg-muted">
        <Image src="/workstation.jpg" alt="Espace de travail" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
        <div className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground border-b pb-2">
            Services
          </h2>
          <ul className="space-y-2 text-sm">
            <li>Product Design</li>
            <li>Front-end Development (React/Next.js)</li>
            <li>Design Systems</li>
            <li>Art Direction</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground border-b pb-2">
            Expérience
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-between items-start">
              <div>
                <p className="font-medium">Freelance</p>
                <p className="text-muted-foreground text-xs uppercase">Designer & Développeur</p>
              </div>
              <span className="text-muted-foreground">2021 — Présent</span>
            </li>
            <li className="flex justify-between items-start">
              <div>
                <p className="font-medium">Studio Bloom</p>
                <p className="text-muted-foreground text-xs uppercase">Senior Product Designer</p>
              </div>
              <span className="text-muted-foreground">2018 — 2021</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}