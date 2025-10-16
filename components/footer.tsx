import Link from "next/link"
import { Instagram, Send, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">World Waters</h3>
            <p className="text-sm text-muted-foreground">
              Har tomchi — hayot manbai. Tomchilib sug'orish tizimlari bilan suvni tejang.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tez havolalar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Xizmatlar
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mahsulotlar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Biz bilan bog'laning</h4>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-muted-foreground">Tel: +998 90 123 45 67</p>
              <p className="text-sm text-muted-foreground">Email: info@worldwaters.uz</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2025 World Waters. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
