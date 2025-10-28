import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sprout, TrendingUp, Users, Shield } from "lucide-react"

export function ProducersSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumente suas Vendas",
      description:
        "Alcance mais clientes e venda seus produtos diretamente, sem intermediários que reduzem sua margem de lucro.",
    },
    {
      icon: Users,
      title: "Conexão Direta",
      description: "Conecte-se diretamente com consumidores que valorizam produtos naturais e orgânicos de qualidade.",
    },
    {
      icon: Shield,
      title: "Preços Justos",
      description: "Defina seus próprios preços e receba o valor justo pelo seu trabalho e dedicação.",
    },
    {
      icon: Sprout,
      title: "Gestão Simplificada",
      description: "Gerencie seus produtos, pedidos e entregas de forma fácil através da nossa plataforma intuitiva.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 text-balance">Você é Produtor?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Junte-se ao D'Casa e leve seus produtos naturais e orgânicos diretamente para quem realmente valoriza seu
            trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4 text-balance">
            Comece a Vender Hoje Mesmo
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Cadastre-se gratuitamente e comece a conectar seus produtos com consumidores conscientes que buscam
            qualidade e sustentabilidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Cadastrar como Produtor
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
