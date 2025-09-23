import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react"
import Link from "next/link"

export function BlogPreviewSection() {
  const blogPosts = [
    {
      slug: "understanding-tax-deductions-2024",
      title: "Comprendere le Detrazioni Fiscali: Guida Completa per il 2024",
      excerpt:
        "Naviga nel complesso mondo delle detrazioni fiscali con la nostra guida completa che copre spese aziendali, detrazioni personali e pianificazione strategica.",
      category: "Pianificazione Fiscale",
      readTime: "8 min di lettura",
      publishDate: "15 Marzo 2024",
      image: "/tax-documents-and-calculator-on-desk.jpg",
    },
    {
      slug: "small-business-financial-planning",
      title: "Elementi Essenziali di Pianificazione Finanziaria per Piccoli Imprenditori",
      excerpt:
        "Scopri le strategie fondamentali di pianificazione finanziaria che ogni piccolo imprenditore deve conoscere per una crescita sostenibile e il successo.",
      category: "Finanza Aziendale",
      readTime: "6 min di lettura",
      publishDate: "10 Marzo 2024",
      image: "/small-business-owner-reviewing-financial-charts.jpg",
    },
    {
      slug: "estate-planning-basics",
      title: "Fondamenti di Pianificazione Successoria: Proteggere il Tuo Patrimonio",
      excerpt:
        "Comprendi i componenti essenziali della pianificazione successoria e come una preparazione adeguata può proteggere i tuoi beni e provvedere ai tuoi cari.",
      category: "Legale e Successorio",
      readTime: "10 min di lettura",
      publishDate: "5 Marzo 2024",
      image: "/family-documents-and-legal-papers.jpg",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Centro Conoscenze
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance mb-4">
            Approfondimenti Esperti ed Educazione Finanziaria
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Rimani informato con i nostri ultimi articoli su strategie fiscali, pianificazione finanziaria e conformità
            legale. La conoscenza è potere quando si tratta del tuo futuro finanziario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.publishDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold leading-tight group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary transition-colors">
                    Leggi Articolo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              <BookOpen className="mr-2 h-4 w-4" />
              Visualizza Tutti gli Articoli
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
