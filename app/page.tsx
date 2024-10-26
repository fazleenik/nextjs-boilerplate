import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Leaf, Heart, Shield, Zap, Star } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Empower Your Health,<br />
                <span className="text-pink-600">Naturally</span>
              </h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl">
                Discover our premium herbal supplement designed specifically for women's health and vitality.
              </p>
              <div className="mt-10">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="ml-4 px-8 py-3 rounded-full text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-64 sm:h-72 md:h-96">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Herbal supplement for women"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
            Benefits of Our Herbal Supplement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<Heart className="h-10 w-10 text-pink-600" />}
              title="Hormonal Balance"
              description="Support your body's natural hormonal cycles"
            />
            <BenefitCard
              icon={<Zap className="h-10 w-10 text-pink-600" />}
              title="Increased Energy"
              description="Feel more vibrant and energetic throughout the day"
            />
            <BenefitCard
              icon={<Shield className="h-10 w-10 text-pink-600" />}
              title="Immune Support"
              description="Strengthen your body's natural defenses"
            />
            <BenefitCard
              icon={<Leaf className="h-10 w-10 text-pink-600" />}
              title="Natural Ingredients"
              description="100% organic and ethically sourced herbs"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
            What Our Customers Say
          </h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <TestimonialCard
                  quote="This supplement has completely transformed my well-being. I feel more balanced and energetic than ever!"
                  author="Sarah J."
                  role="Yoga Instructor"
                  imageSrc="/placeholder.svg?height=150&width=150"
                />
              </CarouselItem>
              <CarouselItem>
                <TestimonialCard
                  quote="I've tried many products, but this is the only one that has made a noticeable difference in my hormonal health."
                  author="Emily R."
                  role="Working Mom"
                  imageSrc="/placeholder.svg?height=150&width=150"
                />
              </CarouselItem>
              <CarouselItem>
                <TestimonialCard
                  quote="The natural ingredients give me peace of mind. I love knowing I'm taking care of my body without harsh chemicals."
                  author="Lisa M."
                  role="Nutritionist"
                  imageSrc="/placeholder.svg?height=150&width=150"
                />
              </CarouselItem>
              <CarouselItem>
                <TestimonialCard
                  quote="Since starting this supplement, my energy levels have skyrocketed. I'm able to keep up with my kids and still have energy left over!"
                  author="Jessica T."
                  role="Stay-at-home Mom"
                  imageSrc="/placeholder.svg?height=150&width=150"
                />
              </CarouselItem>
              <CarouselItem>
                <TestimonialCard
                  quote="As a healthcare professional, I'm very particular about what I put in my body. This supplement meets all my standards for quality and effectiveness."
                  author="Dr. Amanda S."
                  role="OB/GYN"
                  imageSrc="/placeholder.svg?height=150&width=150"
                />
              </CarouselItem>
              <CarouselItem>
                <TestimonialCard
                  quote="I was skeptical at first, but after a month of use, I've noticed a significant improvement in my mood and overall well-being."
                  author="Rachel K."
                  role="Business Executive"
                  imageSrc="/placeholder.svg?height=150&width=150"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
            Natural Ingredients for Optimal Health
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <IngredientCard
              name="Maca Root"
              benefit="Hormonal Balance"
              imageSrc="/placeholder.svg?height=100&width=100"
            />
            <IngredientCard
              name="Ashwagandha"
              benefit="Stress Relief"
              imageSrc="/placeholder.svg?height=100&width=100"
            />
            <IngredientCard
              name="Red Clover"
              benefit="Menopause Support"
              imageSrc="/placeholder.svg?height=100&width=100"
            />
            <IngredientCard
              name="Dong Quai"
              benefit="Reproductive Health"
              imageSrc="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Health?
          </h2>
          <p className="mt-4 text-xl text-pink-100">
            Join thousands of women who have already discovered the power of our herbal supplement.
          </p>
          <Button size="lg" className="mt-8 bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full text-lg">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is this supplement safe to use?</AccordionTrigger>
              <AccordionContent>
                Yes, our supplement is made from 100% natural ingredients and is safe for most women. However, as with any supplement, we recommend consulting with your healthcare provider before use, especially if you have any pre-existing conditions or are pregnant or nursing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does it take to see results?</AccordionTrigger>
              <AccordionContent>
                While individual results may vary, many women report feeling a difference within 2-4 weeks of consistent use. For optimal results, we recommend using the supplement for at least 3 months.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are there any side effects?</AccordionTrigger>
              <AccordionContent>
                Our supplement is generally well-tolerated. However, some women may experience mild digestive discomfort when first starting. This typically subsides as your body adjusts to the herbs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
          <div className="flex flex-col mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Herbal Ads for Women</h3>
            <p className="text-gray-600 max-w-xs">Empowering women's health through the power of nature since 2020.</p>
          </div>
          <div className="flex flex-col mb-8 md:mb-0">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <a href="#" className="text-gray-600 hover:text-pink-600 mb-2">About Us</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 mb-2">Our Products</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 mb-2">Contact Us</a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>
            <p className="text-gray-600 mb-2">Email: info@herbalads.com</p>
            <p className="text-gray-600 mb-2">Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Herbal Ads for Women. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function BenefitCard({ icon, title, description }) {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ quote, author, role, imageSrc }) {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Image
            src={imageSrc}
            alt={`${author}'s profile`}
            width={60}
            height={60}
            className="rounded-full mr-4"
          />
          <div>
            <p className="text-gray-900 font-semibold">{author}</p>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <Star className="h-5 w-5 text-yellow-400" />
          <Star className="h-5 w-5 text-yellow-400" />
          <Star className="h-5 w-5 text-yellow-400" />
          <Star className="h-5 w-5 text-yellow-400" />
          <Star className="h-5 w-5 text-yellow-400" />
        </div>
        <p className="text-gray-600 italic mb-4">"{quote}"</p>
      </CardContent>
    </Card>
  )
}

function IngredientCard({ name, benefit, imageSrc }) {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-4 text-center">
        <Image src={imageSrc} alt={name} width={100} height={100} className="mx-auto mb-4 rounded-full" />
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{benefit}</p>
      </CardContent>
    </Card>
  
  )
}