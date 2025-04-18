"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { CalendarIcon, Clock, CheckCircle } from "lucide-react"

export default function BookingPage() {
  const [date, setDate] = useState(null)
  const [timeSlot, setTimeSlot] = useState("")
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    notes: "",
  })
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  const services = [
    "Initial Consultation",
    "Anxiety & Stress Management",
    "Confidence & Self-Esteem",
    "Habits & Addictions",
    "Phobias & Fears",
    "Performance Enhancement",
    "Sleep Improvement",
    "Other (please specify in notes)",
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleTimeSlotChange = (value) => {
    setTimeSlot(value)
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // For a static site, we would typically use a form service
      // This is a simulation of form submission for demonstration purposes
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real implementation, you would send the booking data to a service
      // For example: await fetch('https://formspree.io/f/your-form-id', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     ...formState,
      //     date: date ? format(date, 'PPP') : '',
      //     timeSlot
      //   }),
      //   headers: { 'Content-Type': 'application/json' }
      // });

      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
                Book Your Session
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step toward positive change with a personalized hypnotherapy session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            {isSubmitted ? (
              <Card className="border-green-100 bg-green-50">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="h-16 w-16 text-green-600" />
                  </div>
                  <CardTitle className="text-center text-2xl text-green-800">Booking Confirmed!</CardTitle>
                  <CardDescription className="text-center text-green-700">
                    Thank you for booking your session with Mind and Soul Hypnotherapy.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-center text-green-700">
                    We've sent a confirmation email to {formState.email} with all the details of your appointment.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-2">Appointment Details:</h3>
                    <p className="text-sm text-green-700">
                      <strong>Date:</strong> {date ? format(date, "PPP") : "Not selected"}
                    </p>
                    <p className="text-sm text-green-700">
                      <strong>Time:</strong> {timeSlot}
                    </p>
                    <p className="text-sm text-green-700">
                      <strong>Service:</strong> {formState.service}
                    </p>
                  </div>
                  <p className="text-sm text-center text-green-700">
                    If you need to reschedule or have any questions, please contact us at (02) 1234 5678.
                  </p>
                  <div className="flex justify-center pt-4">
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/">Return to Home</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Appointment</CardTitle>
                  <CardDescription>Complete the form below to schedule your hypnotherapy session.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <div className={`flex items-center ${step >= 1 ? "text-sky-600" : "text-muted-foreground"}`}>
                        <div
                          className={`rounded-full w-6 h-6 flex items-center justify-center mr-2 ${
                            step >= 1 ? "bg-sky-100 text-sky-600" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          1
                        </div>
                        <span className="text-sm font-medium">Service</span>
                      </div>
                      <div
                        className={`flex-1 border-t mx-2 self-center ${step >= 2 ? "border-sky-200" : "border-muted"}`}
                      />
                      <div className={`flex items-center ${step >= 2 ? "text-sky-600" : "text-muted-foreground"}`}>
                        <div
                          className={`rounded-full w-6 h-6 flex items-center justify-center mr-2 ${
                            step >= 2 ? "bg-sky-100 text-sky-600" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          2
                        </div>
                        <span className="text-sm font-medium">Date & Time</span>
                      </div>
                      <div
                        className={`flex-1 border-t mx-2 self-center ${step >= 3 ? "border-sky-200" : "border-muted"}`}
                      />
                      <div className={`flex items-center ${step >= 3 ? "text-sky-600" : "text-muted-foreground"}`}>
                        <div
                          className={`rounded-full w-6 h-6 flex items-center justify-center mr-2 ${
                            step >= 3 ? "bg-sky-100 text-sky-600" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          3
                        </div>
                        <span className="text-sm font-medium">Details</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="service">Select a Service</Label>
                          <Select value={formState.service} onValueChange={handleServiceChange} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="pt-4 flex justify-end">
                          <Button
                            type="button"
                            onClick={handleNextStep}
                            disabled={!formState.service}
                            className="bg-sky-600 hover:bg-sky-700"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label>Select a Date</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" className="w-full justify-start text-left font-normal">
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  initialFocus
                                  disabled={
                                    (date) =>
                                      date < new Date() ||
                                      date.getDay() === 0 || // Sunday
                                      date.getDay() === 6 // Saturday
                                  }
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div className="space-y-2">
                            <Label>Select a Time</Label>
                            <Select value={timeSlot} onValueChange={handleTimeSlotChange} disabled={!date}>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose a time">
                                  {timeSlot ? (
                                    <div className="flex items-center">
                                      <Clock className="mr-2 h-4 w-4" />
                                      {timeSlot}
                                    </div>
                                  ) : (
                                    "Choose a time"
                                  )}
                                </SelectValue>
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="pt-4 flex justify-between">
                          <Button type="button" variant="outline" onClick={handlePrevStep}>
                            Back
                          </Button>
                          <Button
                            type="button"
                            onClick={handleNextStep}
                            disabled={!date || !timeSlot}
                            className="bg-sky-600 hover:bg-sky-700"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Your full name"
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
                              placeholder="Your email address"
                              required
                              value={formState.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="Your phone number"
                            required
                            value={formState.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="notes">Additional Notes (Optional)</Label>
                          <Textarea
                            id="notes"
                            name="notes"
                            placeholder="Any specific concerns or questions you'd like to address"
                            rows={3}
                            value={formState.notes}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="pt-4 flex justify-between">
                          <Button type="button" variant="outline" onClick={handlePrevStep}>
                            Back
                          </Button>
                          <Button
                            type="submit"
                            disabled={isSubmitting || !formState.name || !formState.email || !formState.phone}
                            className="bg-sky-600 hover:bg-sky-700"
                          >
                            {isSubmitting ? "Confirming..." : "Confirm Booking"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Additional Information */}
            {!isSubmitted && (
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold text-sky-800">Important Information</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Cancellation Policy:</strong> We request at least 24 hours' notice for cancellations or
                    rescheduling. Late cancellations may incur a fee.
                  </p>
                  <p>
                    <strong>First Session:</strong> Please arrive 10 minutes early to complete any necessary paperwork.
                  </p>
                  <p>
                    <strong>Payment:</strong> We accept cash, credit cards, and EFTPOS. Health fund rebates may be
                    available for eligible clients.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  If you have any questions or need assistance with booking, please call us at (02) 1234 5678 or email
                  info@mindandsoul.com.au.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
