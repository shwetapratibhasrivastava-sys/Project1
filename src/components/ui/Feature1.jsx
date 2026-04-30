import { Button } from "@/components/ui/button";
import React from "react";

export function Feature1({
  title = "Blocks built with Shadcn & Tailwind",
  description = "Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  imageSrc = "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&h=600&fit=crop",
  imageAlt = "placeholder hero",
  buttonPrimary = {
    label: "Get Started",
    href: "https://shadcnblocks.com",
  },
  buttonSecondary = {
    label: "Learn More",
    href: "https://shadcnblocks.com",
  },
}) {
  return (
    React.createElement("section", { className: "py-32" },
      React.createElement("div", { className: "container" },
        React.createElement("div", { className: "grid items-center gap-8 lg:grid-cols-2" },
          // Text content
          React.createElement("div", { className: "flex flex-col items-center text-center lg:items-start lg:text-left" },
            React.createElement("h1", { className: "my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl" }, title),
            React.createElement("p", { className: "mb-8 max-w-xl text-muted-foreground lg:text-lg" }, description),
            React.createElement("div", { className: "flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start" },
              React.createElement(Button, { asChild: true },
                React.createElement("a", { href: buttonPrimary.href, target: "_blank" }, buttonPrimary.label)
              ),
              React.createElement(Button, { variant: "outline", asChild: true },
                React.createElement("a", { href: buttonSecondary.href, target: "_blank" }, buttonSecondary.label)
              )
            )
          ),
          // Image
          React.createElement("img", {
            src: imageSrc,
            alt: imageAlt,
            className: "max-h-96 w-full rounded-md object-cover"
          })
        )
      )
    )
  );
}