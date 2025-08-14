"use client"

import type React from "react"
import { emailService } from "@/services/email-service"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Key,
  Lock,
  Wrench,
  Star,
  CheckCircle,
  Send,
  Award,
  Users,
  Zap,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Flame,
} from "lucide-react"

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)


  const testimonials = [
  {
    text: "Changement express de cylindre après perte de clés. Intervention dans l'heure et conseils pour améliorer la sécurité de mon appartement.",
    name: "François Martin",
    initials: "FM",
    location: "Paris 4ème • Il y a 1 jour",
  },
  {
    text: "Ouverture de porte claquée en moins de 10 minutes. Très professionnel et sympathique, je garde le numéro pour la prochaine fois.",
    name: "Amélie Caron",
    initials: "AC",
    location: "Saint-Ouen • Il y a 2 jours",
  },
  {
    text: "Pose de verrou supplémentaire sur ma porte de cave. Travail propre, rapide et soigné. Prix raisonnable.",
    name: "Karim Haddad",
    initials: "KH",
    location: "Clichy • Il y a 2 jours",
  },
  {
    text: "Installation d'un système de contrôle d'accès pour notre entreprise. Travail impeccable, équipe professionnelle et suivi parfait. Je recommande sans hésitation !",
    name: "Catherine Rousseau",
    initials: "CR",
    location: "Neuilly-sur-Seine • Il y a 3 jours",
  },
  {
    text: "Installation d'une serrure connectée pour ma maison. Explications claires, paramétrage inclus et formation à l'utilisation. Service complet et moderne !",
    name: "Nathalie Moreau",
    initials: "NM",
    location: "Versailles • Il y a 3 jours",
  },
  {
    text: "Installation d'un judas numérique. Produit de qualité et explications claires sur son fonctionnement.",
    name: "Isabelle Girard",
    initials: "IG",
    location: "Suresnes • Il y a 3 jours",
  },
  {
    text: "Réparation d'une serrure grippée sans remplacement complet. Économie réalisée grâce aux bons conseils du serrurier.",
    name: "Lucien Meyer",
    initials: "LM",
    location: "Pantin • Il y a 3 jours",
  },
  {
    text: "Reproduction de clés de sécurité pour tout l'immeuble. Service rapide, clés parfaitement fonctionnelles et prix très correct. Un vrai professionnel !",
    name: "Michel Garcia",
    initials: "MG",
    location: "Levallois-Perret • Il y a 4 jours",
  },
  {
    text: "Porte blindée installée avec barre de seuil anti-effraction. Travail de qualité professionnelle, respect des délais et nettoyage après intervention. Parfait !",
    name: "Sylvie Leroy",
    initials: "SL",
    location: "Argenteuil • Il y a 4 jours",
  },
  {
    text: "Serrure connectée installée en moins d'une heure, application paramétrée et parfaitement fonctionnelle. Je suis ravi.",
    name: "Claire Boucher",
    initials: "CB",
    location: "Issy-les-Moulineaux • Il y a 4 jours",
  },
  {
    text: "Ouverture de garage bloqué. Travail efficace et sans dégâts. Intervention rapide.",
    name: "Patrick Gauthier",
    initials: "PG",
    location: "Colombes • Il y a 4 jours",
  },
  {
    text: "Pose de serrure haute sécurité pour protéger ma boutique. Travail sérieux et rapide.",
    name: "Nora Saïdi",
    initials: "NS",
    location: "Asnières-sur-Seine • Il y a 4 jours",
  },
  {
    text: "Blindage de porte d'entrée réalisé en une matinée. Finitions parfaites, conseils avisés et prix compétitif. Enfin un artisan sur qui on peut compter !",
    name: "Pierre Durand",
    initials: "PD",
    location: "Vincennes • Il y a 5 jours",
  },
  {
    text: "Réglage de porte blindée qui frottait depuis des mois. Maintenant elle ferme parfaitement.",
    name: "Olivier Renaud",
    initials: "OR",
    location: "Ivry-sur-Seine • Il y a 5 jours",
  },
  {
    text: "Intervention un dimanche matin après cambriolage. Mise en sécurité immédiate et devis clair pour remplacement complet.",
    name: "Julie Fontaine",
    initials: "JF",
    location: "Paris 12ème • Il y a 5 jours",
  },
  {
    text: "Serrure qui ne fermait plus correctement depuis des mois. Diagnostic précis, réparation efficace en 30 minutes. Enfin une porte qui ferme bien ! Merci !",
    name: "Julien Blanc",
    initials: "JB",
    location: "Montreuil • Il y a 6 jours",
  },
  {
    text: "Réparation de serrure de boîte aux lettres. Intervention rapide et soignée.",
    name: "Samuel Denis",
    initials: "SD",
    location: "Bagnolet • Il y a 6 jours",
  },
  {
    text: "Installation d'une barre anti-panique dans notre commerce. Normes respectées et finition impeccable.",
    name: "Christelle Lambert",
    initials: "CL",
    location: "Courbevoie • Il y a 6 jours",
  },
  {
    text: "Clé cassée dans la serrure un dimanche soir, j'ai appelé MB Serrurier. Intervention en 25 minutes, problème résolu sans casser la serrure. Tarif transparent et service de qualité !",
    name: "Antoine Lefebvre",
    initials: "AL",
    location: "Boulogne-Billancourt • Il y a 1 semaine",
  },
  {
    text: "Changement de toutes les serrures après un déménagement. Conseil personnalisé, installation soignée et garantie fournie. Excellent rapport qualité-prix !",
    name: "Laure Thomas",
    initials: "LT",
    location: "Saint-Denis • Il y a 1 semaine",
  },
  {
    text: "Audit sécurité gratuit très complet pour notre local commercial. Recommandations pertinentes et devis détaillé. Nous avons choisi MB Serrurier pour tous les travaux !",
    name: "David Rodriguez",
    initials: "DR",
    location: "Nanterre • Il y a 1 semaine",
  },
  {
    text: "Serrure bloquée après tentative d'effraction. Dépannage immédiat et remplacement dans la foulée.",
    name: "Thierry Masson",
    initials: "TM",
    location: "Paris 18ème • Il y a 1 semaine",
  },
  {
    text: "Blindage de porte d'entrée, excellent rapport qualité-prix. Je recommande vivement.",
    name: "Hélène Dupuis",
    initials: "HD",
    location: "Aubervilliers • Il y a 1 semaine",
  },
  {
    text: "Changement complet de cylindre et reproduction de clés. Service rapide et efficace.",
    name: "Maxime Charpentier",
    initials: "MC",
    location: "Clamart • Il y a 1 semaine",
  },
  {
    text: "Intervention très rapide après avoir claqué ma porte. Le serrurier était là en 20 minutes et a ouvert sans abîmer la serrure. Service impeccable et prix très honnête !",
    name: "Marie Dubois",
    initials: "MD",
    location: "Paris 15ème • Il y a 2 semaines",
  },
  {
    text: "Dépannage d'urgence à 2h du matin après un cambriolage. Arrivé rapidement, sécurisé temporairement puis remplacé la serrure le lendemain. Merci pour votre réactivité !",
    name: "Émilie Bernard",
    initials: "EB",
    location: "Créteil • Il y a 2 semaines",
  },
  {
    text: "Réparation de mécanisme de serrure ancien, évitant un remplacement coûteux.",
    name: "Sonia Pires",
    initials: "SP",
    location: "Villejuif • Il y a 2 semaines",
  },
  {
    text: "Pose d'un verrou supplémentaire sur porte d'entrée. Artisan ponctuel et travail impeccable.",
    name: "Alain Morel",
    initials: "AM",
    location: "Malakoff • Il y a 2 semaines",
  },
  {
    text: "Professionnel, ponctuel et efficace. Ma serrure était complètement bloquée, il a trouvé la solution rapidement. Excellent rapport qualité-prix !",
    name: "Sophie Petit",
    initials: "SP",
    location: "Paris 11ème • Il y a 3 semaines",
  },
  {
    text: "Ouverture de porte blindée sans destruction, vraiment impressionnant !",
    name: "Fanny Rousseau",
    initials: "FR",
    location: "Paris 3ème • Il y a 3 semaines",
  },
  {
    text: "Dépannage de rideau métallique bloqué devant mon commerce. Réactivité au top.",
    name: "Gérard Lucas",
    initials: "GL",
    location: "Montreuil • Il y a 3 semaines",
  },
  {
    text: "Installation d'une serrure multipoints parfaitement réalisée. Travail soigné, explications claires et garantie fournie. Je recommande vivement MB Serrurier !",
    name: "Jean-Luc Martin",
    initials: "JM",
    location: "Paris 8ème • Il y a 1 mois",
  },
  {
    text: "Intervention en urgence un soir de pluie, serrurier souriant et efficace. Serrure réparée rapidement.",
    name: "Valérie Nguyen",
    initials: "VN",
    location: "Meudon • Il y a 1 mois",
  }
];


  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000) // Change every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main testimonial display */}
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="bg-stone-50 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-8 italic text-lg leading-relaxed min-h-[120px] flex items-center justify-center">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-white text-lg">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-xl">{testimonial.name}</p>
                      <p className="text-sm text-stone-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-stone-50 transition-colors z-10"
        aria-label="Témoignage précédent"
      >
        <ChevronLeft className="w-6 h-6 text-slate-800" />
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-stone-50 transition-colors z-10"
        aria-label="Témoignage suivant"
      >
        <ChevronRight className="w-6 h-6 text-slate-800" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-amber-500" : "bg-stone-300 hover:bg-stone-400"
            }`}
            aria-label={`Aller au témoignage ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4">
        <span className="text-stone-500 text-sm">
          {currentIndex + 1} / {testimonials.length}
        </span>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    urgency: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demande de devis:", formData)
    emailService
      .sendEmail("service_bzxd274", "template_05ghzsj", formData, "Efa0kcbHyLUSc52eZ", "YW2h_TTeA2UfxVyJ3pw74")
      .then(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          urgency: "",
          message: "",
        })
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du devis:", error)
      });

  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top Yellow Bar */}
      <div className="bg-amber-500 h-2"></div>

      {/* Header */}
      <header className="bg-slate-900 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="MB Serrurier Logo"
                width={80}
                height={80}
                className="rounded-full border-2 border-amber-500 object-cover"
                priority
                quality={100}
              />
              <div>
                <h1 className="text-2xl font-bold text-white">MB SERRURIER</h1>
                <p className="text-amber-500 text-sm font-medium">La sécurité à votre portée</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link
                href="#accueil"
                className="text-white hover:text-amber-500 transition-colors font-medium uppercase text-sm"
              >
                ACCUEIL
              </Link>
              <Link
                href="#services"
                className="text-white hover:text-amber-500 transition-colors font-medium uppercase text-sm"
              >
                SERVICES
              </Link>
              <Link
                href="#temoignages"
                className="text-white hover:text-amber-500 transition-colors font-medium uppercase text-sm"
              >
                TÉMOIGNAGES
              </Link>
              <Link
                href="#apropos"
                className="text-white hover:text-amber-500 transition-colors font-medium uppercase text-sm"
              >
                À PROPOS
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-amber-500 transition-colors font-medium uppercase text-sm"
              >
                CONTACT
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex space-x-2">{/* social icons place*/}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative py-20 bg-slate-800 overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/70"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: "url(/serrurier-travaille-sur-porte.jpg)" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="text-white">
              <div className="mb-6">
                <div className="w-16 h-1 bg-amber-500 mb-4"></div>
                <p className="text-amber-500 text-lg font-medium">Plus de 10 ans d'expérience</p>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                MB Serrurier <span className="text-amber-500">Serrurier Paris</span>
              </h1>

              <p className="text-xl mb-4 text-stone-300 leading-relaxed">
                <strong>
                  MB Serrurier intervient 24h/24 dans toute l'Île-de-France pour tous vos besoins en serrurerie,
                  dépannage, installation et sécurisation !
                </strong>
              </p>

              <p className="text-lg mb-6 text-stone-400">
                Choisir MB Serrurier, c'est l'assurance d'avoir des travaux bien faits !<br />
                <span className="text-amber-500 font-semibold">Élu Artisan de l'année par les pages jaunes !</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                href="#services"
                className="text-white hover:text-amber-500 transition-colors font-medium uppercase text-sm"
                >
                  <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold text-lg px-8 py-4 bg-transparent"
                  >
                    Nos services →
                  </Button>
                </Link>
                <Link
                href="#devis"
                className="text-white hover:text-amber-500 transition-colors font-medium uppercase text-sm"
                >
                  <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-800 font-bold text-lg px-8 py-4 bg-transparent"
                  >
                    Demander un Devis →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-amber-500 font-medium">Nous appeler ?</p>
                      <p className="text-2xl font-bold">07 59 49 06 21</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-amber-500 font-medium">Nous poser une question</p>
                      <p className="text-lg font-semibold">mbserrurier@yahoo.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <Flame className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-amber-500 font-medium">DES PRIX IMBATTABLES GARANTIS !</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <div className="w-16 h-1 bg-amber-500 mb-4"></div>
                <h2 className="text-4xl font-bold text-slate-800 mb-4">
                  Serrurier Paris – Votre Expert en Sécurité Serrurerie
                </h2>
              </div>

              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p className="text-lg">
                  <strong>MB Serrurier</strong> est votre partenaire de confiance pour tous vos besoins en serrurerie
                  dans toute l'<strong>Île-de-France</strong>. Forte de <strong>plus de 10 années d'expérience</strong>,
                  notre entreprise s'est imposée comme une référence dans le domaine de la sécurité.
                </p>

                <p>
                  Nous intervenons <strong>24h/24 et 7j/7</strong> pour tous vos dépannages d'urgence : porte claquée,
                  serrure bloquée, clé cassée ou perdue. Notre équipe de professionnels qualifiés et assurés garantit
                  une intervention rapide et efficace, généralement en moins de 30 minutes.
                </p>

                <p>
                  Au-delà du dépannage d'urgence, MB Serrurier vous accompagne dans tous vos projets de sécurisation :
                  installation de serrures haute sécurité, blindage de porte, systèmes de contrôle d'accès, et bien plus
                  encore.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-stone-50 rounded-lg">
                    <div className="text-3xl font-bold text-amber-500">500+</div>
                    <div className="text-sm text-stone-600">Interventions réalisées</div>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded-lg">
                    <div className="text-3xl font-bold text-amber-500">10+</div>
                    <div className="text-sm text-stone-600">Années d'expérience</div>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded-lg">
                    <div className="text-3xl font-bold text-amber-500">24h/24</div>
                    <div className="text-sm text-stone-600">Service d'urgence</div>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded-lg">
                    <div className="text-3xl font-bold text-amber-500">100%</div>
                    <div className="text-sm text-stone-600">Clients satisfaits</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/porte.png"
                alt="Poignée de porte moderne avec serrure"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
                quality={100}
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-slate-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6" />
                  <div>
                    <div className="font-bold">Certifié A2P</div>
                    <div className="text-sm">Serrures haute sécurité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Nos Services d'Expert</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              MB Serrurier vous propose une gamme complète de services professionnels pour sécuriser votre domicile ou
              votre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-t-4 border-t-amber-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-800 text-xl">Dépannage d'Urgence 24h/24</CardTitle>
                <CardDescription className="text-stone-600">
                  Intervention rapide pour tous vos problèmes de serrurerie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Ouverture de porte sans destruction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Extraction de clé cassée</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Déblocage de serrure</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Remplacement d'urgence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-t-4 border-t-amber-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-800 text-xl">Installation de Serrures</CardTitle>
                <CardDescription className="text-stone-600">
                  Serrures haute sécurité et systèmes de contrôle d'accès
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Serrures multipoints A2P</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Serrures connectées</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Cylindres de haute sécurité</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Contrôle d'accès par badge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-t-4 border-t-amber-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-800 text-xl">Sécurisation Avancée</CardTitle>
                <CardDescription className="text-stone-600">Blindage et renforcement de vos accès</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Blindage de porte certifié</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Barres de seuil anti-effraction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Systèmes d'alarme</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Audit sécurité gratuit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-t-4 border-t-amber-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-800 text-xl">Réparation & Maintenance</CardTitle>
                <CardDescription className="text-stone-600">
                  Entretien et réparation de tous types de serrures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Réparation de mécanismes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Changement de cylindre</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Maintenance préventive</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Garantie sur travaux</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-t-4 border-t-amber-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-800 text-xl">Reproduction de Clés</CardTitle>
                <CardDescription className="text-stone-600">Service de duplication et programmation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Clés traditionnelles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Clés de sécurité brevetées</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Badges et cartes d'accès</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Télécommandes de portail</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-t-4 border-t-amber-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-800 text-xl">Conseil & Expertise</CardTitle>
                <CardDescription className="text-stone-600">
                  Accompagnement personnalisé pour vos projets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Audit sécurité gratuit</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Conseils personnalisés</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Devis détaillé gratuit</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>Solutions sur mesure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Devis Section */}
      <section id="devis" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Demandez Votre Devis Gratuit</h2>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto">
              Obtenez rapidement un devis personnalisé et gratuit. Réponse garantie sous 2 heures en journée.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-slate-800">Formulaire de Demande de Devis</CardTitle>
                <CardDescription className="text-stone-600">
                  Tous les champs marqués d'un * sont obligatoires
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-800">Nom complet *</label>
                      <Input
                        type="text"
                        placeholder="Votre nom et prénom"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-800">Téléphone *</label>
                      <Input
                        type="tel"
                        placeholder="06 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-800">Email</label>
                    <Input
                      type="email"
                      placeholder="votre.email@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-800">Type de service *</label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="border-stone-300 focus:border-amber-500 focus:ring-amber-500">
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dépannage">Dépannage d'urgence</SelectItem>
                          <SelectItem value="Installation de serrure">Installation de serrure</SelectItem>
                          <SelectItem value="Sécurisation">Sécurisation</SelectItem>
                          <SelectItem value="Réparation">Réparation</SelectItem>
                          <SelectItem value="Reproduction de clés">Reproduction de clés</SelectItem>
                          <SelectItem value="Conseil sécurité">Conseil sécurité</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-800">Urgence *</label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                      >
                        <SelectTrigger className="border-stone-300 focus:border-amber-500 focus:ring-amber-500">
                          <SelectValue placeholder="Niveau d'urgence" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Immédiate (dans l'heure)">Immédiate (dans l'heure)</SelectItem>
                          <SelectItem value="Urgent (dans la journée)">Urgent (dans la journée)</SelectItem>
                          <SelectItem value="Normal (sous 48h)">Normal (sous 48h)</SelectItem>
                          <SelectItem value="Planifié (dans la semaine)">Planifié (dans la semaine)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-800">Description de votre demande *</label>
                    <Textarea
                      placeholder="Décrivez votre problème ou votre besoin en détail..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg py-4 shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer ma demande de devis
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section id="temoignages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Témoignages Clients</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              La satisfaction de nos clients est notre priorité absolue. Découvrez leurs témoignages.
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Contactez-nous</h2>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto">
              Besoin d'un serrurier maintenant ? Nous intervenons rapidement sur Paris et toute la région parisienne.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Urgence 24h/24</h3>
                <p className="text-stone-600 mb-4">Disponible tous les jours</p>
                <p className="text-3xl font-bold text-amber-500">07 59 49 06 21</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Email</h3>
                <p className="text-stone-600 mb-4">Pour vos demandes de devis</p>
                <p className="text-lg text-slate-800 font-semibold">mbserrurier@yahoo.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Zone d'intervention</h3>
                <p className="text-stone-600 mb-4">Toute l'Île-de-France</p>
                <p className="text-lg text-slate-800 font-semibold">
                  Siège social :<br />
                  25 Rue de Ponthieu
                  <br />
                  75008 Paris
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="MB Serrurier Logo"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-amber-500 object-cover"
                  quality={100}
                />
                <div>
                  <h3 className="text-xl font-bold">MB SERRURIER</h3>
                  <p className="text-amber-500 text-sm">La sécurité à votre portée</p>
                </div>
              </div>
              <p className="text-stone-300 mb-4 leading-relaxed">
                Votre serrurier de confiance en Île-de-France. Intervention rapide 24h/24 pour tous vos problèmes de
                serrurerie.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white text-lg">Nos Services</h4>
              <ul className="space-y-3 text-stone-300">
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Dépannage d'urgence 24h/24</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Installation de serrures</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Sécurisation avancée</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Réparation & maintenance</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Reproduction de clés</li>
                <li className="hover:text-amber-500 transition-colors cursor-pointer">Conseil sécurité</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white text-lg">Contact</h4>
              <div className="space-y-4 text-stone-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-amber-500" />
                  <div>
                    <p className="font-semibold">07 59 49 06 21</p>
                    <p className="text-sm">Urgence 24h/24</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-amber-500" />
                  <p>mbserrurier@yahoo.com</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-amber-500" />
                  <div>
                    <p>25 Rue de Ponthieu</p>
                    <p>75008 Paris</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white text-lg">Horaires</h4>
              <div className="text-stone-300 space-y-3">
                <div>
                  <p className="font-semibold text-amber-500 mb-2">Ouvert 24h/24</p>
                  <p className="text-sm">Intervention immédiate</p>
                  <p className="text-sm">Toute l'Île-de-France</p>
                </div>
                <div>
                  <p className="font-semibold">Rendez-vous :</p>
                  <p className="text-sm">Lun-Dim : 24h/24</p>
                  <p className="text-sm">Urgences acceptées</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-stone-400">
            <p>
              &copy; 2024 MB Serrurier. Tous droits réservés. | Artisan qualifié et assuré | SIRET : 123 456 789 00012
            </p>
            <p className="mt-2 text-sm">
              Intervention rapide dans toute l'Île-de-France • Ouvert 24h/24 • Devis gratuit • Garantie sur tous travaux
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
