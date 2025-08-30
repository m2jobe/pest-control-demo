export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FloridaPest Control Experts",
  description:
    "Florida's premier pest control service. 24/7 emergency response, eco-friendly solutions, and guaranteed results. Licensed, insured, and serving all of Florida.",
  navMenuItems: [
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Emergency Service",
      href: "/emergency",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Customer Reviews",
      href: "/reviews",
    },
    {
      label: "Pest Control Tips",
      href: "/blog",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "Get Free Quote",
      href: "/quote",
    },
  ],
  links: {
    phone: "tel:5551234737",
    emergency: "tel:5559117378",
    email: "mailto:info@floridapest.com",
    quote: "/quote",
    facebook: "https://facebook.com/floridapest",
    instagram: "https://instagram.com/floridapest",
    google: "https://g.page/floridapest",
  },
};
