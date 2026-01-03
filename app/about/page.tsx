import Image from "next/image"
import { Formations, Experiences } from "../data/data"
import { Metadata } from "next"

export const metadata:Metadata = {
  title:"About",
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-16">
      <h1 className="text-4xl font-medium italic font-serif">A propos</h1>

      <div className="space-y-8 text-xl leading-relaxed">
        <p>
          Je suis un développeur passioné qui croit fermement que les meilleurs produits naissent d&apos;une profonde analyse et d&apos;une bonne compréhension de la
          technologie. Une bonne application est une application conviviale, performante et accéssible pour tout le monde.
        </p>
        <p className="text-muted-foreground">
          Au cours de mes années d&apos;étude à l&apos;ISPM, j&apos;ai accumulé de l&apos;experience en faisant des travaux personnels. Et c&apos;était pendant mon stage que j&apos;ai vraiment eu l&apos;occasion de mettre en 
          pratique tous ce que j&apos;ai appris.
        </p>
      </div>

      <div className=" aspect-video relative overflow-hidden bg-muted">
        <Image src="/workstation.jpg" alt="Espace de travail" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
        <div className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground border-b pb-2">
            Experiences Professionnels:
          </h2>
          <ul className="space-y-2 text-sm">
           {
            Experiences.map((experience) => (
              <li key={experience.year} className="flex flex-col-reverse">
                <div className="leading-relaxed">
                  <p>{experience.title}</p>
                </div>
                <span className="text-lg font-semibold">{experience.year}</span>
              </li>
            ))
           }
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground border-b pb-2">
            Formations:
          </h2>
          <ul className="space-y-4 text-sm">
            {
              Formations.map((formation) => (
                <li className="flex justify-between items-start gap-2" key={formation.year}>
                  <div>
                    <p className=" text-xs uppercase">{formation.title}</p>
                  </div>
                  <span className="font-semibold">{formation.year}</span>
                </li>

              ))
            }
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground border-b pb-2">
            Compétences:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image src="/dotnet.png" alt="logo dotnet" width={300} height={300} />
            <Image src="/angular.png" alt="logo angular" width={300} height={300} />
            <Image src="/nextjs-logo.png" alt="logo NextJS" width={300} height={300} />
            <Image src="/react.png" alt="logo react" width={300} height={300} />
            <Image src="/sqlserver-logo.png" alt="logo SQL Server" width={300} height={300} />
            <Image src="/tailwind-css.png" alt="logo Tailwind CSS" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  )
}