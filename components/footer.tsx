import Image from "next/image"
import { Facebook, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="relative h-16 w-32">
              <Image src="/logo.png" alt="D'Casa" fill className="object-contain object-left" />
            </div>
            <p className="text-sm text-muted-foreground">
              Conectando produtores e consumidores para um futuro mais sustentável.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-card-foreground">Plataforma</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Para Consumidores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Para Produtores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Preços
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-card-foreground">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-card-foreground">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 D'Casa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
