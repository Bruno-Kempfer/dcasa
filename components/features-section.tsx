import { Leaf, Users, ShoppingBag, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Leaf,
    title: "Produtos Naturais",
    description: "Alimentos frescos, orgânicos e livres de agrotóxicos direto dos produtores locais.",
  },
  {
    icon: Users,
    title: "Apoie Pequenos Produtores",
    description: "Fortaleça a economia local e ajude famílias de agricultores da sua região.",
  },
  {
    icon: ShoppingBag,
    title: "Compra Facilitada",
    description: "Plataforma simples e intuitiva para encontrar e comprar produtos frescos.",
  },
  {
    icon: Heart,
    title: "Sustentabilidade",
    description: "Reduza a pegada de carbono comprando local e apoiando práticas sustentáveis.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Por Que Escolher o D'Casa?
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Uma plataforma pensada para conectar pessoas e valorizar o que é natural
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-card transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-pretty text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
