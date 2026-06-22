import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, Database, Users, Briefcase, Layers, Route, FileCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroAerial from "@/assets/hero-aerial.jpg";
import img1041 from "@/assets/IMG_1041.jpeg";
import img6363 from "@/assets/IMG_6363.jpeg";
import img7081 from "@/assets/IMG_7081.jpeg";

const HERO_VIDEO = "https://cdn.jsdelivr.net/gh/Eugene-TechXplo-SA/videosforwebsites@main/Drone_flying_over_small_town_202606101031.mp4";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Eco-South-Website" : "";

export const metadata = {
  title: "Eco South Partnership — Reimagine Cities, Towns & Villages",
  description: "Multidisciplinary urban and rural planning consultancy bridging spatial vision and practical project implementation across Southern Africa.",
};

const PILLARS = [
  { icon: Compass, label: "Strategic Spatial Town Planning & Urban Regeneration", copy: "Statutory applications, land use management, township economies, and urban regeneration consulting." },
  { icon: Database, label: "Advanced GIS Services & Spatial Data Analytics", copy: "Geospatial modelling, site selection, mapping, database management, and high-end visualisation." },
  { icon: Users, label: "Development, Social Facilitation & Participatory Creation", copy: "Social facility and infrastructure planning, capacity building, and community engagement." },
  { icon: Briefcase, label: "Economic Development & Practice Consulting", copy: "Investment facilitation, local economic sustainability, market analysis, and development strategies." },
  { icon: Layers, label: "Survey Technology & Sub-Surface Mapping", copy: "Non-intrusive underground infrastructure assessment and geological risk mitigation." },
  { icon: Route, label: "Transport Planning", copy: "Movement networks, integration, and accessibility supporting spatial transformation." },
  { icon: FileCheck, label: "Conveyancing Support Services", copy: "Administrative coordination, property transfer support, and land-use statutory compliance." },
];

const STATS = [
  { value: "7", label: "Service Pillars" },
  { value: "2", label: "Regional Hubs" },
  { value: "20+", label: "Years Practice" },
  { value: "SACPLAN", label: "Registered" },
];

export default function HomePage() {
  return (
    <SiteLayout overHero>
      {/* Hero */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <video
          src={HERO_VIDEO}
          autoPlay
          muted={true}
          loop
          playsInline
          poster={heroAerial.src}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />

        <div className="container-page relative flex min-h-[100svh] flex-col justify-center pt-32 pb-24 text-white">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Gauteng · Eastern Cape · South Africa
          </span>

          <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Reimagine Global South Cities,
            <br />
            Towns, and <span className="text-primary-glow">Villages.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85">
            A multidisciplinary urban and rural planning consultancy bridging the
            gap between high-level spatial vision and practical project implementation.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elevated transition hover:bg-primary-glow"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Contact Our Team
            </Link>
          </div>

          <div className="mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro band */}
      <section className="bg-background">
        <div className="container-page grid gap-10 py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">At the centre of the built environment</span>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Spatial equity and ecological integrity are <span className="text-primary">inseparable.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Eco South Partnership operates on a unique dual-locality model,
              bridging the high-velocity urban complexity of Sandton with the
              profound environmental heritage of the Eastern Cape. We treat
              every blueprint as a contract with the future — synthesising
              data-driven spatial planning with social engineering to create
              resilient, equitable, and sustainable habitats.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow"
            >
              Read our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars (dark) */}
      <section className="relative bg-ink text-ink-foreground">
        <div className="container-page py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-glow">
                — Core Service Pillars
              </span>
              <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
                Expert consultancy integrating technical rigor with environmental stewardship.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.slice(0, 6).map((p, i) => (
              <div key={p.label} className="group relative bg-ink p-8 transition hover:bg-white/[0.04]">
                <span className="text-xs font-mono text-primary-glow/80">
                  {String(i + 1).padStart(2, "0")} —
                </span>
                <p.icon className="mt-4 h-7 w-7 text-primary-glow" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl font-semibold">{p.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/65">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-background">
        <div className="container-page py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Selected Work</span>
              <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
                A portfolio spanning <span className="text-primary">our work and community.</span>
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow"
            >
              View the gallery <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 grid-cols-1 auto-rows-[280px] md:grid-cols-6 md:auto-rows-[240px]">
            <FeatureCard
              className="md:col-span-4 md:row-span-2"
              img={img6363.src}
              tag="Spatial Planning"
              title="Urban Regeneration Plan — East London CBD"
            />
            <FeatureCard
              className="md:col-span-2"
              img={img7081.src}
              tag="Transport"
              title="Integrated Transport Corridor"
            />
            <FeatureCard
              className="md:col-span-2"
              img={img1041.src}
              tag="Community"
              title="Social Facilitation Engagement — Mthatha Region"
            />
          </div>
        </div>
      </section>

      {/* Land Development Application Section */}
      <section className="bg-ink/95 text-ink-foreground border-t border-primary/30">
        <div className="container-page py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column: Text Content */}
            <div>
              <span className="eyebrow text-primary-glow">Land Development</span>
              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Apply for Land Development
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-foreground/80">
                Ready to develop your land? Download our application form, complete all sections, and email it back to us with any supporting documents.
              </p>
              <p className="mt-6 text-sm font-medium text-ink-foreground/90">
                Send completed forms to:{" "}
                <a href="mailto:MawethuP@ecosouth.net.za" className="text-primary-glow hover:underline font-semibold">
                  MawethuP@ecosouth.net.za
                </a>
              </p>
            </div>

            {/* Right Column: Download Card */}
            <div className="flex flex-col items-start rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-soft sm:p-10 lg:items-center lg:text-center">
              <div className="w-full flex flex-col items-start lg:items-center">
                <a
                  href={`${basePath}/ECO-SOUTH-LAND-DEVELOPMENT-APPLICATION.pdf`}
                  download="ECO-SOUTH-LAND-DEVELOPMENT-APPLICATION.pdf"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elevated transition hover:bg-primary-glow lg:w-auto"
                >
                  Download Application Form →
                </a>
                <p className="mt-4 text-xs text-ink-foreground/60">
                  For queries, contact Mawethu Pepu · 067 055 4646
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="container-page py-24">
          <div className="overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] p-10 sm:p-16">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">Get in touch</span>
                <h2 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
                  Let's build the next chapter — together.
                </h2>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Link
                  href="/contact"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-soft transition hover:bg-white/90"
                >
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-sm text-white/80">mawethup@ecosouth.net.za · 067 055 4646</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function FeatureCard({
  img,
  tag,
  title,
  className = "",
}: {
  img: string;
  tag: string;
  title: string;
  className?: string;
}) {
  return (
    <article className={`group relative overflow-hidden rounded-2xl bg-ink ${className}`}>
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
      <div className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-primary">
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </article>
  );
}
