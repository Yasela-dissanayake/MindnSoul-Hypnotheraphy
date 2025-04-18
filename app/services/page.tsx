import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, Sparkles, Zap, Coffee, Moon, NotebookIcon as Lotus, Dog, Flame, Leaf } from "lucide-react"

export const metadata = {
  title: "Services | Mind and Soul Hypnotherapy",
  description:
    "Explore our range of holistic healing services including hypnotherapy, reiki, meditation coaching, and more.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-800">
                Our Healing Services
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our comprehensive range of holistic healing modalities to support your wellbeing journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-12 md:py-24 bg-white" id="clinical-hypnotherapy">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {/* Clinical Hypnotherapy */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <Brain className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-sky-800">Clinical Hypnotherapy</h2>
                </div>
                <p className="text-muted-foreground">
                  Clinical hypnotherapy is a therapeutic approach that uses guided relaxation, intense concentration,
                  and focused attention to achieve a heightened state of awareness.
                </p>
                <p className="text-muted-foreground">
                  In this naturally occurring state, you can focus your attention on specific thoughts or tasks,
                  allowing for positive suggestions to help you experience changes in sensations, perceptions, thoughts,
                  or behavior.
                </p>
                <h3 className="text-lg font-semibold text-sky-700">This service can help with:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Anxiety and stress management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Phobias and fears
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Breaking unwanted habits
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Improving confidence and self-esteem
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Sleep issues and insomnia
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-sky-600 hover:bg-sky-700">
                    <Link href="/booking">Book This Service</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="https://mindandsoulworks.ae/wp-content/uploads/2024/06/hypnotherapy-2.jpg"
                  alt="Clinical hypnotherapy session"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Reiki Healing */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center" id="reiki">
              <div className="order-2 lg:order-1 mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="https://mindandsoulworks.ae/wp-content/uploads/2024/06/our-services-2-reiki.jpg"
                  alt="Reiki healing session"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2">
                  <Lotus className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-sky-800">Reiki Healing</h2>
                </div>
                <p className="text-muted-foreground">
                  Reiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It is
                  administered by "laying on hands" and is based on the idea that an unseen "life force energy" flows
                  through us.
                </p>
                <p className="text-muted-foreground">
                  When one's "life force energy" is low, we are more likely to get sick or feel stress, and when it is
                  high, we are more capable of being happy and healthy. Reiki treats the whole person including body,
                  emotions, mind and spirit.
                </p>
                <h3 className="text-lg font-semibold text-sky-700">Benefits include:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Deep relaxation and stress reduction
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Balancing of energy centers (chakras)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Relief from physical pain and discomfort
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Emotional healing and release
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Enhanced overall wellbeing
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-sky-600 hover:bg-sky-700">
                    <Link href="/booking">Book This Service</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Animal Reiki Healing */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center" id="animal-reiki">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <Dog className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-sky-800">Animal Reiki Healing</h2>
                </div>
                <p className="text-muted-foreground">
                  Animal Reiki is a gentle, non-invasive energy healing practice that promotes relaxation and wellbeing
                  for animals of all kinds. It's particularly beneficial for animals experiencing stress, anxiety,
                  illness, or recovery from injury.
                </p>
                <p className="text-muted-foreground">
                  During a session, the practitioner channels healing energy to the animal, who can choose to accept as
                  much or as little as they need. The animal remains in control throughout the process, making it a
                  respectful and non-traumatic experience.
                </p>
                <h3 className="text-lg font-semibold text-sky-700">Ideal for animals experiencing:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Anxiety or behavioral issues
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Recovery from surgery or illness
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Trauma or adjustment to new environments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Chronic conditions or pain
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    End-of-life transition support
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-sky-600 hover:bg-sky-700">
                    <Link href="/booking">Book This Service</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="https://mindandsoulworks.ae/wp-content/uploads/2024/05/rangika-animal-reiki.webp"
                  alt="Animal Reiki healing session"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Lama Fera Healing */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center" id="lama-fera">
              <div className="order-2 lg:order-1 mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="https://mindandsoulworks.ae/wp-content/uploads/2024/06/services-4-access-bars.jpg"
                  alt="Lama Fera healing session"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2">
                  <Flame className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-sky-800">Lama Fera Healing</h2>
                </div>
                <p className="text-muted-foreground">
                  Lama Fera is an ancient Buddhist healing system that originated in Tibet. The term "Lama" refers to a
                  spiritual teacher, and "Fera" means healing energy. This powerful healing modality works on physical,
                  mental, emotional, and spiritual levels.
                </p>
                <p className="text-muted-foreground">
                  During a session, the practitioner channels universal healing energy to remove negative energies and
                  blockages, promoting balance and harmony within the recipient's energy system.
                </p>
                <h3 className="text-lg font-semibold text-sky-700">Benefits include:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Clearing negative energies and entities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Protection from psychic attacks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Balancing chakras and energy systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Emotional healing and spiritual growth
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Enhanced overall wellbeing and vitality
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-sky-600 hover:bg-sky-700">
                    <Link href="/booking">Book This Service</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Meditation Coaching */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center" id="meditation">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-sky-800">Meditation Coaching</h2>
                </div>
                <p className="text-muted-foreground">
                  Our meditation coaching service provides personalized guidance to help you develop or deepen your
                  meditation practice. Whether you're a beginner or experienced practitioner, our coach will work with
                  you to create a sustainable practice that fits your lifestyle and goals.
                </p>
                <p className="text-muted-foreground">
                  Sessions include instruction in various meditation techniques, mindfulness practices, breathwork, and
                  strategies to overcome common challenges in meditation. We focus on practical approaches that you can
                  integrate into your daily life.
                </p>
                <h3 className="text-lg font-semibold text-sky-700">Our approach includes:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Personalized meditation techniques
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Mindfulness training for daily life
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Breathwork and relaxation techniques
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Strategies for maintaining consistency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Support for overcoming obstacles
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-sky-600 hover:bg-sky-700">
                    <Link href="/booking">Book This Service</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="https://mindandsoulworks.ae/wp-content/uploads/2024/06/pexels-mikhail-nilov-6932121-scaled.webp"
                  alt="Meditation coaching session"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Anxiety & Stress */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center" id="anxiety">
              <div className="order-2 lg:order-1 mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="https://mindandsoulworks.ae/wp-content/uploads/2024/06/services-4-access-bars.jpg"
                  alt="Person experiencing relaxation during hypnotherapy"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2">
                  <Brain className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-sky-800">Anxiety & Stress Management</h2>
                </div>
                <p className="text-muted-foreground">
                  Hypnotherapy is highly effective for reducing anxiety and managing stress by addressing both the
                  conscious and subconscious factors that contribute to these conditions.
                </p>
                <p className="text-muted-foreground">
                  Through targeted hypnotic suggestions, you'll learn to activate your natural relaxation response,
                  reframe anxious thoughts, and develop coping strategies that work at a deep level.
                </p>
                <h3 className="text-lg font-semibold text-sky-700">This service can help with:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Generalized anxiety and worry
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Panic attacks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Social anxiety
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Work-related stress
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Stress-related physical symptoms
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-sky-600 hover:bg-sky-700">
                    <Link href="/booking">Book This Service</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Confidence & Self-Esteem */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center" id="confidence">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <Heart className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-sky-800">Confidence & Self-Esteem</h2>
                </div>
                <p className="text-muted-foreground">
                  Low self-esteem and confidence issues often stem from negative beliefs formed in the subconscious
                  mind. Hypnotherapy provides direct access to these beliefs, allowing for powerful transformation.
                </p>
                <p className="text-muted-foreground">
                  Through hypnotic techniques, you'll replace limiting beliefs with positive self-perceptions, building
                  lasting confidence from within.
                </p>
                <h3 className="text-lg font-semibold text-sky-700">This service can help with:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Public speaking anxiety
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Imposter syndrome
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Negative self-talk
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Performance anxiety
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Self-doubt and insecurity
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-sky-600 hover:bg-sky-700">
                    <Link href="/booking">Book This Service</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="https://mindandsoulworks.ae/wp-content/uploads/2024/06/access-facelift-page-3.jpg"
                  alt="Person with confident posture"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Habits & Addictions */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center" id="habits">
              <div className="order-2 lg:order-1 mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="https://mindandsoulworks.ae/wp-content/uploads/2024/06/hypnotherapy-2.jpg"
                  alt="Breaking free from habits"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-sky-800">Habits & Addictions</h2>
                </div>
                <p className="text-muted-foreground">
                  Unwanted habits and addictions are often maintained by subconscious patterns. Hypnotherapy helps
                  interrupt these patterns and establish healthier alternatives.
                </p>
                <p className="text-muted-foreground">
                  By addressing both the conscious and subconscious aspects of habits, hypnotherapy provides a
                  comprehensive approach to lasting behavior change.
                </p>
                <h3 className="text-lg font-semibold text-sky-700">This service can help with:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Smoking cessation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Nail biting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Emotional eating
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Procrastination
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Technology addiction
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-sky-600 hover:bg-sky-700">
                    <Link href="/booking">Book This Service</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="pt-8">
              <h2 className="text-2xl font-bold text-sky-800 mb-8">Additional Services</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-sky-100">
                  <CardHeader>
                    <Zap className="h-6 w-6 text-sky-600 mb-2" />
                    <CardTitle>Phobias & Fears</CardTitle>
                    <CardDescription>
                      Overcome specific phobias and fears through targeted hypnotherapy techniques.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/booking">Book This Service</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-sky-100">
                  <CardHeader>
                    <Coffee className="h-6 w-6 text-sky-600 mb-2" />
                    <CardTitle>Performance Enhancement</CardTitle>
                    <CardDescription>
                      Improve sports, academic, or professional performance through mental training.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/booking">Book This Service</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-sky-100">
                  <CardHeader>
                    <Moon className="h-6 w-6 text-sky-600 mb-2" />
                    <CardTitle>Sleep Improvement</CardTitle>
                    <CardDescription>
                      Address insomnia and sleep disturbances for better rest and recovery.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/booking">Book This Service</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-800">Session Pricing</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transparent pricing with no hidden fees. Investment in your wellbeing.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>Initial Consultation</CardTitle>
                <div className="text-3xl font-bold">$150</div>
                <CardDescription>90 minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-1.5" />
                    Comprehensive assessment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-1.5" />
                    Personalized treatment plan
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-1.5" />
                    Initial session
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-1.5" />
                    Take-home resources
                  </li>
                </ul>
                <Button asChild className="w-full bg-sky-600 hover:bg-sky-700">
                  <Link href="/booking">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>Standard Session</CardTitle>
                <div className="text-3xl font-bold">$120</div>
                <CardDescription>60 minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-1.5" />
                    Progress review
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-1.5" />
                    Customized treatment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-1.5" />
                    Reinforcement of positive changes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-1.5" />
                    Ongoing support
                  </li>
                </ul>
                <Button asChild className="w-full bg-sky-600 hover:bg-sky-700">
                  <Link href="/booking">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>Package of 5 Sessions</CardTitle>
                <div className="text-3xl font-bold">$550</div>
                <CardDescription>Save $50</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-1.5" />
                    Initial consultation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-1.5" />4 follow-up sessions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-1.5" />
                    Complimentary audio recording
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-600 mt-1.5" />
                    Priority scheduling
                  </li>
                </ul>
                <Button asChild className="w-full bg-sky-600 hover:bg-sky-700">
                  <Link href="/booking">Book Package</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Health fund rebates may be available. Please check with your provider.</p>
            <p className="mt-2">Cancellations with less than 24 hours notice may incur a fee.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-sky-800">
                Ready to Transform Your Life?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step toward positive change with a personalized session.
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
