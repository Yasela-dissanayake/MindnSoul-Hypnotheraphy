import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Brain, Heart, Sparkles, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-sky-800">
                Transform Your Life Through Hypnotherapy
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Experience the power of your subconscious mind to overcome challenges, reduce anxiety, and achieve your
                goals with professional clinical hypnotherapy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <Link href="/booking">Book Your Session</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://mindandsoulworks.ae/wp-content/uploads/2024/06/our-services-2-reiki.jpg"
                alt="Peaceful hypnotherapy session"
                width={800}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
                How Hypnotherapy Can Help You
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the many ways clinical hypnotherapy can support your journey to wellness and personal growth.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card className="border-sky-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Brain className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Anxiety & Stress</CardTitle>
                <CardDescription>
                  Reduce anxiety, manage stress, and find inner calm through targeted hypnotherapy techniques.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services#anxiety" className="text-sky-600 hover:underline text-sm">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
            <Card className="border-sky-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Heart className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Confidence & Self-Esteem</CardTitle>
                <CardDescription>
                  Build lasting confidence and improve self-esteem by reprogramming limiting beliefs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services#confidence" className="text-sky-600 hover:underline text-sm">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
            <Card className="border-sky-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Habits & Addictions</CardTitle>
                <CardDescription>
                  Break free from unwanted habits and addictions with powerful subconscious reprogramming.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services#habits" className="text-sky-600 hover:underline text-sm">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline" className="border-sky-200">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-800">Client Success Stories</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from clients who have experienced positive transformation through hypnotherapy.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <Card className="border-sky-100 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Sarah M.</span>
                  <span className="text-sm font-normal text-muted-foreground">Sydney</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  "After just three sessions, my anxiety levels decreased dramatically. I now have effective tools to
                  manage stress in my daily life. The transformation has been incredible."
                </p>
              </CardContent>
            </Card>
            <Card className="border-sky-100 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>James T.</span>
                  <span className="text-sm font-normal text-muted-foreground">Melbourne</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  "I was skeptical at first, but hypnotherapy helped me overcome a lifelong fear of public speaking. I'm
                  now confident presenting to large groups. It's been life-changing."
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline" className="border-sky-200">
              <Link href="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-800">Begin Your Journey Today</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step toward positive change with a personalized hypnotherapy session.
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

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-800">
                Why Choose Mind and Soul Hypnotherapy
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're committed to providing the highest quality hypnotherapy services with a personalized approach.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 text-center">
              <CheckCircle className="h-10 w-10 text-sky-600" />
              <h3 className="text-xl font-bold">Qualified Professional</h3>
              <p className="text-sm text-muted-foreground">
                Fully accredited clinical hypnotherapist with extensive training and experience.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <CheckCircle className="h-10 w-10 text-sky-600" />
              <h3 className="text-xl font-bold">Personalized Approach</h3>
              <p className="text-sm text-muted-foreground">
                Customized sessions tailored to your specific needs and goals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <CheckCircle className="h-10 w-10 text-sky-600" />
              <h3 className="text-xl font-bold">Safe Environment</h3>
              <p className="text-sm text-muted-foreground">
                Comfortable, confidential setting where you can feel secure and relaxed.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <CheckCircle className="h-10 w-10 text-sky-600" />
              <h3 className="text-xl font-bold">Evidence-Based</h3>
              <p className="text-sm text-muted-foreground">
                Techniques supported by research and proven effective for lasting change.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <CheckCircle className="h-10 w-10 text-sky-600" />
              <h3 className="text-xl font-bold">Ongoing Support</h3>
              <p className="text-sm text-muted-foreground">
                Guidance and resources to help maintain progress between sessions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Clock className="h-10 w-10 text-sky-600" />
              <h3 className="text-xl font-bold">Flexible Scheduling</h3>
              <p className="text-sm text-muted-foreground">Convenient appointment times to fit your busy lifestyle.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
