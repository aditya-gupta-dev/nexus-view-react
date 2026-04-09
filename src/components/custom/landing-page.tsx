"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "./mode-toggle"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { WhenLoggedIn, WhenLoggedOut } from "../auth/show"
import { Link } from "react-router-dom"


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

function Navbar() {

  const startLogin = async () => {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
  }

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <h1 className="text-lg font-semibold">Nexus</h1>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#">Features</a>
          <a href="#">How it works</a>
          <a href="#">Pricing</a>
        </nav>

        <div className="flex gap-2">
          <WhenLoggedOut>
            <Button variant="ghost" onClick={startLogin}>Login</Button>
            <Button onClick={startLogin}>Get Started</Button>
          </WhenLoggedOut>
          <WhenLoggedIn> 
            <Link to={"/dashboard"}>
              <Button>
                Visit Dashboard 
              </Button>
            </Link>
          </WhenLoggedIn>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}


function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Get Hired Faster with AI
        </h1>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nexus helps students land jobs with AI-powered resume building,
          mock interviews, and automated applications.
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg">Start Free</Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}


function Features() {
  const features = [
    {
      title: "AI Resume Builder",
      desc: "Create optimized resumes instantly.",
    },
    {
      title: "Mock Interviews",
      desc: "Practice with AI feedback.",
    },
    {
      title: "Auto Apply",
      desc: "Apply to jobs automatically.",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


function Testimonials() {
  const data = [
    {
      name: "Alex",
      text: "Got multiple offers using Nexus.",
    },
    {
      name: "Sarah",
      text: "Interview prep is insanely good.",
    },
    {
      name: "Rahul",
      text: "Resume boost worked perfectly.",
    },
  ]

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <p className="text-sm mb-4">"{t.text}"</p>
                <p className="text-muted-foreground text-sm">
                  — {t.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


function CTA() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-6">
        <h2 className="text-3xl font-semibold">
          Ready to get started?
        </h2>

        <div className="flex justify-center gap-4">
          <Input placeholder="Enter your email" className="max-w-xs" />
          <Button>Join Now</Button>
        </div>
      </div>
    </section>
  )
}


function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Nexus</p>
        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}