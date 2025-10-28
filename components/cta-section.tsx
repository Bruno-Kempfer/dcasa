import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 text-center md:px-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Pronto Para Começar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/90">
            Junte-se a centenas de pessoas que já estão apoiando produtores locais e desfrutando de alimentos frescos e
            naturais todos os dias.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              Criar Conta Grátis
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
