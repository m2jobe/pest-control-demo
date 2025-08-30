import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "FloridaPest Control Experts - 24/7 Emergency Pest Control",
    template: `%s - FloridaPest Control`,
  },
  description:
    "Florida's premier pest control service. 24/7 emergency response, eco-friendly solutions, and guaranteed results. Serving all of Florida with licensed, certified technicians.",
  keywords:
    "pest control Florida, emergency pest control, termite control, mosquito control, rodent control, exterminator Florida",
  authors: [{ name: "FloridaPest Control Experts" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "FloridaPest Control Experts - 24/7 Emergency Service",
    description:
      "Protecting Florida homes and businesses from unwanted pests for over 15 years. Licensed, insured, and guaranteed.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full bg-default-100 mt-20">
              <div className="container mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Company Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary text-primary-foreground rounded-full p-2 text-xl">
                        🐛
                      </div>
                      <div>
                        <p className="font-bold text-xl text-primary">
                          FloridaPest
                        </p>
                        <p className="text-sm text-default-600">
                          Control Experts
                        </p>
                      </div>
                    </div>
                    <p className="text-default-700 mb-4">
                      Florida's trusted pest control experts since 2009. We
                      protect your home and family with safe, effective, and
                      guaranteed pest control solutions.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>📍 Serving All of Florida</p>
                      <p>📞 24/7 Emergency: (555) 123-PEST</p>
                      <p>📧 info@floridapest.com</p>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="font-semibold mb-4 text-default-900">
                      Services
                    </h3>
                    <ul className="space-y-2 text-sm text-default-700">
                      <li>
                        <Link
                          href="/services/general"
                          className="hover:text-primary"
                        >
                          General Pest Control
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/termites"
                          className="hover:text-primary"
                        >
                          Termite Control
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/mosquito"
                          className="hover:text-primary"
                        >
                          Mosquito Control
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/rodents"
                          className="hover:text-primary"
                        >
                          Rodent Control
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/emergency"
                          className="hover:text-primary"
                        >
                          Emergency Service
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Company */}
                  <div>
                    <h3 className="font-semibold mb-4 text-default-900">
                      Company
                    </h3>
                    <ul className="space-y-2 text-sm text-default-700">
                      <li>
                        <Link href="/about" className="hover:text-primary">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="hover:text-primary">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link href="/reviews" className="hover:text-primary">
                          Reviews
                        </Link>
                      </li>
                      <li>
                        <Link href="/careers" className="hover:text-primary">
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className="hover:text-primary">
                          Pest Control Tips
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-default-200 mt-8 pt-8 text-center">
                  <p className="text-sm text-default-600 mb-2">
                    © 2025 FloridaPest Control Experts. All rights reserved. |
                    Licensed & Insured
                  </p>
                  <p className="text-xs text-default-500">
                    Florida Pest Control License #PC-1234 | Certified by Florida
                    Department of Agriculture
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
