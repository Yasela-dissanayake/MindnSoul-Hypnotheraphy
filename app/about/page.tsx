import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, GraduationCap, Heart } from "lucide-react"

export const metadata = {
  title: "About | Tranquil Mind Hypnotherapy",
  description: "Learn about our qualified hypnotherapist and our approach to clinical hypnotherapy.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
                About Mind and Soul Hypnotherapy
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Dedicated to helping clients achieve positive change through professional clinical hypnotherapy in a
                safe, supportive environment.
              </p>
            </div>
            <div className="mx-auto lg:mx-0 relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="https://mindandsoulworks.ae/wp-content/uploads/2024/06/pexels-mikhail-nilov-6932121-scaled.webp"
                alt="Professional hypnotherapist"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the Therapist */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 mx-auto lg:mx-0 relative aspect-square overflow-hidden rounded-xl max-w-md">
              <Image
                src="https://mindandsoulworks.ae/wp-content/uploads/2024/05/rangika-animal-reiki.webp"
                alt="Dr. Emma Thompson"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-800">Meet Dr. Rangika Mathew</h2>
              <p className="text-muted-foreground">
                With over 15 years of experience in clinical hypnotherapy, Dr. Emma Thompson has helped hundreds of
                clients overcome challenges and achieve their goals through the power of the subconscious mind.
              </p>
              <p className="text-muted-foreground">
                After completing her doctorate in Clinical Psychology at the University of Sydney, Emma pursued
                specialized training in clinical hypnotherapy, becoming a certified member of the Australian
                Hypnotherapists Association.
              </p>
              <p className="text-muted-foreground">
                Emma's approach combines evidence-based hypnotherapy techniques with elements of cognitive-behavioral
                therapy and mindfulness practices, creating a holistic treatment plan tailored to each client's unique
                needs.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-sky-600" />
                  <span className="text-sm">Ph.D. Clinical Psychology</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-sky-600" />
                  <span className="text-sm">Certified Clinical Hypnotherapist</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-sky-600" />
                  <span className="text-sm">15+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-800">Our Therapeutic Approach</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Tranquil Mind Hypnotherapy, we believe in a client-centered, evidence-based approach that empowers
                you to create lasting positive change.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-sky-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="rounded-full bg-sky-100 p-3">
                    <Heart className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold">Client-Centered Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Your unique needs and goals are at the center of our therapeutic relationship. We tailor each
                    session to address your specific challenges and aspirations.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="rounded-full bg-sky-100 p-3">
                    <BookOpen className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold">Evidence-Based Methods</h3>
                  <p className="text-sm text-muted-foreground">
                    We utilize hypnotherapy techniques supported by research and clinical evidence, ensuring effective
                    and reliable results for our clients.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="rounded-full bg-sky-100 p-3">
                    <Award className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold">Ethical Practice</h3>
                  <p className="text-sm text-muted-foreground">
                    We adhere to the highest ethical standards in hypnotherapy, ensuring confidentiality, respect, and
                    professional integrity in all client interactions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What is Hypnotherapy */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-800">
                What is Clinical Hypnotherapy?
              </h2>
              <p className="text-muted-foreground">
                Clinical hypnotherapy is a therapeutic technique that creates a state of focused attention and increased
                suggestibility, allowing access to the subconscious mind.
              </p>
              <p className="text-muted-foreground">
                During hypnosis, you remain aware and in control, but your mind becomes more receptive to positive
                suggestions that can help modify behaviors, manage symptoms, and promote healing.
              </p>
              <p className="text-muted-foreground">
                Unlike stage hypnosis, clinical hypnotherapy is a professional therapeutic intervention backed by
                research and used by healthcare providers worldwide to address a variety of conditions.
              </p>
              <h3 className="text-xl font-bold text-sky-700 mt-6">Common Misconceptions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-bold">Myth:</span> You lose control during hypnosis.
                  <span className="font-bold">Fact:</span> You remain aware and in control throughout the session.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">Myth:</span> Hypnosis can make you reveal secrets.
                  <span className="font-bold">Fact:</span> You cannot be made to do or say anything against your will.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">Myth:</span> Only weak-minded people can be hypnotized.
                  <span className="font-bold">Fact:</span> Hypnosis requires focus and imagination, traits of strong
                  minds.
                </li>
              </ul>
            </div>
            <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://mindandsoulworks.ae/wp-content/uploads/2024/06/pexels-alex-green-5699432-2048x1365.webp"
                alt="Clinical hypnotherapy session"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-800">
                Ready to Begin Your Journey?
              </h2>
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
    </div>
  )
}
