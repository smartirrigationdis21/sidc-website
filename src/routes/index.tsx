import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Droplets, Gauge, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { InquiryBand, SiteLayout } from "@/components/site-layout";
import heroImage from "@/assets/irrigation-hero.jpg";
import dripImage from "@/assets/drip-irrigation.png";
import waterImage from "@/assets/water-feature.png";
import rainImage from "@/assets/rainwater-harvesting.png";
import productLogosSrc from "@/assets/product-logos.png";

const showcaseSlides = [
  {
    image: dripImage,
    alt: "Precision drip irrigation lines delivering measured water to a landscaped garden bed",
    label: "Company work · Drip irrigation",
    title: "Precision drip irrigation for landscaped gardens",
    text: "Inline pressure-compensating drippers laid across planted beds—engineered for uniform emission, minimal evaporation and up to 50% lower water use than conventional spray systems.",
  },
  {
    image: waterImage,
    alt: "Architectural water feature with recirculating pumps and clear basin lighting",
    label: "Company work · Water features",
    title: "Architectural fountains & water features",
    text: "Electro-mechanical design and execution for fountains, koi ponds and pool circulation—built around silent pumps, balanced hydraulics and long-term serviceability.",
  },
  {
    image: rainImage,
    alt: "Rainwater harvesting collection and recharge setup beside a building roofline",
    label: "Company work · Rainwater harvesting",
    title: "Rainwater harvesting & water management",
    text: "Rooftop collection, filtration and recharge systems that capture monsoon runoff, reduce dependence on bore water and feed irrigation networks across the property.",
  },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "description", content: "Irrigation expert for smart drip, sprinkler, fountain and water management systems in Hyderabad and South India." },
      { property: "og:title", content: "Irrigation Expert | Smart Irrigation" },
      { property: "og:description", content: "Intelligent irrigation engineering for healthier landscapes and lower water use." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="relative min-h-[78vh] overflow-hidden bg-primary text-primary-foreground">
        <img src={heroImage} width={1920} height={1080} alt="Automated sprinkler irrigation across a landscaped estate" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-5 py-20 sm:px-8">
           <div className="max-w-4xl"><span className="inline-block bg-accent px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-accent-foreground">Irrigation Expert · Hyderabad · Est. 2017</span><h1 className="mt-7 text-4xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl">Landscaping & irrigation<br /><span className="font-normal text-accent">engineered intelligently.</span></h1><p className="mt-7 max-w-2xl text-base leading-8 text-primary-foreground/85 sm:text-xl">Professional landscaping irrigation, drip irrigation, sprinkler systems and smart automation—designed, installed and maintained across Hyderabad and South India.</p><div className="mt-10 flex flex-wrap gap-3"><Button asChild size="lg" className="h-12 rounded-none bg-accent px-6 text-accent-foreground hover:bg-accent/90"><a href="tel:+919494230489">Consult our expert <ArrowRight /></a></Button><Button asChild variant="outline" size="lg" className="h-12 rounded-none border-primary-foreground/35 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10"><a href="/services">Explore services</a></Button></div></div>
        </div>
      </section>
      <section className="grid bg-card sm:grid-cols-3"><Metric value="50%" label="Potential water savings" icon={<Droplets />} /><Metric value="Rain Bird" label="Smart product expertise" icon={<Gauge />} /><Metric value="South India" label="Regional execution" icon={<MapPin />} /></section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"><div className="grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Our expertise</p><h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">From precision drip lines to architectural water features.</h2></div><p className="text-sm leading-7 text-muted-foreground">Complete support from site analysis and hydraulic design to procurement, commissioning and annual maintenance.</p></div><div className="mt-14 grid gap-7 md:grid-cols-3"><Service image={dripImage} title="Smart landscape irrigation" text="Automated drip, pop-up, rotor, spray and sensor-based systems for lawns, gardens and large landscapes." /><Service image={waterImage} title="Pools & water features" text="Electro-mechanical design and execution for fountains, swimming pools, koi ponds and fog systems." /><Service image={rainImage} title="Water management" text="Rainwater harvesting, STP-water irrigation and efficient systems designed around site conditions." /></div><Button asChild variant="link" className="mt-10 px-0 text-secondary"><a href="/services">View every service <ArrowRight /></a></Button></section>
      <section className="bg-muted px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2"><div><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">One accountable partner</p><h2 className="mt-5 text-3xl font-semibold sm:text-5xl">From first survey to reliable operation.</h2><p className="mt-6 max-w-xl leading-8 text-muted-foreground">Our team combines design engineering, product selection, experienced installation and responsive support—so the system works as one coordinated whole.</p><div className="mt-10 space-y-4">{["Site analysis and water requirement study","System design, specification and quotation","Procurement and quality-controlled installation","Testing, commissioning and client handover","Preventive support and annual maintenance"].map((item) => <div key={item} className="flex gap-3 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-secondary" />{item}</div>)}</div></div><div className="grid grid-cols-2 gap-px bg-border"><Proof value="2017" label="Established" /><Proof value="9+ yrs" label="Founder experience stated in profile" /><Proof value="AMC" label="Lifecycle support" /><Proof value="Smart Fully Automation" label="Sensor-led automation" /></div></div></section>
      <section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Selected experience</p><h2 className="mt-5 text-3xl font-semibold sm:text-5xl">Trusted across demanding sites.</h2></div><Button asChild variant="outline" className="rounded-none"><a href="/projects">Project record <ArrowRight /></a></Button></div><div className="mt-12 grid grid-cols-2 gap-px bg-border border border-border sm:grid-cols-3 lg:grid-cols-6">{["Jayabheri","Aparna","Hetero Group","K Raheja","JLL","Radisson Hotel"].map((name) => <div key={name} className="grid min-h-28 place-items-center bg-background p-4 text-center font-display text-sm font-semibold">{name}</div>)}</div></div></section>
      <section className="bg-muted px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Range of products</p>
              <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">Trusted components from global irrigation leaders.</h2>
              <p className="mt-6 max-w-xl leading-8 text-muted-foreground">
                We partner with the world's leading irrigation brands to bring proven, warranty-backed products to every project. Rain Bird smart irrigation technology leads our stack, supported by a curated range of global and Indian components for every water application.
              </p>
              <p className="sr-only">Featured brands: Rain Bird, AQVA STAR, XeriTech, ARMAS, Kasco, Supreme, Varios, ItalFog, PIMTAS and Wilo.</p>
            </div>
            <div className="bg-background p-6 sm:p-10 border border-border">
              <img src={productLogosSrc} width={1214} height={420} loading="lazy" alt="Product brand logos used by Smart Irrigation" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <WorkShowcase />
      <InquiryBand />
    </SiteLayout>
  );
}

function Metric({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) { return <div className="flex items-center justify-center gap-5 border-b border-primary/10 p-8 text-center last:border-0 sm:border-b-0 sm:border-r sm:p-10"> <span className="text-secondary [&_svg]:size-6">{icon}</span><span><strong className="block font-display text-2xl font-semibold text-primary sm:text-3xl">{value}</strong><span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">{label}</span></span></div>; }
function Service({ image, title, text }: { image: string; title: string; text: string }) { return <article><img src={image} width={1024} height={1024} loading="lazy" alt={title} className="aspect-square w-full object-cover" /><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>; }
function Proof({ value, label }: { value: string; label: string }) { return <div className="flex min-h-44 min-w-0 flex-col justify-between bg-background p-5 sm:p-7"><strong className="break-words font-display text-2xl font-semibold leading-tight text-primary sm:text-3xl">{value}</strong><span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span></div>; }

function WorkShowcase() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.3 });
    observer.observe(el);
    const timer = window.setInterval(() => {
      if (visible) setActive((current) => (current + 1) % showcaseSlides.length);
    }, 5500);
    return () => { window.clearInterval(timer); observer.disconnect(); };
  }, []);
  const slide = showcaseSlides[active];

  return <section ref={sectionRef} className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 sm:py-28" aria-label="Company work and testimonials"><div className="mx-auto max-w-7xl"><div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Work & testimonials</p><h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-5xl">Recent projects across irrigation and water management.</h2></div><div className="flex gap-2"><Button variant="outline" size="icon" className="rounded-none border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setActive((active - 1 + showcaseSlides.length) % showcaseSlides.length)} aria-label="Previous showcase"><ArrowLeft /></Button><Button variant="outline" size="icon" className="rounded-none border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setActive((active + 1) % showcaseSlides.length)} aria-label="Next showcase"><ArrowRight /></Button></div></div><div className="grid overflow-hidden border border-primary-foreground/15 lg:grid-cols-[1.15fr_0.85fr]"><img key={slide.image} src={slide.image} width={1024} height={1024} loading="lazy" alt={slide.alt} className="aspect-[4/3] size-full object-cover lg:aspect-auto" /><div className="flex min-h-80 flex-col justify-between bg-primary/80 p-8 sm:p-12"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{slide.label}</p><h3 className="mt-5 text-2xl font-semibold sm:text-4xl">{slide.title}</h3><p className="mt-5 max-w-lg leading-8 text-primary-foreground/85">{slide.text}</p></div><Button asChild size="lg" className="mt-9 w-fit rounded-none bg-accent text-accent-foreground hover:bg-accent/90"><a href="https://wa.me/919494230489?text=Hello%20Smart%20Irrigation%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer"><MessageCircle /> Discuss on WhatsApp</a></Button></div></div><div className="mt-5 flex gap-2" aria-label="Showcase slide selection">{showcaseSlides.map((item, index) => <Button key={item.label} variant="ghost" size="sm" onClick={() => setActive(index)} className={`h-1 min-w-10 rounded-none p-0 ${index === active ? "bg-accent hover:bg-accent" : "bg-primary-foreground/20 hover:bg-primary-foreground/35"}`} aria-label={`Show slide ${index + 1}`} aria-current={index === active ? "true" : undefined} />)}</div></div></section>;
}
