import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "FAQ | Tranquil Mind Hypnotherapy",
  description: "Frequently asked questions about hypnotherapy, our services, and what to expect during your sessions.",
}

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
                Frequently Asked Questions
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about hypnotherapy and our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-sky-800">About Hypnotherapy</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is hypnotherapy?</AccordionTrigger>
                  <AccordionContent>
                    Hypnotherapy is a therapeutic technique that uses hypnosis to create a state of focused attention
                    and increased suggestibility. During this state, a trained hypnotherapist can make suggestions to
                    help you change patterns of behavior, thoughts, or feelings. It's a collaborative process where you
                    remain in control throughout the session.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is hypnotherapy scientifically proven?</AccordionTrigger>
                  <AccordionContent>
                    Yes, hypnotherapy has been studied extensively and has scientific support for its effectiveness in
                    treating various conditions. Research has shown it to be particularly effective for anxiety, pain
                    management, smoking cessation, and certain phobias. The Australian Psychological Society recognizes
                    hypnotherapy as an evidence-based therapeutic intervention.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Will I lose control during hypnosis?</AccordionTrigger>
                  <AccordionContent>
                    No, you will not lose control during hypnosis. This is a common misconception often based on stage
                    hypnosis shows. During therapeutic hypnosis, you remain aware of your surroundings and in control of
                    your actions. You cannot be made to do anything against your will or values. You can end the
                    hypnotic state at any time if you choose to do so.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can anyone be hypnotized?</AccordionTrigger>
                  <AccordionContent>
                    Most people can experience hypnosis to some degree, but the depth of hypnosis varies from person to
                    person. Contrary to popular belief, being easily hypnotized is a sign of focus and intelligence, not
                    weakness. People who are willing to engage in the process and follow instructions tend to have the
                    best results. About 85% of people can be hypnotized to some degree.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How does hypnotherapy work?</AccordionTrigger>
                  <AccordionContent>
                    Hypnotherapy works by accessing the subconscious mind, where many of our habits, beliefs, and
                    automatic responses are stored. By bypassing the critical conscious mind, hypnotherapy allows for
                    new, more helpful suggestions to be accepted by the subconscious. This can lead to changes in
                    thoughts, feelings, and behaviors that were previously difficult to modify through conscious effort
                    alone.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-sky-800">Our Services</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-6">
                  <AccordionTrigger>What conditions can hypnotherapy help with?</AccordionTrigger>
                  <AccordionContent>
                    Hypnotherapy can be effective for a wide range of conditions including anxiety, stress, phobias,
                    habits (like nail biting or smoking), sleep issues, pain management, confidence building, weight
                    management, and performance enhancement. It's important to note that hypnotherapy works best as part
                    of a comprehensive approach to wellbeing and may not be suitable for all conditions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>How many sessions will I need?</AccordionTrigger>
                  <AccordionContent>
                    The number of sessions varies depending on your specific needs and how you respond to hypnotherapy.
                    Some issues can be addressed in as few as 3-6 sessions, while more complex or long-standing issues
                    may require more. After your initial consultation, we'll provide a recommendation for a treatment
                    plan tailored to your specific situation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>How long does each session last?</AccordionTrigger>
                  <AccordionContent>
                    The initial consultation and first hypnotherapy session typically lasts about 90 minutes. This
                    allows time for a thorough assessment of your needs and goals. Subsequent sessions are usually 60
                    minutes in duration. These timeframes ensure we have adequate time for both discussion and the
                    hypnotherapy process itself.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>Are your services covered by health insurance?</AccordionTrigger>
                  <AccordionContent>
                    Some private health funds in Australia provide rebates for hypnotherapy services, particularly if
                    they're provided by a practitioner with appropriate qualifications. Coverage varies between
                    providers and specific policies. We recommend checking with your health fund directly to confirm if
                    you're eligible for rebates. We can provide receipts for you to submit to your health fund.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-sky-800">What to Expect</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-10">
                  <AccordionTrigger>What happens during the first session?</AccordionTrigger>
                  <AccordionContent>
                    The first session begins with a comprehensive consultation to understand your goals, history, and
                    specific concerns. We'll discuss your expectations and answer any questions you may have. Then, I'll
                    explain how hypnotherapy works and guide you through your first hypnotic experience. This initial
                    session helps establish rapport and creates a foundation for our future work together.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                  <AccordionTrigger>What does hypnosis feel like?</AccordionTrigger>
                  <AccordionContent>
                    Most people describe hypnosis as a pleasant state of deep relaxation with heightened focus. You
                    might experience a sense of heaviness or lightness in your body, and time may seem to pass
                    differently. You'll remain aware of your surroundings but may be less concerned with them. It's
                    similar to being absorbed in a good book or movie, or the drowsy state just before falling asleep
                    while still being aware.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger>Should I prepare anything before my session?</AccordionTrigger>
                  <AccordionContent>
                    To get the most from your session, wear comfortable clothing and avoid heavy meals or alcohol
                    beforehand. It's helpful to come with clear goals about what you'd like to achieve. There's no need
                    to prepare anything specific - just come with an open mind and willingness to participate in the
                    process. If you have any concerns or questions, note them down to discuss during your session.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                  <AccordionTrigger>Will I remember what happens during hypnosis?</AccordionTrigger>
                  <AccordionContent>
                    Yes, most people remember everything that happens during hypnosis. Occasionally, some people may
                    experience amnesia for parts of the session, but this is relatively rare in clinical hypnotherapy.
                    The experience is more like focused attention than being "unconscious." You'll be able to recall the
                    suggestions and experiences from your session, which can help reinforce the positive changes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                  <AccordionTrigger>How quickly will I see results?</AccordionTrigger>
                  <AccordionContent>
                    The timeline for results varies depending on your specific situation and how receptive you are to
                    hypnotherapy. Some people experience noticeable changes after just one session, while others may
                    require several sessions before significant changes occur. Hypnotherapy often creates subtle shifts
                    that build over time. We'll regularly assess your progress and adjust our approach as needed to help
                    you achieve your goals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-sky-800">Booking & Logistics</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-15">
                  <AccordionTrigger>How do I book an appointment?</AccordionTrigger>
                  <AccordionContent>
                    You can book an appointment through our online booking system on the website, by calling our office
                    at (02) 1234 5678, or by sending an email to info@tranquilmind.com.au. We aim to respond to all
                    inquiries within 24 hours during business days. If you have any special requirements or questions
                    before booking, please don't hesitate to contact us.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-16">
                  <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
                  <AccordionContent>
                    We understand that circumstances can change. We request at least 24 hours' notice for cancellations
                    or rescheduling. Late cancellations (less than 24 hours) or missed appointments may incur a fee of
                    50% of the session cost. Emergencies are considered on a case-by-case basis. This policy helps us
                    manage our schedule effectively and provide timely service to all clients.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-17">
                  <AccordionTrigger>Where are you located?</AccordionTrigger>
                  <AccordionContent>
                    Our practice is located at 123 Serenity Lane, Sydney, NSW 2000. We're conveniently situated near
                    public transport and have parking available nearby. The office is wheelchair accessible. For clients
                    who are unable to attend in person, we also offer online hypnotherapy sessions via secure video
                    conferencing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-18">
                  <AccordionTrigger>Do you offer online sessions?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer online hypnotherapy sessions via secure video conferencing. Online sessions can be
                    just as effective as in-person sessions for many conditions. They provide a convenient option for
                    clients who live far away, have mobility issues, or prefer the comfort of their own home. We'll
                    provide clear instructions on how to prepare your environment for an optimal online session
                    experience.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-800">Still Have Questions?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're here to help. Contact us for more information or to discuss your specific needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/booking">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
