"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/water-droplets-on-green-leaves-close-up-nature.jpg",
    title: "Har tomchi — hayot manbai",
    description: "Tomchilib sug'orish tizimlari bilan suvni tejang va hosildorlikni oshiring",
  },
  {
    image: "/modern-drip-irrigation-system-in-agricultural-fiel.jpg",
    title: "Zamonaviy sug'orish texnologiyalari",
    description: "Professional tizimlar o'rnatish va texnik xizmat ko'rsatish",
  },
  {
    image: "/irrigation-pipes-and-fittings.jpg",
    title: "Yuqori sifatli mahsulotlar",
    description: "Ishonchli va uzoq muddatli xizmat ko'rsatadigan uskunalar",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">{slides[currentSlide].title}</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-balance text-white/90">
          {slides[currentSlide].description}
        </p>
        <Button size="lg" className="text-lg px-8 py-6" onClick={scrollToAbout}>
          Batafsil ma'lumot
        </Button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
