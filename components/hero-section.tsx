import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border px-6 py-2 text-sm mb-8 bg-card">
            <Award className="mr-2 h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Fiducia da 25 anni • Consulenza fiscale e finanziaria esperta</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-balance mb-6">
            Consulenza Fiscale e Finanziaria
            <span className="text-primary block">Esperta di cui Fidarsi</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
            Con 25 anni di comprovata esperienza in contabilità fiscale, pianificazione finanziaria e conformità legale,
            CED Contabilità fornisce soluzioni complete per privati e aziende che cercano una guida finanziaria
            affidabile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-base px-8">
              Prenota Consulenza Gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 bg-transparent">
              <Shield className="mr-2 h-4 w-4" />
              Visualizza i Nostri Servizi
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            Dottore Commercialista Abilitato • 25+ Anni di Esperienza • Consulenza Riservata
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
