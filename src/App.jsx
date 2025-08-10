import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight, Brain, Globe2, ShieldCheck, Cpu, Sparkles, Waves, Satellite,
  Github, Linkedin, Mail, Twitter, MapPin, Phone
} from "lucide-react";

const nav = [
  { label: "Specializations", href: "#specializations" },
  { label: "Platform", href: "#platform" },
  { label: "Impact", href: "#impact" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Open Source", href: "#oss" },
  { label: "Contact", href: "#contact" },
];

const specializations = [
  { icon: <Brain className="h-6 w-6" />, title: "Retrieval-Augmented AI",
    blurb: "Trustworthy, source-grounded Q&A for enterprise and public sector knowledge bases.",
    points: ["Graph, Hybrid & Multimodal RAG","Citations & hallucination controls","On-prem & cloud-native deploys"] },
  { icon: <Globe2 className="h-6 w-6" />, title: "Multilingual Document Intelligence",
    blurb: "Layout-aware OCR and understanding across Indian languages and scripts.",
    points: ["Handwritten support","Tables/figures extraction","JSON/Markdown outputs"] },
  { icon: <Waves className="h-6 w-6" />, title: "Speech & Translation",
    blurb: "Language-agnostic diarization, transcription, and translation for Bharat-scale use.",
    points: ["Robust to code-switching","Low-SNR handling","Real-time & batch"] },
  { icon: <ShieldCheck className="h-6 w-6" />, title: "Cybersecurity AI",
    blurb: "AI that defends: phishing detection, code vulnerability analysis, and threat insights.",
    points: ["URL/domain intelligence","CVE/CWE mapping","Automated mitigation"] },
  { icon: <Satellite className="h-6 w-6" />, title: "Geospatial Vision",
    blurb: "Search, detect, and monitor at scale using satellite imagery and multi-sensor fusion.",
    points: ["Change detection","SAR/EO workflows","Active learning loops"] },
];

const caseStudies = [
  { title: "Digital Knowledge Assistant",
    summary: "Deployed a multilingual, citation-first RAG assistant to reduce document lookup time by 72% in a public-sector workflow." },
  { title: "Cross-Lingual Document Pipeline",
    summary: "Built a layout-aware OCR and translation pipeline for forms and PDFs across 10+ Indian languages." },
  { title: "Secure Phishing Intelligence",
    summary: "Delivered a continuous monitoring stack that flags lookalike domains and generates automated takedown reports." },
];

const logos = [
  (idx) => (
    <svg key={idx} className="h-8 w-28 text-muted-foreground" viewBox="0 0 120 24" fill="none" aria-hidden="true">
      <rect x="0" y="6" width="18" height="12" rx="3" className="fill-muted-foreground/20" />
      <rect x="24" y="6" width="18" height="12" rx="3" className="fill-muted-foreground/20" />
      <rect x="48" y="6" width="18" height="12" rx="3" className="fill-muted-foreground/20" />
      <rect x="72" y="6" width="18" height="12" rx="3" className="fill-muted-foreground/20" />
      <rect x="96" y="6" width="18" height="12" rx="3" className="fill-muted-foreground/20" />
    </svg>
  ),
];

const logoUrl = new URL('prajna_labs_logo.png', import.meta.env.BASE_URL).href;

export default function PrajnaLabsSite() {
  // set page title
  useEffect(() => {
    document.title = "Prajna Labs — Building trustworthy AI for Bharat";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <img src={logoUrl} alt="Prajna Labs" className="h-9 w-9 rounded-2xl" />
            <span className="font-semibold tracking-tight">Prajna Labs</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground">{n.label}</a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild><a href="#contact" aria-label="Talk to Prajna Labs">Talk to us</a></Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}}
              className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Building trustworthy AI for <span className="text-primary">Bharat</span>
            </motion.h1>
            <p className="mt-4 max-w-prose text-muted-foreground md:text-lg">
              We design multilingual and multimodal AI systems that are reliable, explainable, and ready for production —
              from knowledge assistants to document intelligence and speech technologies.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild><a href="#specializations">Explore capabilities</a></Button>
              <Button variant="outline" asChild><a href="#work">See our work</a></Button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4" /><span>On-prem & cloud-native • Privacy-first • Source-grounded</span>
            </div>
          </div>

          {/* Illustration card */}
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
            <Card className="relative mx-auto w-full max-w-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-medium text-muted-foreground">
                  <Sparkles className="h-4 w-4" /> Intelligence Fabric
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  {[
                    ["RAG","Citations"], ["Docs","Layout-aware"], ["Speech","Diarization"],
                    ["Security","Phishing/Code"], ["Vision","Geospatial"], ["Deploy","Kubernetes"],
                  ].map(([a,b]) => (
                    <div key={a} className="rounded-2xl border p-4">
                      <p className="font-semibold">{a}</p>
                      <p className="text-muted-foreground">{b}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Logos */}
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 pb-12 opacity-70 md:pb-16">
          {Array.from({ length: 6 }).map((_, i) => logos[0](i))}
        </div>
      </section>

      {/* Specializations */}
      <section id="specializations" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Specializations</h2>
        <p className="mt-2 max-w-prose text-muted-foreground">
          Modular capabilities you can combine to build end-to-end systems — from data ingestion and retrieval
          to generation, evaluation, and observability.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specializations.map((s) => (
            <Card key={s.title} className="rounded-2xl">
              <CardHeader><CardTitle className="flex items-center gap-3 text-lg">
                <span className="rounded-xl bg-primary/10 p-2 text-primary">{s.icon}</span>{s.title}
              </CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.blurb}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {s.points.map((p) => (<li key={p} className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" /> {p}
                  </li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Platform */}
      <section id="platform" className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Platform-first, open by design</h2>
              <p className="mt-2 max-w-prose text-muted-foreground">
                Our production stack is Kubernetes-native with observability baked in. We support on-prem and cloud deployments,
                privacy-first data flows, and hardware acceleration paths to keep costs predictable.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Security & compliance by default</li>
                <li className="flex items-center gap-2"><Cpu className="h-4 w-4" /> Triton/accelerated inference paths</li>
                <li className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Evaluation & traceability tooling</li>
              </ul>
            </div>
            <Card className="rounded-2xl">
              <CardHeader><CardTitle className="text-base text-muted-foreground">Reference Modules</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {["Ingestion & ETL","Semantic Indexing","RAG Orchestrator","Rerankers","Evaluation/QA","Guardrails","Monitoring","Admin & Audit"]
                    .map((t) => (<div key={t} className="rounded-xl border p-3">{t}</div>))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Impact for Bharat</h2>
        <p className="mt-2 max-w-prose text-muted-foreground">
          We prioritise outcomes that matter — reducing information friction across languages,
          improving accessibility, and amplifying domain experts with reliable AI assistance.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {["Lower time-to-answer","Higher accuracy & trust","Cost-efficient deployments"].map((k) => (
            <Card key={k} className="rounded-2xl"><CardContent className="pt-6 text-center font-medium">{k}</CardContent></Card>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Our approach</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            {["Discover","Design","Deliver","Evolve"].map((s, i) => (
              <Card key={s} className="rounded-2xl">
                <CardHeader><CardTitle className="text-base">{i + 1}. {s}</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {i === 0 && "Map goals, risks, data, and constraints with stakeholders."}
                  {i === 1 && "Blueprint modular pipelines with security and evaluation plans."}
                  {i === 2 && "Ship pilots with measurable KPIs and user-centric UX."}
                  {i === 3 && "Iterate with feedback, telemetry, and rigorous testing."}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Selected work</h2>
            <p className="mt-2 max-w-prose text-muted-foreground">A glimpse into what we build. De-identified case notes available on request.</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {caseStudies.map((c) => (
              <Card key={c.title} className="rounded-2xl">
                <CardHeader><CardTitle className="text-base">{c.title}</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground">{c.summary}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section id="oss" className="border-t bg-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Open source & research</h2>
              <p className="mt-2 max-w-prose text-muted-foreground">We contribute to the open ecosystem and publish learnings that advance reliable AI.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="outline" asChild><a href="https://github.com/prajnalabs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</a></Button>
                <Button variant="outline" asChild><a href="https://www.linkedin.com/company/prajnalabs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</a></Button>
                <Button variant="outline" asChild><a href="https://x.com/prajnalabs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Twitter className="h-4 w-4" /> X (Twitter)</a></Button>
              </div>
            </div>
            <Card className="rounded-2xl">
              <CardHeader><CardTitle className="text-base text-muted-foreground">Starter repositories</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {["prajna-rag-starter","prajna-doc-intelligence","prajna-speech-kit","prajna-guardrails"].map((r) => (
                    <li key={r} className="flex items-center justify-between rounded-xl border p-3">
                      <span className="font-mono">{r}</span>
                      <Button size="sm" variant="ghost">View</Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Let’s build together</h2>
            <p className="mt-2 max-w-prose text-muted-foreground">Share a brief about your goals, data, and timeline. We’ll get back within 2 business days.</p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@prajnalabs.in</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-8076819537</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Bengaluru • New Delhi • Remote</div>
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="text-base">Quick note</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <Input placeholder="Your name" required />
                <Input type="email" placeholder="Email" required />
                <Input placeholder="Organisation (optional)" />
                <Textarea placeholder="Tell us a bit about your project" rows={5} />
                <Button type="submit" className="w-full">Send</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Prajna Labs — prajnalabs.in · NIVEDHYA11 HOSPITALITY PRIVATE LIMITED</p>
          <div className="flex items-center gap-3">
            <a href="https://x.com/prajnalabs" className="text-muted-foreground hover:text-foreground" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/company/prajnalabs" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:hello@prajnalabs.in" className="text-muted-foreground hover:text-foreground" aria-label="Email"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}