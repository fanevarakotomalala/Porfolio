export function Footer() {
  return (
    <footer className="mt-32 pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-xs text-muted-foreground uppercase tracking-widest">
        © 2026. Conçu et développé par Faneva RAKOTOMALALA.
      </div>
      <div className="flex gap-8 text-xs uppercase tracking-widest text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">
          Mentions légales
        </a>
        <a href="#" className="hover:text-foreground transition-colors">
          Confidentialité
        </a>
      </div>
    </footer>
  )
}
