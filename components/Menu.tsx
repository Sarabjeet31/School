"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GiHamburgerMenu } from "react-icons/gi";

const componentsInfrastucture = [
  {
    title: "Campus",
    href: "/campus",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Labs",
    href: "/labs",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Classrooms",
    href: "/classrooms",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Sports",
    href: "/sports",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Conference Hall",
    href: "/conferenceHall",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Library",
    href: "/library",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];
const components = [
  {
    title: "Principle Message",
    href: "/frmPrincipalMsg",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Public Disclosure",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "SMC",
    href: "/SMC",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Administration",
    href: "/admission",
    description: "Visually or semantically separates content.",
  },
  {
    title: "About Us",
    href: "/about",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];
const componentStudent = [
  {
    title: "Clubs",
    href: "/clubs",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Syllabus",
    href: "/curriculum",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Curriculum",
    href: "/curriculum",
    description: "Visually or semantically separates content.",
  },
];
const componentAttraction = [
  {
    title: "Mission Buniyaad",
    href: "/mission",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Inclusive Education - IED",
    href: "/IED",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "NSQF",
    href: "/NSQF",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "NSS",
    href: "/NSS",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Mid Day Meal - MDM",
    href: "/MDM",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];
const componentsExams = [
  {
    title: "Datesheet",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Results",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (section: string) => {
    if (activeDropdown === section) {
      setActiveDropdown("");
    } else {
      setActiveDropdown(section);
    }
  };

  return (
    <NavigationMenu>
      <div className="flex-row">
        <div className="flex justify-between items-center p-4 text-white md:hidden">
          <div className="flex items-center space-x-4">
            <button onClick={toggleMenu} className="p-2 bg-blue-500 rounded">
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} md:flex-row md:items-center`}>
          <NavigationMenuList className="flex flex-col md:flex-row gap-3">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{ fontSize: '1rem' }}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger onClick={() => toggleDropdown("about")} className="text-base">About</NavigationMenuTrigger>
              <NavigationMenuContent className={`${activeDropdown === "about" ? "block" : "hidden"} md:block`}>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger onClick={() => toggleDropdown("infrastructure")} className="text-base">Infrastructure</NavigationMenuTrigger>
              <NavigationMenuContent className={`${activeDropdown === "infrastructure" ? "block" : "hidden"} md:block`}>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {componentsInfrastucture.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href} className="text-sm">
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger onClick={() => toggleDropdown("student")} className="text-base">Student</NavigationMenuTrigger>
              <NavigationMenuContent className={`${activeDropdown === "student" ? "block" : "hidden"} md:block`}>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {componentStudent.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger onClick={() => toggleDropdown("exam")} className="text-base">Exam</NavigationMenuTrigger>
              <NavigationMenuContent className={`${activeDropdown === "exam" ? "block" : "hidden"} md:block`}>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {componentsExams.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger onClick={() => toggleDropdown("attraction")} className="text-base">Attraction</NavigationMenuTrigger>
              <NavigationMenuContent className={`${activeDropdown === "attraction" ? "block" : "hidden"} md:block`}>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {componentAttraction.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </div>
    </NavigationMenu>
  );
}
interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  children?: React.ReactNode;
}

export const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base text-gray-700 font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
