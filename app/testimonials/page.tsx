import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export const metadata = {
  title: "Testimonials | Tranquil Mind Hypnotherapy",
  description:
    "Read success stories and testimonials from clients who have experienced positive change through our hypnotherapy services.",
}

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
                Client Success Stories
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Read about the experiences of clients who have transformed their lives through hypnotherapy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-sky-500 text-sky-500" />
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-sky-800">Sarah M., Sydney</h2>
              </div>
              <blockquote className="border-l-4 border-sky-200 pl-4 italic text-muted-foreground">
                "After struggling with anxiety for years and trying various treatments with limited success, I decided
                to give hypnotherapy a try. I was skeptical at first, but after just three sessions with Dr. Thompson,
                my anxiety levels decreased dramatically. I now have effective tools to manage stress in my daily life.
                The transformation has been incredible, and I'm grateful for the positive impact it's had on my
                relationships and career."
              </blockquote>
              <p className="text-sm text-muted-foreground">
                <strong>Issue addressed:</strong> Anxiety and stress management
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Number of sessions:</strong> 5
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-sky-500 text-sky-500" />
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-sky-800">James T., Melbourne</h2>
              </div>
              <blockquote className="border-l-4 border-sky-200 pl-4 italic text-muted-foreground">
                "I was skeptical about hypnotherapy, but my fear of public speaking was holding back my career. Working
                with Tranquil Mind Hypnotherapy helped me overcome a lifelong fear that had limited me professionally.
                I'm now confident presenting to large groups and have even volunteered to lead presentations at work.
                The techniques I learned have transferred to other areas of my life as well, improving my overall
                confidence. It's been life-changing."
              </blockquote>
              <p className="text-sm text-muted-foreground">
                <strong>Issue addressed:</strong> Public speaking anxiety
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Number of sessions:</strong> 4
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-800">Hear From Our Clients</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Watch this video testimonial from a client who overcame a lifelong phobia.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Video testimonial placeholder</p>
              {/* In a real implementation, you would embed a video here */}
              {/* For a static site, you could use a service like YouTube or Vimeo */}
            </div>
            <div className="bg-sky-100 p-4">
              <p className="font-medium">Michael R. shares his experience overcoming a fear of flying</p>
              <p className="text-sm text-muted-foreground mt-1">
                "After 20 years of avoiding air travel, I can now fly without panic attacks."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-sky-800 mb-8 text-center">More Success Stories</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Emma L.</span>
                  <span className="text-sm font-normal text-muted-foreground">Brisbane</span>
                </CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sky-500 text-sky-500" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  "Hypnotherapy helped me break my nail-biting habit of 30 years. I'd tried everything before, but
                  nothing worked until now. It's been six months, and I haven't bitten my nails once. I'm amazed at how
                  effective it was for a habit I thought I'd never break."
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Issue addressed:</strong> Nail biting
                </p>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>David K.</span>
                  <span className="text-sm font-normal text-muted-foreground">Perth</span>
                </CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sky-500 text-sky-500" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  "After struggling with insomnia for years, I was desperate for a solution. Medication left me groggy,
                  but hypnotherapy taught me how to calm my mind naturally. I now sleep through the night and wake
                  feeling refreshed. The improvement in my quality of life has been dramatic."
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Issue addressed:</strong> Insomnia
                </p>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Olivia P.</span>
                  <span className="text-sm font-normal text-muted-foreground">Adelaide</span>
                </CardTitle>
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sky-500 text-sky-500" />
                  ))}
                  <Star className="h-4 w-4 text-sky-500" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  "I sought help for emotional eating that had led to significant weight gain. Hypnotherapy helped me
                  understand the triggers behind my eating patterns and develop healthier responses to stress. I've lost
                  weight steadily and, more importantly, have a much healthier relationship with food."
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Issue addressed:</strong> Emotional eating
                </p>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Robert J.</span>
                  <span className="text-sm font-normal text-muted-foreground">Gold Coast</span>
                </CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sky-500 text-sky-500" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  "As a competitive golfer, my performance anxiety was affecting my game. Through hypnotherapy, I
                  learned to manage my nerves and stay focused under pressure. My handicap has improved, and I'm
                  enjoying the game again. The mental techniques have been invaluable."
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Issue addressed:</strong> Sports performance
                </p>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Sophia T.</span>
                  <span className="text-sm font-normal text-muted-foreground">Canberra</span>
                </CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sky-500 text-sky-500" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  "After a traumatic car accident, I developed severe anxiety about driving. Hypnotherapy helped me
                  process the trauma and gradually return to driving with confidence. I'm now able to drive without
                  panic attacks, which has restored my independence."
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Issue addressed:</strong> Trauma and driving anxiety
                </p>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>William M.</span>
                  <span className="text-sm font-normal text-muted-foreground">Hobart</span>
                </CardTitle>
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sky-500 text-sky-500" />
                  ))}
                  <Star className="h-4 w-4 text-sky-500" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  "I was skeptical about quitting smoking through hypnotherapy, having tried and failed many times
                  before. To my surprise, after just three sessions, my cravings diminished significantly. It's been a
                  year now, and I'm still smoke-free. Best decision I ever made."
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Issue addressed:</strong> Smoking cessation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="w-full py-6 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> These testimonials represent the experiences of actual clients. Results may
              vary from person to person. Hypnotherapy is not a substitute for medical treatment, and we do not claim to
              cure medical conditions. All testimonials have been shared with permission.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-800">Begin Your Success Story</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our many satisfied clients and experience the benefits of professional hypnotherapy.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                <Link href="/booking">Book Your Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
