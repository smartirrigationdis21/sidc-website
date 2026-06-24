import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/smart-irrigation-logo.png.asset.json";

const navItems = [
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/95 backdrop-blur-lg">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
          <Link to="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)} aria-label="Smart Irrigation home">
            <img src={logoAsset.url} width={1124} height={248} alt="Smart Irrigation Design & Consulting" className="h-auto w-48 max-w-full sm:w-60" />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => <Link key={item.to} to={item.to} className="text-xs font-bold uppercase tracking-[0.14em] text-foreground/85 transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{item.label}</Link>)}
            <Button asChild size="lg" className="rounded-none uppercase tracking-wider"><a href="tel:+919494230489"><Phone /> Call now</a></Button>
          </nav>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</Button>
        </div>
        {open && <nav className="border-t border-primary/10 bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-7xl flex-col gap-1">{navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="border-b border-primary/10 py-3 text-sm font-semibold">{item.label}</Link>)}</div></nav>}
      </header>
      <main>{children}</main>
      <footer className="bg-primary px-5 py-14 text-primary-foreground sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div><p className="font-display text-2xl font-semibold">Smart Irrigation</p><p className="mt-3 max-w-sm text-sm leading-7 text-primary-foreground/85">Efficient water management through thoughtful design, quality products, expert installation and dependable after-sales service.</p></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">Contact</p><a className="mt-4 block text-lg" href="tel:+919494230489">+91 94942 30489</a><a className="mt-2 block text-sm text-primary-foreground/85" href="mailto:smartirrigationdis21@gmail.com">smartirrigationdis21@gmail.com</a></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">Registered office</p><address className="mt-4 text-sm not-italic leading-7 text-primary-foreground/85">Flat G6, Galaxy Avenue Apartment<br />RK I Nagar, Indresham, Patancheru<br />Hyderabad, Telangana</address></div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-primary-foreground/10 pt-7 text-[10px] uppercase tracking-[0.14em] text-primary-foreground/75 sm:flex-row sm:justify-between"><span>© 2026 Smart Irrigation Design & Consulting</span><span>Design · Supply · Install · Maintain</span></div>
      </footer>
      <div className="fixed inset-x-4 bottom-4 z-40 grid grid-cols-2 gap-2 lg:hidden">
        <Button asChild size="lg" className="h-12 rounded-none shadow-xl"><a href="tel:+919494230489">Call</a></Button>
        <Button asChild size="lg" className="h-12 rounded-none bg-secondary text-secondary-foreground shadow-xl hover:bg-secondary/90"><a href="https://wa.me/919494230489" target="_blank" rel="noreferrer">WhatsApp</a></Button>
      </div>
    </div>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 sm:py-28"><div className="mx-auto max-w-7xl"><p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">{eyebrow}</p><h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">{title}</h1><p className="mt-7 max-w-2xl text-base leading-8 text-primary-foreground/85 sm:text-lg">{intro}</p></div></section>;
}

export function InquiryBand() {
  return <section className="bg-secondary px-5 py-20 text-secondary-foreground sm:px-8"><div className="mx-auto max-w-4xl text-center"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Plan your system</p><h2 className="mt-5 text-3xl font-semibold sm:text-5xl">Ready to use every drop intelligently?</h2><p className="mx-auto mt-6 max-w-2xl text-secondary-foreground/85">Speak with K. Santharam about site analysis, system design, installation or maintenance.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild size="lg" className="h-12 rounded-none bg-accent text-accent-foreground hover:bg-accent/90"><a href="tel:+919494230489">+91 94942 30489</a></Button><Button asChild variant="outline" size="lg" className="h-12 rounded-none border-secondary-foreground/30 bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10"><a href="https://wa.me/919494230489" target="_blank" rel="noreferrer">WhatsApp inquiry</a></Button></div></div></section>;
}