import { createFileRoute } from "@tanstack/react-router";
import heroPistachio from "@/assets/hero-pistachio.jpg";
import storefront from "@/assets/storefront.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dolce Capo — Gelateria Artigianale a Palermo" },
      {
        name: "description",
        content:
          "Dolce Capo, gelateria artigianale nel cuore di Palermo. Pistacchio di Bronte, cannoli siciliani e brioche col tuppo. 4.9★ con oltre 5.610 recensioni.",
      },
      { property: "og:title", content: "Dolce Capo — Gelateria Artigianale a Palermo" },
      {
        property: "og:description",
        content:
          "Pura ossessione siciliana. Gelato artigianale, cannoli e brioche col tuppo in Via dei Candelai, Palermo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "IceCreamShop",
          name: "Dolce Capo",
          image: "/og-image.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via dei Candelai, 95/97",
            addressLocality: "Palermo",
            postalCode: "90134",
            addressCountry: "IT",
          },
          telephone: "+39 091 976 8817",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "5610",
          },
          openingHours: "Mo-Su 11:00-00:00",
        }),
      },
    ],
  }),
  component: Index,
});

const menu = [
  {
    n: "01",
    name: "Pistacchio Puro",
    origin: "Bronte",
    desc: "Tostatura lenta, un pizzico di sale marino di Trapani. La quintessenza della Sicilia.",
  },
  {
    n: "02",
    name: "Stracciatella d'Autore",
    origin: "Modica",
    desc: "Fior di latte cremoso con scaglie di cioccolato di Modica lavorato a freddo.",
  },
  {
    n: "03",
    name: "Cannolo Siciliano",
    origin: "Piana",
    desc: "Ricotta di pecora freschissima, scorza d'arancia candita e granella di cialda croccante.",
  },
  {
    n: "04",
    name: "Brioche col Tuppo",
    origin: "Vivi",
    desc: "Soffice e profumata allo zafferano. L'unico modo autentico di gustare il nostro gelato.",
  },
  {
    n: "05",
    name: "Gran Pistacchio",
    origin: "Etna",
    desc: "Doppia dose di pistacchio, granella croccante e cuore di crema mantecata al momento.",
  },
  {
    n: "06",
    name: "Gelato all'Anguria",
    origin: "Bagheria",
    desc: "Anguria siciliana, gelsomino e gocce di cioccolato. Il dolce dell'estate palermitana.",
  },
];

const reviews = [
  {
    quote:
      "Il gelato alla frutta non sa di frutta ma è proprio solo frutta, un incredibile sapore di artigianato e qualità.",
    author: "Giuseppe Li Vigni",
    role: "Local Guide · 116 recensioni",
  },
  {
    quote:
      "Ci hanno accolti con immensa gentilezza e professionalità. Ci hanno fatto assaggiare i gusti, cosa che rarissimamente fanno gli altri in città.",
    author: "Piergaetano Marrone",
    role: "Recensito 6 mesi fa",
  },
  {
    quote:
      "Il gusto limone è spettacolare e il cannolo con la ricotta fresca è squisito. Da provare assolutamente.",
    author: "Recensione verificata",
    role: "Cliente Google",
  },
];

function Index() {
  return (
    <div className="bg-background text-foreground font-sans selection:bg-pistachio/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <span className="font-mono text-[10px] uppercase tracking-widest hidden md:block">
          Palermo · Via dei Candelai
        </span>
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <a href="#top" className="font-display text-2xl italic tracking-tight">
            Dolce Capo
          </a>
        </div>
        <div className="flex gap-6 text-[11px] uppercase tracking-wider font-medium">
          <a href="#menu" className="hover:text-terracotta transition-colors">
            Menu
          </a>
          <a href="#storia" className="hover:text-terracotta transition-colors hidden sm:inline">
            Storia
          </a>
          <a href="#contatti" className="hover:text-terracotta transition-colors">
            Contatti
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 overflow-hidden py-20"
      >
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-terracotta)_0%,_transparent_70%)]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <div className="inline-block animate-reveal" style={{ animationDelay: "100ms" }}>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-terracotta mb-4 block">
              L'Artigianato del Freddo · Dal 1985
            </span>
          </div>
          <h1
            className="font-display text-6xl sm:text-7xl md:text-9xl mb-8 leading-[0.85] text-balance animate-reveal"
            style={{ animationDelay: "200ms" }}
          >
            Pura <i className="font-normal">Ossessione</i> Siciliana
          </h1>

          <div
            className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16 animate-reveal"
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative group">
              <img
                src={heroPistachio}
                alt="Coppa di gelato al pistacchio di Bronte di Dolce Capo"
                width={1024}
                height={1024}
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full ring-1 ring-black/5 shadow-2xl transition-transform duration-700 group-hover:scale-105 animate-float"
              />
              <div className="absolute -bottom-2 -right-2 font-mono text-[10px] uppercase tracking-widest bg-foreground text-background px-3 py-1.5 rounded-full">
                Il Pistacchio
              </div>
            </div>
            <div className="max-w-xs text-left">
              <p className="text-lg leading-relaxed text-pretty italic mb-6">
                "Un momento di sospensione tra i vicoli di Palermo, dove il tempo si ferma per un
                cucchiaio di perfezione."
              </p>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className="text-terracotta text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[10px] tracking-tight">
                  4,9/5 · 5.610 RECENSIONI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-32 px-6 border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-6">
            <div className="max-w-md">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta mb-4 block">
                Il Menu
              </span>
              <h2 className="font-display text-5xl md:text-6xl mb-4 italic leading-[0.95]">
                I Nostri Classici
              </h2>
              <p className="text-sm opacity-70 leading-relaxed">
                Ogni gusto è una narrazione del territorio, mantecato giornalmente con latte di
                montagna e ingredienti selezionati a chilometro zero.
              </p>
            </div>
            <span className="font-mono text-[10px] opacity-40">CARTA · ESTATE MMXXVI</span>
          </header>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {menu.map((item) => (
              <article key={item.n} className="group flex gap-6 pb-8 border-b border-border">
                <span className="font-mono text-xs text-terracotta mt-2">{item.n}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-2 gap-3">
                    <h3 className="font-display text-2xl md:text-3xl">{item.name}</h3>
                    <div className="h-px flex-1 bg-border" />
                    <span className="font-mono text-xs uppercase tracking-wider opacity-70">
                      {item.origin}
                    </span>
                  </div>
                  <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="storia" className="py-32 px-6 bg-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta mb-4 block">
              La Storia
            </span>
            <h2 className="font-display text-5xl md:text-6xl italic leading-[0.95]">
              Quattro generazioni di gelato.
            </h2>
          </div>
          <div className="md:col-span-3 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Nasciamo nel cuore antico di Palermo, dove i profumi del mercato della Vucciria si
              mescolano al canto del mare. Dolce Capo è un piccolo laboratorio dove ogni
              mantecazione è una promessa: ingredienti veri, tempo lento, mani esperte.
            </p>
            <p className="font-display italic text-2xl text-terracotta">
              "Non vendiamo gelato. Vendiamo un pomeriggio siciliano."
            </p>
            <p>
              Selezioniamo personalmente il pistacchio di Bronte, il cioccolato di Modica, la
              ricotta di pecora dei pascoli delle Madonie. Ogni mattina alle cinque siamo già al
              banco a impastare.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 bg-pistachio/10 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="mb-6 flex justify-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="text-terracotta text-xl">
                  ★
                </span>
              ))}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
              4,9 su 5 · 5.610 recensioni Google
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {reviews.map((r, i) => (
              <figure key={i} className="flex flex-col">
                <blockquote className="font-display text-2xl md:text-3xl italic leading-tight mb-8 flex-1">
                  "{r.quote}"
                </blockquote>
                <figcaption>
                  <div className="text-sm font-medium">{r.author}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest opacity-50 mt-1">
                    {r.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="contatti" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta mb-4 block">
              Vieni a Trovarci
            </span>
            <h2 className="font-display text-5xl md:text-7xl italic mb-10 leading-[0.95]">
              Ci vediamo a Palermo.
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs uppercase opacity-50 mb-1">Indirizzo</p>
                <p className="text-xl">
                  Via dei Candelai, 95/97
                  <br />
                  90134 Palermo, Italia
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase opacity-50 mb-1">Orari</p>
                <p className="text-lg">
                  Aperto tutti i giorni
                  <br />
                  dalle 11:00 alle 00:00
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase opacity-50 mb-1">Telefono</p>
                <a href="tel:+390919768817" className="text-lg hover:text-terracotta transition-colors">
                  091 976 8817
                </a>
              </div>
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Via+dei+Candelai+95+Palermo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-full text-xs uppercase tracking-widest font-medium hover:bg-terracotta transition-colors"
                >
                  Indicazioni
                </a>
                <a
                  href="tel:+390919768817"
                  className="inline-flex items-center px-6 py-3 border border-foreground/20 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  Chiamaci
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={storefront}
              alt="Vetrina della gelateria Dolce Capo in Via dei Candelai, Palermo"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-6 -right-6 bg-terracotta text-background p-8 rounded-2xl shadow-2xl max-w-[60%]">
              <p className="font-display text-2xl md:text-3xl italic leading-tight">
                Ci vediamo lì.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-xl italic">Dolce Capo</span>
          <span className="font-mono text-[9px] opacity-40 uppercase tracking-tight">
            © MMXXVI · Palermo Artigianale · Tutti i diritti riservati
          </span>
        </div>
      </footer>
    </div>
  );
}
