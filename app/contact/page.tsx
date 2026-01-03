import { Copy } from "lucide-react"
import { Metadata } from "next"

export const metadata:Metadata = {
  title:"Contact",
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl space-y-16">
      <h1 className="text-4xl font-medium italic font-serif">Contact</h1>

      <div className="space-y-12">
        <div className="space-y-6">
          <p className="text-2xl leading-tight">
            Vous avez un projet en tête ou vous voulez simplement dire bonjour ? Je suis toujours ouvert à de nouvelles
            discussions.
          </p>
        </div>

        <div className="space-y-8 pt-12">
          <div className="flex items-center justify-between border-b pb-4">
            <span className="text-sm text-muted-foreground">Email</span>
            <div className="flex items-center gap-2 group cursor-pointer hover:text-muted-foreground transition-colors">
              <span className="font-medium">fanevarakotomalala77@gmail.com</span>
              <Copy className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">LinkedIn</span>
              <a href="https://www.linkedin.com/in/nomenjanahary-faneva-rakotomalala-8b8628200/" className="font-medium hover:underline">
                /in/faneva-rakotomalala
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Instagram</span>
              <a href="#" className="font-medium hover:underline">
                @fanevarakotomalala
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Github</span>
              <a href="#" className="font-medium hover:underline">
                @fanevarakotomalala
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Facebook</span>
              <a href="#" className="font-medium hover:underline">
                @fanevarakotomalala
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}