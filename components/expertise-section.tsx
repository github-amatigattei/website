import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, TrendingUp, Shield } from "lucide-react"

export function ExpertiseSection() {
  const stats = [
    {
      icon: Calendar,
      number: "25+",
      label: "Years of Experience",
      description: "Serving clients since 1999",
    },
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients",
      description: "Individuals and businesses",
    },
    {
      icon: TrendingUp,
      number: "$50M+",
      label: "Tax Savings Generated",
      description: "Through strategic planning",
    },
    {
      icon: Shield,
      number: "100%",
      label: "Compliance Rate",
      description: "Zero audit penalties",
    },
  ]

  return (
    <section id="expertise" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance mb-4">
            Proven Track Record of Excellence
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Our quarter-century of experience combines deep financial knowledge with comprehensive legal expertise,
            ensuring your financial affairs are handled with the utmost professionalism.
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

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-serif font-semibold mb-3">Financial Expertise</h3>
            <p className="text-muted-foreground">
              Comprehensive tax planning, preparation, and strategic financial guidance for optimal outcomes.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-serif font-semibold mb-3">Legal Knowledge</h3>
            <p className="text-muted-foreground">
              Deep understanding of tax law, regulatory compliance, and legal implications of financial decisions.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-serif font-semibold mb-3">Personalized Service</h3>
            <p className="text-muted-foreground">
              Tailored solutions that address your unique financial situation and long-term objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
