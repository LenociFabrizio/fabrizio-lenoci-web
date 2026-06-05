# Fabrizio Lenoci — Portfolio personale

Portfolio personale di **Fabrizio Lenoci**, Sviluppatore Software & Web Developer.
Costruito con **Next.js 14 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS** e **Framer Motion**.

---

## 🚀 Avvio rapido in locale

```bash
npm install
npm run dev
```

Apri http://localhost:3000

```bash
npm run build && npm run start   # build di produzione
```

---

## ✏️ Cosa modificare (parti da qui)

Tutti i contenuti sono centralizzati in **4 file**: non servono modifiche ai componenti.

| Cosa | File |
|------|------|
| Nome, bio, social, statistiche, telefono/WhatsApp, P.IVA, dominio | `src/data/site.ts` |
| **Progetti del portfolio / casi studio** (aggiungi/modifica/elimina) | `src/data/projects.ts` |
| **Servizi, processo, FAQ, testimonianze** | `src/data/content.ts` |
| Competenze tecniche (sezione "Tecnologie") | `src/data/skills.ts` |

> ⚙️ **Dati da compilare per primi** in `src/data/site.ts`: `phone` / `whatsapp`
> (numero internazionale senza `+` né spazi, es. `393331234567`), `vatNumber`
> e `url` (il dominio reale). Finché `whatsapp`/`phone` sono vuoti i relativi
> pulsanti **non vengono mostrati** — nessun numero finto online.

### Aggiungere un nuovo progetto (caso studio)

Apri `src/data/projects.ts` e copia il blocco **MODELLO** in fondo all'array `projects`:

```ts
{
  slug: "nome-progetto",            // identificatore univoco
  title: "Nome Progetto",
  kind: "reale",                    // "reale" | "demo"
  category: "sito-web",             // libera — il filtro si crea da solo
  client: "Nome cliente — Città",
  sector: "Settore di attività",
  year: "2026",
  description: "Sintesi in una riga per la card.",
  challenge: "Qual era il problema / l'esigenza del cliente.",
  solution: "Cosa hai realizzato, spiegato in parole semplici.",
  features: ["Funzionalità 1", "Funzionalità 2"],
  results: ["Vantaggio concreto 1", "Vantaggio concreto 2"],
  stack: ["Next.js", "TypeScript", "Tailwind"],
  image: "/projects/nome-progetto.webp",   // opzionale
  gradient: "linear-gradient(135deg,#b6a4ff,#86e6ff)",
  live: "https://...",              // opzionale
  repo: "https://github.com/...",   // opzionale
  testimonial: {                    // opzionale — SOLO se reale
    quote: "Testo della recensione.",
    author: "Nome Cognome",
    role: "Ruolo, Azienda",
  },
},
```

➜ I **filtri per categoria si generano automaticamente** dai progetti (compaiono
   solo quando ci sono almeno due categorie diverse).
➜ Cliccando una card si apre il **dettaglio del caso studio** (sfida, soluzione,
   funzionalità, vantaggi, testimonianza).

### Testimonianze

In `src/data/content.ts`, l'array `testimonials` parte **vuoto**: la sezione
"Dicono di me" resta nascosta finché non inserisci recensioni **reali**.
Stesso principio per `projects[].testimonial`. Non inserire mai recensioni finte.

### Aggiungere lo screenshot di un progetto

1. Salva l'immagine in `public/projects/` (consigliato `.webp`, dimensione 1600×1000)
2. Aggiungi `image: "/projects/nome-file.webp"` all'oggetto del progetto
3. `next/image` ottimizza automaticamente formato, dimensioni e lazy-loading

---

## 🗂 Struttura del progetto

```
src/
├─ app/
│  ├─ layout.tsx        # SEO, font, JSON-LD Person schema
│  ├─ page.tsx          # composizione delle sezioni
│  ├─ globals.css       # design tokens + utility (glass, glow, grain)
│  ├─ sitemap.ts        # SEO — generato da site.url
│  └─ robots.ts         # SEO
├─ components/
│  ├─ Navbar.tsx        Hero.tsx       Marquee.tsx
│  ├─ Portfolio.tsx     ProjectCard.tsx
│  ├─ About.tsx         Skills.tsx     Contact.tsx   Footer.tsx
│  └─ ui/
│     ├─ GlowBackground.tsx   GrainOverlay.tsx
│     ├─ Reveal.tsx           SectionHeading.tsx   MagneticButton.tsx
├─ data/
│  ├─ site.ts           # ← TUTTI i tuoi dati personali
│  ├─ projects.ts       # ← I TUOI progetti
│  └─ skills.ts         # ← Le TUE competenze
└─ lib/
   └─ motion.ts         # varianti Framer Motion condivise
```

---

## 🔍 SEO

Già configurato per il nome "Fabrizio Lenoci":

- **Meta title / description / Open Graph / Twitter Card** in `layout.tsx`
- **Structured Data (JSON-LD)** con schema.org/Person — include nome, ruolo,
  istruzione (Diploma in Informatica, Laurea in Informatica e Produzione del Software),
  competenze e profili social.
- **Sitemap** e **robots.txt** generati automaticamente
- **Header di sicurezza** in `next.config.mjs`

⚠ **Prima del deploy aggiorna `site.url` in `src/data/site.ts`** con il tuo
dominio reale (es. `https://fabriziolenoci.dev`). Tutti i meta vengono
derivati da quel valore.

---

## 🚢 Deploy su Vercel

Il progetto è pronto per Vercel senza alcuna configurazione aggiuntiva.

### Procedura completa

**1. Pubblica il codice su GitHub**

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<tuo-username>/fabrizio-lenoci-portfolio.git
git push -u origin main
```

**2. Importa il progetto su Vercel**

1. Vai su https://vercel.com/new
2. Clicca **Import Git Repository** e seleziona il tuo repo
3. Vercel rileva automaticamente Next.js — lascia tutte le impostazioni di default:
   - Framework Preset: **Next.js**
   - Build Command: `next build` (auto)
   - Output Directory: `.next` (auto)
   - Install Command: `npm install` (auto)
4. Clicca **Deploy** ✅

In ~1 minuto avrai un URL tipo `https://fabrizio-lenoci-portfolio.vercel.app`.

**3. Aggiorna l'URL nel codice**

Dopo il primo deploy, in `src/data/site.ts` imposta il valore corretto di `url`,
poi fai commit + push: Vercel rideploya automaticamente.

```ts
url: "https://il-tuo-url.vercel.app",
```

### Collegare un dominio personalizzato (anche in futuro)

1. Acquista il dominio (Namecheap, Cloudflare, Aruba, ecc.)
2. Nel pannello Vercel, apri il progetto → **Settings** → **Domains**
3. Inserisci il tuo dominio (es. `fabriziolenoci.dev`) e clicca **Add**
4. Vercel ti mostra i **record DNS** da configurare presso il registrar:
   - Tipo `A` → `76.76.21.21` (per il dominio nudo)
   - Tipo `CNAME` → `cname.vercel-dns.com` (per `www`)
5. Aggiungili nel pannello DNS del registrar. Propagazione: 5 min – 1 h.
6. SSL/HTTPS viene attivato in automatico (Let's Encrypt).
7. Aggiorna `site.url` con il nuovo dominio e fai push.

### Deploy via CLI (opzionale)

```bash
npm i -g vercel
vercel login
vercel              # primo deploy (preview)
vercel --prod       # deploy in produzione
```

---

## ⚡ Performance

- Font caricati via Fontshare con `preconnect`
- Immagini ottimizzate via `next/image` (AVIF / WebP automatici)
- Animazioni rispettano `prefers-reduced-motion`
- Lighthouse target: 95+ su tutte le metriche

---

## 📦 Form di contatto

`Contact.tsx` gestisce lo stato lato client. Per inviare davvero le mail,
crea una route `app/api/contact/route.ts` con un provider come Resend,
Formspree o Web3Forms.

---

Realizzato da Fabrizio Lenoci ✦
