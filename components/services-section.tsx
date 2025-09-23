import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, FileText, Building2, PiggyBank, Scale, TrendingUp, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Calculator,
      title: "Preparazione e Pianificazione Fiscale",
      description:
        "Servizi fiscali completi per privati e aziende, inclusa la pianificazione strategica per minimizzare il carico fiscale e garantire la conformità.",
      features: [
        "Dichiarazioni Fiscali Individuali",
        "Dichiarazioni Fiscali Aziendali",
        "Strategie di Pianificazione Fiscale",
        "Acconti Trimestrali",
      ],
    },
    {
      icon: Building2,
      title: "Servizi Finanziari Aziendali",
      description:
        "Soluzioni complete di gestione finanziaria per aziende di tutte le dimensioni, dalle startup alle società consolidate.",
      features: ["Contabilità e Tenuta Libri", "Bilanci", "Servizi Buste Paga", "Costituzione Società"],
    },
    {
      icon: PiggyBank,
      title: "Pianificazione Finanziaria",
      description:
        "Strategie finanziarie a lungo termine per aiutarti a raggiungere i tuoi obiettivi finanziari personali e aziendali.",
      features: [
        "Pianificazione Pensionistica",
        "Consulenza Investimenti",
        "Pianificazione Successoria",
        "Gestione del Rischio",
      ],
    },
    {
      icon: Scale,
      title: "Conformità Legale",
      description:
        "Assicuriamo che i tuoi affari finanziari rispettino tutti i requisiti normativi e gli obblighi legali.",
      features: ["Conformità Normativa", "Supporto Audit", "Documentazione Legale", "Valutazione del Rischio"],
    },
    {
      icon: FileText,
      title: "Servizi di Consulenza",
      description:
        "Consulenza esperta su questioni finanziarie complesse, decisioni aziendali e pianificazione strategica.",
      features: ["Analisi Finanziaria", "Valutazione Aziendale", "Fusioni e Acquisizioni", "Pianificazione Strategica"],
    },
    {
      icon: TrendingUp,
      title: "Consulenza per la Crescita",
      description:
        "Guida specializzata per aziende che desiderano espandersi, ottimizzare le operazioni o migliorare la redditività.",
      features: [
        "Strategie di Crescita",
        "Gestione Flusso di Cassa",
        "Analisi delle Performance",
        "Espansione di Mercato",
      ],
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            I Nostri Servizi
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance mb-4">
            Soluzioni Finanziarie Complete
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Dalla preparazione fiscale alla pianificazione finanziaria strategica, offriamo una gamma completa di
            servizi progettati per proteggere e far crescere i tuoi interessi finanziari.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full justify-between p-0 h-auto font-medium">
                  Scopri di Più
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Prenota la Tua Consulenza Gratuita
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Discuti le tue esigenze specifiche con il nostro team esperto
          </p>
        </div>
      </div>
    </section>
  )
}
