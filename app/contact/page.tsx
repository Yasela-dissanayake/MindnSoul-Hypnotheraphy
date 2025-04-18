"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // For a static site, we would typically use a form service like Formspree
      // This is a simulation of form submission for demonstration purposes
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real implementation, you would send the form data to a service
      // For example: await fetch('https://formspree.io/f/your-form-id', {
      //   method: 'POST',
      //   body: JSON.stringify(formState),
      //   headers: { 'Content-Type': 'application/json' }
      // });

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      setError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">Contact Us</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're here to answer your questions and help you begin your journey to positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-sky-800">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="border-green-100 bg-green-50">
                  <CardContent className="pt-6">
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold text-green-800">Thank You!</h3>
                      <p className="text-green-700">
                        Your message has been sent successfully. We'll get back to you shortly.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} className="mt-4 bg-green-600 hover:bg-green-700">
                        Send Another Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formState.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject of your message"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                    />
                  </div>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-sky-800">Contact Information</h2>
                <p className="text-muted-foreground">Reach out to us directly or visit our office in Sydney.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-sky-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <MapPin className="h-5 w-5 text-sky-600" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      123 Serenity Lane
                      <br />
                      Sydney, NSW 2000
                      <br />
                      Australia
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-sky-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Phone className="h-5 w-5 text-sky-600" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">(02) 1234 5678</p>
                    <p className="text-xs text-muted-foreground mt-1">Monday to Friday, 9am to 5pm</p>
                  </CardContent>
                </Card>
                <Card className="border-sky-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Mail className="h-5 w-5 text-sky-600" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">info@mindandsoul.com.au</p>
                    <p className="text-xs text-muted-foreground mt-1">We aim to respond within 24 hours</p>
                  </CardContent>
                </Card>
                <Card className="border-sky-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Clock className="h-5 w-5 text-sky-600" />
                      Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Monday to Friday: 9am - 5pm
                      <br />
                      Saturday: 9am - 1pm
                      <br />
                      Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-sky-800 mb-4">Find Us</h3>
                <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                  {/* In a real implementation, you would embed a map here */}
                  {/* For a static site, you could use a static map image or a service like Google Maps Static API */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">Map placeholder</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  We're conveniently located near public transport and have parking available nearby.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4 mt-8">
                <h3 className="text-lg font-semibold text-sky-800">Quick Links</h3>
                <div className="flex flex-col space-y-2">
                  <Link href="/faq" className="text-sky-600 hover:underline">
                    Frequently Asked Questions
                  </Link>
                  <Link href="/booking" className="text-sky-600 hover:underline">
                    Book an Appointment
                  </Link>
                  <Link href="/services" className="text-sky-600 hover:underline">
                    Our Services
                  </Link>
                </div>
              </div>
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
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
              <Link href="/booking">Book Your Session</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
