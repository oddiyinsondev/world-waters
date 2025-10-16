"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Droplets,
  Leaf,
  Sprout,
  Target,
  Award,
  Users,
  Settings,
  Wrench,
  Tractor,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: "", phone: "", message: "" })
        }, 3000)
      } else {
        setError("Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.")
      }
    } catch (err) {
      setError("Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.")
    } finally {
      setIsLoading(false)
    }
  }

  const products = [
    {
      id: 1,
      name: "Tomchilatgichlar",
      category: "Asosiy",
      description: "Turli xil oraliq va suv sarfi bilan yuqori sifatli tomchilatgichlar",
      image: "/drip-irrigation-emitters-close-up.jpg",
      features: ["20cm, 30cm, 40cm oraliqlar", "Tiqilishga chidamli", "Uzoq xizmat muddati"],
    },
    {
      id: 2,
      name: "Nasoslar",
      category: "Asosiy",
      description: "Turli quvvatdagi suv nasos tizimlari",
      image: "/water-pump-irrigation-system.jpg",
      features: ["Energiya tejamkor", "Yuqori bosim", "Ishonchli ishlash"],
    },
    {
      id: 3,
      name: "Filtr tizimlari",
      category: "Qo'shimcha",
      description: "Suvni tozalash uchun zamonaviy filtr tizimlari",
      image: "/water-filter-system-irrigation.jpg",
      features: ["Avtomatik tozalash", "Yuqori samaradorlik", "Oson texnik xizmat"],
    },
    {
      id: 4,
      name: "Suv o'lchov qurilmalari",
      category: "Qo'shimcha",
      description: "Suv sarfini aniq o'lchash uchun qurilmalar",
      image: "/water-flow-meter-digital.jpg",
      features: ["Raqamli displey", "Aniq o'lchash", "Uzoq muddatli kafolat"],
    },
    {
      id: 5,
      name: "Quvurlar va fitinglar",
      category: "Qo'shimcha",
      description: "PE quvurlar va ulanish elementlari",
      image: "/irrigation-pipes-and-fittings.jpg",
      features: ["UV bardosh", "Yuqori sifat", "Turli diametrlar"],
    },
    {
      id: 6,
      name: "Boshqaruv tizimlari",
      category: "Premium",
      description: "Avtomatlashtirilgan sug'orish boshqaruv tizimlari",
      image: "/irrigation-control-system-digital.jpg",
      features: ["Smartfon boshqaruvi", "Vaqt dasturlash", "Sensor integratsiyasi"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <HeroCarousel />

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">
            Nima uchun tomchilib sug'orish?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Suvni 50% gacha tejaydi</h3>
              <p className="text-muted-foreground leading-relaxed">
                An'anaviy sug'orish usullariga nisbatan suv sarfini sezilarli darajada kamaytiradi
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                <Sprout className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Hosildorlikni oshiradi</h3>
              <p className="text-muted-foreground leading-relaxed">
                O'simliklar ildiziga to'g'ridan-to'g'ri suv va ozuqa moddalarini yetkazadi
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ekologik toza</h3>
              <p className="text-muted-foreground leading-relaxed">
                Suv resurslarini tejash orqali atrof-muhitni muhofaza qilishga hissa qo'shadi
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Biz haqimizda</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                World Waters loyihasi qishloq xo'jaligida suv resurslarini samarali boshqarish va ekologik barqaror
                yechimlarni taqdim etishga qaratilgan. Biz fermer xo'jaliklari va agrobiznes korxonalariga zamonaviy
                tomchilib sug'orish texnologiyalarini joriy etish orqali suv tejash va hosildorlikni oshirishga yordam
                beramiz.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Har bir tomchi suv qimmatli resurs. Biz bu resursni oqilona va samarali ishlatishga intilamiz.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/modern-drip-irrigation-system-in-agricultural-fiel.jpg"
                alt="Drip irrigation system"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Technology Info */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Tomchilib sug'orish texnologiyasi</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tomchilib sug'orish — bu suvni to'g'ridan-to'g'ri o'simlik ildiziga tomchi-tomchi qilib yetkazib
                beruvchi zamonaviy sug'orish usuli. Bu texnologiya suv sarfini 40-50% gacha kamaytiradi va
                o'simliklarning rivojlanishini yaxshilaydi.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-semibold mb-2">Aniqlik</h4>
                  <p className="text-sm text-muted-foreground">Har bir o'simlikga kerakli miqdorda suv</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <Award className="h-10 w-10 text-secondary mb-4" />
                  <h4 className="font-semibold mb-2">Samaradorlik</h4>
                  <p className="text-sm text-muted-foreground">Yuqori hosildorlik va kam xarajat</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <Users className="h-10 w-10 text-accent mb-4" />
                  <h4 className="font-semibold mb-2">Qulaylik</h4>
                  <p className="text-sm text-muted-foreground">Avtomatlashtirilgan boshqaruv tizimi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Bizning xizmatlarimiz</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Professional tomchilib sug'orish tizimlari o'rnatish va texnik xizmat ko'rsatish
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Tizimlarni o'rnatish</CardTitle>
                <CardDescription className="text-base">
                  To'liq tomchilib sug'orish tizimlarini loyihalash va o'rnatish
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Maydonni o'rganish va tahlil qilish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Individual loyiha ishlab chiqish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Professional o'rnatish xizmati</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Tizimni sozlash va ishga tushirish</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Texnik xizmat</CardTitle>
                <CardDescription className="text-base">Muntazam texnik xizmat va monitoring xizmatlari</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Tizimni muntazam tekshirish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Filtrlarni tozalash va almashtirish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Nosozliklarni tezkor bartaraf etish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Tizim samaradorligini monitoring qilish</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Tractor className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Individual yechimlar</CardTitle>
                <CardDescription className="text-base">Fermer xo'jaliklari uchun maxsus yechimlar</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Har xil ekin turlari uchun yechimlar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Avtomatlashtirilgan boshqaruv tizimlari</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Suv va o'g'it berish integratsiyasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Maslahat va o'qitish xizmatlari</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Mahsulotlar</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Tomchilib sug'orish tizimlari uchun yuqori sifatli mahsulotlar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    {product.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Biz bilan bog'laning</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Savollaringiz bormi? Biz sizga yordam berishga tayyormiz
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Xabar yuboring</CardTitle>
                <CardDescription>Formani to'ldiring va biz tez orada siz bilan bog'lanamiz</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ismingiz *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ismingizni kiriting"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon raqami *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+998 90 123 45 67"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Xabar *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Xabaringizni yozing..."
                      className="flex-1 min-h-[120px]"
                      disabled={isLoading}
                    />
                  </div>

                  {error && <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</div>}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90"
                    disabled={submitted || isLoading}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Xabar yuborildi!
                      </>
                    ) : isLoading ? (
                      <>Yuborilmoqda...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Xabar yuborish
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 h-full">
              <Card className="flex-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Telefon</CardTitle>
                  <CardDescription>Bizga qo'ng'iroq qiling</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">+998 99 504 09 92</p>
                  <p className="text-sm text-muted-foreground mt-1">Dushanba - Shanba: 9:00 - 18:00</p>
                </CardContent>
              </Card>

              <Card className="flex-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Bizga xat yozing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">info@worldwaters.uz</p>
                  <p className="text-sm text-muted-foreground mt-1">24 soat ichida javob beramiz</p>
                </CardContent>
              </Card>

              <Card className="flex-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Manzil</CardTitle>
                  <CardDescription>Bizni topib keling</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">Toshkent shahri</p>
                  <p className="text-sm text-muted-foreground mt-1">Chilonzor tumani, Bunyodkor ko'chasi 1-uy</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Bizning joylashuvimiz</h3>
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps?q=41.55126220277296,60.34079631508181&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
