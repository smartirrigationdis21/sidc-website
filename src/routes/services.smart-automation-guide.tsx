import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Cloud, Droplets, Gauge, Leaf, Radio, Smartphone, Wifi } from "lucide-react";
import { InquiryBand, PageHero, SiteLayout } from "@/components/site-layout";
import { absoluteUrl } from "@/lib/site-url";
import { OG_IMAGE } from "@/lib/seo";

const PAGE_URL = absoluteUrl("/services/smart-automation-guide");
const TITLE = "Smart Irrigation Controller & Moisture Sensor Guide";
const DESCRIPTION = "A practical guide to smart irrigation controllers, WiFi timers like Rain Bird and Rachio, and moisture sensors that cut water bills.";

export const Route = createFileRoute("/services/smart-automation-guide")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          mainEntityOfPage: PAGE_URL,
          author: { "@type": "Organization", name: "Smart Irrigation Design & Consulting" },
          publisher: { "@type": "Organization", name: "Smart Irrigation Design & Consulting" },
          about: ["Smart irrigation controllers", "WiFi irrigation controllers", "Moisture sensors", "Weather-responsive irrigation", "Rain Bird", "Rachio"],
          areaServed: { "@type": "City", name: "Hyderabad" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What is a smart irrigation controller?", acceptedAnswer: { "@type": "Answer", text: "A smart irrigation controller is a WiFi-enabled timer that automatically adjusts watering schedules based on local weather, soil moisture, plant type and site conditions, replacing fixed schedules with real-time decisions." } },
            { "@type": "Question", name: "How much water can a smart controller save?", acceptedAnswer: { "@type": "Answer", text: "EPA WaterSense-labelled smart irrigation controllers typically reduce outdoor water use by 20 to 50 percent compared with conventional timers by skipping irrigation during rain and adjusting run times to evapotranspiration data." } },
            { "@type": "Question", name: "Rain Bird vs Rachio - which is better?", acceptedAnswer: { "@type": "Answer", text: "Rain Bird controllers are widely used by professional contractors for reliability and integration with commercial valves, while Rachio is popular for its app, hyperlocal weather intelligence and easy DIY install. Both qualify for water-rebate programs." } },
            { "@type": "Question", name: "Do I need a moisture sensor with a smart controller?", acceptedAnswer: { "@type": "Answer", text: "A soil moisture sensor adds a second layer of accuracy by measuring actual root-zone moisture, which is especially valuable for mixed landscapes, slopes and shaded zones where weather data alone may over- or under-water." } },
          ],
        }),
      },
    ],
  }),
  component: GuidePage,
});

const benefits = [
  { icon: Droplets, title: "20-50% lower water bills", text: "EPA WaterSense smart controllers cut outdoor water use by skipping irrigation during rain and tuning run times to local evapotranspiration." },
  { icon: Leaf, title: "Healthier landscapes", text: "Deeper, less-frequent cycles encourage stronger roots and reduce fungal disease compared with fixed daily schedules." },
  { icon: Smartphone, title: "Control from anywhere", text: "WiFi-enabled controllers like Rain Bird LNK and Rachio let you start, stop and adjust zones from a phone app, on site or away." },
  { icon: Cloud, title: "Weather-responsive", text: "Hyperlocal forecasts and on-board ET data automatically pause irrigation before rain and ramp it up during heat waves." },
];

const controllers = [
  { name: "Rachio 3", best: "Best for villas & smart-home users", features: ["8 or 16 zones", "Weather Intelligence Plus", "Alexa, Google Home, Apple HomeKit", "Flow-meter compatible"] },
  { name: "Rain Bird ESP-TM2 + LNK WiFi", best: "Best for contractor-installed systems", features: ["4 to 22 zones", "Rugged outdoor enclosure", "Cycle+Soak, seasonal adjust", "Works with rain & moisture sensors"] },
  { name: "Hunter Hydrawise HC", best: "Best for mixed residential & light commercial", features: ["6 or 12 zones", "Predictive watering", "Flow monitoring & alerts", "Multi-controller dashboard"] },
];

const sensors = [
  { icon: Radio, title: "Soil moisture sensors", text: "Buried in the root zone, these probes pause irrigation when moisture is already above a set threshold - ideal for shaded zones, slopes and clay soils where weather data alone is not enough." },
  { icon: Cloud, title: "Rain & freeze sensors", text: "A simple wired or wireless rain sensor stops cycles after measurable rainfall; freeze sensors prevent winter damage in colder zones." },
  { icon: Gauge, title: "Flow sensors", text: "An inline flow meter learns each zone's normal usage and alerts you to broken pipes, stuck valves or missing emitters before water is wasted." },
  { icon: Wifi, title: "Weather-station integration", text: "Smart controllers pull from nearby personal weather stations or on-board ET, giving truly site-specific schedules instead of generic regional averages." },
];

const steps = [
  { n: "01", title: "Audit the existing system", text: "Map zones, valves, sprinklers and drip lines. Note pressure, plant type, soil and sun exposure for each zone." },
  { n: "02", title: "Pick the right controller", text: "Match zone count, indoor vs outdoor mounting, WiFi coverage and whether you need flow monitoring or HomeKit support." },
  { n: "03", title: "Add the right sensors", text: "At minimum add a rain sensor; add soil moisture sensors for mixed landscapes and a flow sensor for villas and estates." },
  { n: "04", title: "Program zones by plant type", text: "Group lawns separately from drip-irrigated beds, set root depth and soil type, and let the controller calculate run times." },
  { n: "05", title: "Monitor and tune", text: "Review the app's watering history monthly for the first season, then let the controller run on autopilot with seasonal alerts." },
];

function GuidePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Smart automation guide"
        title="Smart irrigation controllers: the complete guide."
        intro="WiFi controllers and moisture sensors are the single biggest upgrade most landscapes can make. This guide walks through how they work, what to buy, and how to set them up for the lowest water bill and the healthiest landscape."
      />

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="text-3xl font-semibold sm:text-4xl">What is a smart irrigation controller?</h2>
        <p className="mt-5 text-base leading-8 text-muted-foreground">
          A smart irrigation controller replaces the old set-and-forget timer on your wall. Instead of running every Monday, Wednesday and Friday at 6am no matter the weather, it pulls live forecasts, on-site sensor data and plant-specific schedules to decide - zone by zone - whether to water today, and for how long. The result is a system that thinks like a horticulturist and reports like a utility meter.
        </p>

        <h2 className="mt-14 text-3xl font-semibold sm:text-4xl">Why upgrade from a conventional timer?</h2>
        <div className="mt-8 grid gap-px bg-border border border-border sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-7">
              <Icon className="size-6 text-accent" />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-3xl font-semibold sm:text-4xl">Comparing the leading WiFi controllers</h2>
        <p className="mt-5 text-base leading-8 text-muted-foreground">
          Rain Bird, Rachio and Hunter dominate the smart-controller market. All three integrate with weather services, support most existing valve wiring, and qualify for water-utility rebates. The right choice comes down to zone count, install setting and ecosystem.
        </p>
        <div className="mt-8 space-y-5">
          {controllers.map((c) => (
            <div key={c.name} className="border border-border bg-background p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{c.best}</p>
              <h3 className="mt-3 text-xl font-semibold">{c.name}</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-3xl font-semibold sm:text-4xl">Sensors that make a smart controller smarter</h2>
        <p className="mt-5 text-base leading-8 text-muted-foreground">
          The controller is the brain; sensors are the eyes and ears. Pair the right sensor stack with your controller and you turn a good schedule into a self-correcting one.
        </p>
        <div className="mt-8 grid gap-px bg-border border border-border sm:grid-cols-2">
          {sensors.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-7">
              <Icon className="size-6 text-accent" />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-3xl font-semibold sm:text-4xl">Installing and programming - 5 steps</h2>
        <ol className="mt-8 space-y-6">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-5">
              <span className="text-2xl font-bold text-primary">{s.n}</span>
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mt-14 text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold">How much water can a smart controller save?</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">EPA WaterSense-labelled controllers typically cut outdoor water use by 20-50% versus conventional timers, with the biggest gains on lawns previously over-watered on fixed schedules.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Will a smart controller work with my existing valves?</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">Yes. Smart controllers use the same 24V common-and-zone wiring as conventional timers, so most installs are a 30-minute swap. We verify wire condition and valve solenoids during installation.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Do I still need a rain sensor if the controller pulls weather data?</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">Yes - many local codes require a physical rain sensor, and it acts as a fail-safe if the WiFi or weather feed goes down. A dedicated soil moisture sensor adds further accuracy for drip-irrigated beds.</p>
          </div>
        </div>

        <div className="mt-16 border border-primary/15 bg-muted p-8 sm:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">Next step</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Want a smart controller specced for your site?</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">Our irrigation experts in Hyderabad design and install Rain Bird, Rachio and Hunter Hydrawise systems with the right sensor stack for your landscape - from villas to commercial estates.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground">Request a site survey</Link>
        </div>
      </article>

      <InquiryBand />
    </SiteLayout>
  );
}
