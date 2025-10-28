import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Do Campo à Sua Mesa
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Conectando Produtores Locais com Você
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Descubra alimentos frescos, naturais e orgânicos direto de pequenos produtores da sua região. Qualidade,
              sustentabilidade e sabor em cada compra.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                Começar Agora
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Sou Produtor
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <Image src="/logo.png" alt="D'Casa - Natural & Familiar" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
