import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-16 text-center">
        <div className="flex items-center gap-2 mb-4">
          <Chip color="success" variant="flat" className="text-sm">
            🏆 Florida's #1 Pest Control
          </Chip>
        </div>

        <div className="inline-block max-w-4xl text-center">
          <span className={title({ size: "lg" })}>Florida's Premier&nbsp;</span>
          <span className={title({ color: "blue", size: "lg" })}>
            Pest Control&nbsp;
          </span>
          <br />
          <span className={title({ size: "lg" })}>Experts</span>

          <div className={subtitle({ class: "mt-6 max-w-2xl mx-auto" })}>
            Protecting Florida homes and businesses from unwanted pests for over
            15 years. 24/7 emergency service, eco-friendly solutions, and
            guaranteed results.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            size="lg"
            color="primary"
            radius="full"
            className="font-semibold text-lg px-8 py-6"
          >
            📞 Call Now: (555) 123-PEST
          </Button>
          <Button
            size="lg"
            variant="bordered"
            radius="full"
            className="font-semibold text-lg px-8 py-6"
          >
            Get Free Quote
          </Button>
        </div>

        <div className="flex items-center gap-8 mt-8 text-sm text-default-600 flex-wrap justify-center">
          <div className="flex items-center gap-2">
            <span className="text-success">✓</span> Licensed & Insured
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success">✓</span> 24/7 Emergency Service
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success">✓</span> Satisfaction Guaranteed
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className={title({ size: "md" })}>
            Complete Pest Control Solutions
          </h2>
          <p className={subtitle({ class: "mt-4" })}>
            From ants to alligators, we handle all of Florida's unique pest
            challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <CardBody className="text-center">
              <div className="text-4xl mb-4">🐛</div>
              <h3 className="text-xl font-semibold mb-3">
                General Pest Control
              </h3>
              <p className="text-default-600 mb-4">
                Comprehensive treatment for ants, roaches, spiders, and common
                household pests.
              </p>
              <Button color="primary" variant="flat" size="sm">
                Learn More
              </Button>
            </CardBody>
          </Card>

          <Card className="p-6">
            <CardBody className="text-center">
              <div className="text-4xl mb-4">🦟</div>
              <h3 className="text-xl font-semibold mb-3">Mosquito Control</h3>
              <p className="text-default-600 mb-4">
                Florida-specific mosquito treatments to protect your family from
                disease-carrying pests.
              </p>
              <Button color="primary" variant="flat" size="sm">
                Learn More
              </Button>
            </CardBody>
          </Card>

          <Card className="p-6">
            <CardBody className="text-center">
              <div className="text-4xl mb-4">🐀</div>
              <h3 className="text-xl font-semibold mb-3">Rodent Control</h3>
              <p className="text-default-600 mb-4">
                Safe and effective removal of mice, rats, and other rodents from
                your property.
              </p>
              <Button color="primary" variant="flat" size="sm">
                Learn More
              </Button>
            </CardBody>
          </Card>

          <Card className="p-6">
            <CardBody className="text-center">
              <div className="text-4xl mb-4">🪳</div>
              <h3 className="text-xl font-semibold mb-3">Termite Protection</h3>
              <p className="text-default-600 mb-4">
                Advanced termite detection and treatment to protect your biggest
                investment.
              </p>
              <Button color="primary" variant="flat" size="sm">
                Learn More
              </Button>
            </CardBody>
          </Card>

          <Card className="p-6">
            <CardBody className="text-center">
              <div className="text-4xl mb-4">🐝</div>
              <h3 className="text-xl font-semibold mb-3">Bee & Wasp Removal</h3>
              <p className="text-default-600 mb-4">
                Safe removal of stinging insects with eco-friendly relocation
                when possible.
              </p>
              <Button color="primary" variant="flat" size="sm">
                Learn More
              </Button>
            </CardBody>
          </Card>

          <Card className="p-6">
            <CardBody className="text-center">
              <div className="text-4xl mb-4">🦎</div>
              <h3 className="text-xl font-semibold mb-3">Wildlife Control</h3>
              <p className="text-default-600 mb-4">
                Humane removal of snakes, iguanas, and other Florida wildlife
                from your property.
              </p>
              <Button color="primary" variant="flat" size="sm">
                Learn More
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-danger-50 dark:bg-danger-950 rounded-3xl">
        <div className="text-center px-8">
          <div className="text-6xl mb-4">🚨</div>
          <h2 className={title({ color: "blue" })}>
            24/7 Emergency Pest Control
          </h2>
          <p className={subtitle({ class: "mt-4 mb-8" })}>
            Pest emergency? Don't wait. Our certified technicians respond within
            2 hours, even on weekends and holidays.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              color="danger"
              className="font-bold text-xl px-10 py-8"
              radius="full"
            >
              🚨 Emergency Call: (555) 911-PEST
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2">2-Hour Response</h3>
              <p className="text-sm text-default-600">
                Fast emergency response guaranteed
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-semibold mb-2">24/7 Availability</h3>
              <p className="text-sm text-default-600">
                Call anytime, day or night
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold mb-2">Certified Experts</h3>
              <p className="text-sm text-default-600">
                Licensed Florida pest control pros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className={title()}>Why Florida Families Trust Us</h2>
          <p className={subtitle({ class: "mt-4" })}>
            Over 50,000 satisfied customers across the Sunshine State
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4 text-primary">15+</div>
            <h3 className="font-semibold mb-2">Years Experience</h3>
            <p className="text-sm text-default-600">
              Serving Florida since 2009
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4 text-primary">50K+</div>
            <h3 className="font-semibold mb-2">Happy Customers</h3>
            <p className="text-sm text-default-600">
              Homes & businesses protected
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4 text-primary">100%</div>
            <h3 className="font-semibold mb-2">Satisfaction Rate</h3>
            <p className="text-sm text-default-600">
              Guaranteed results or money back
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4 text-primary">24/7</div>
            <h3 className="font-semibold mb-2">Emergency Service</h3>
            <p className="text-sm text-default-600">
              Always available when you need us
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-primary-50 dark:bg-primary-950 rounded-3xl">
        <div className="px-8">
          <h2 className={title({ color: "blue" })}>
            Ready to Eliminate Your Pest Problem?
          </h2>
          <p className={subtitle({ class: "mt-4 mb-8" })}>
            Get your free inspection and customized treatment plan today.
            Same-day service available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              color="primary"
              className="font-bold text-xl px-10 py-8"
              radius="full"
            >
              📞 Call (555) 123-PEST
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="font-bold text-xl px-10 py-8"
              radius="full"
            >
              📝 Schedule Online
            </Button>
          </div>

          <div className="text-sm text-default-600">
            Licensed • Bonded • Insured | Serving All of Florida
          </div>
        </div>
      </section>
    </div>
  );
}
