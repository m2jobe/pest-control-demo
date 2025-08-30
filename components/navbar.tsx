import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="bg-primary text-primary-foreground rounded-full p-2 text-xl">
      🐛
    </div>
  </div>
);

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-background/80 backdrop-blur-md"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-3" href="/">
            <Logo />
            <div className="flex flex-col">
              <p className="font-bold text-xl text-primary">FloridaPest</p>
              <p className="text-xs text-default-600">Control Experts</p>
            </div>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-6 justify-start ml-8"></ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-4">
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem>
          <Button
            color="success"
            variant="flat"
            size="sm"
            className="font-semibold"
          >
            📞 (555) 123-PEST
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Button color="primary" size="sm" className="font-semibold">
            Free Quote
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          <NavbarMenuItem className="mt-4">
            <Button color="primary" className="w-full font-semibold" size="lg">
              📞 Call (555) 123-PEST
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
