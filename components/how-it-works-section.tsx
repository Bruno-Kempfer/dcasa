import { Search, ShoppingCart, Truck } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Encontre Produtores",
    description: "Navegue por produtores locais e descubra produtos frescos da sua região.",
  },
  {
    icon: ShoppingCart,
    number: "02",
    title: "Faça Seu Pedido",
    description: "Escolha os produtos que deseja e finalize sua compra de forma simples e segura.",
  },
  {
    icon: Truck,
    number: "03",
    title: "Receba em Casa",
    description: "Receba seus produtos frescos diretamente na sua porta ou retire no local.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-muted/50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">Como Funciona</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Três passos simples para alimentos frescos e naturais
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {step.number}
              </div>
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-pretty text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute -right-6 top-10 hidden h-0.5 w-12 bg-border md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
