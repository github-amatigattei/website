import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, TrendingUp, Shield } from "lucide-react"

export function ExpertiseSection() {
  const stats = [
    {
      icon: Calendar,
      number: "30",
      label: "Anni di Esperienza",
      description: "A servizio dei clienti dal 1995",
    },
    {
      icon: Users,
      number: "3+",
      label: "Dottori Commercialisti",
      description: "Iscritti all'Albo Professionale",
      },
    {
      icon: Users,
      number: "2+",
      label: "Collaboratori Esperti",
      description: "In Materia Contabile e Fiscale",
    },
    {
      icon: Shield,
      number: "500+",
      label: "Clienti Serviti",
      description: "Aziende e Privati",
    },
  ]

  return (
    <section id="expertise" className="py-20 bg-muted/30 style={{ background: 'rgba(5,49,88,0.9)' }}">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            La nostra esperienza
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance mb-4">
            Chi siamo e cosa possiamo fare per te?
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-sm bg-background/50">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-serif font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-serif font-semibold mb-3">Consulenza alla Gestione dell'Impresa</h3>
            <p className="text-muted-foreground">
              Assistenza alla gestione dell'impresa sulla base dei dati di bilancio per ottimizzare la performance aziendale e la crescita sostenibile.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-serif font-semibold mb-3">Consulenza giuridico-economica</h3>
            <p className="text-muted-foreground">
              Assistenza sulle normative di bilancio e societarie.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-serif font-semibold mb-3">Assistenza Fiscale e Finanziaria</h3>
            <p className="text-muted-foreground">
              Consulenza finanziaria e pianificazione fiscale strategica commisurata alle esigenze del cliente.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-serif font-semibold mb-3">Dichiarazioni fiscali</h3>
            <p className="text-muted-foreground">
              Adempimenti fiscali per aziende e privati, dichiarazioni dei redditi, IVA, IMU e altre imposte.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
