import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button, buttonVariants } from "../ui/Button";
import React from "react";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    React.createElement("div", { className: "w-screen " },
      React.createElement("div", { className: "container mx-auto" },
        React.createElement("div", { className: "flex gap-8 py-20 lg:py-20 items-center justify-center flex-col" },
          // Button section
          React.createElement("div", null,
            React.createElement(Button, { variant: "secondary", size: "sm", className: "gap-4" },
              "Read our launch article ",
              React.createElement(MoveRight, { className: "w-4 h-4" })
            )
          ),
          // Title section
          React.createElement("div", { className: "flex gap-4 flex-col" },
            React.createElement("h1", { className: "text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular" },
              React.createElement("span", { className: "text-spektr-cyan-50" }, "This is something"),
              React.createElement("span", { className: "relative flex w-full justify-center overflow-hidden text-center md:pb-10 md:pt-10" },
                " ",
                ...titles.map((title, index) =>
                  React.createElement(motion.span, {
                    key: index,
                    className: "absolute font-semibold",
                    initial: { opacity: 0, y: "-100" },
                    transition: { type: "spring", stiffness: 50 },
                    animate: titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                  }, title)
                )
              )
            ),
            // Description
            React.createElement("p", { className: "text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center" },
              "Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever."
            )
          ),
          // CTA buttons
          React.createElement("div", { className: "flex flex-row gap-3" },
            React.createElement(Button, { size: "lg", className: "gap-4 bg-white text-blue-950 hover:bg-blue-950 hover:text-white", variant: "outline" },
              "Jump on a call ",
              React.createElement(PhoneCall, { className: "w-4 h-4" })
            ),
            React.createElement(Button, { size: "lg", className: "gap-4 bg-white text-blue-950 hover:bg-blue-950 hover:text-white", variant: "outline" },
              "Sign up here ",
              React.createElement(MoveRight, { className: "w-4 h-4" })
            )
          )
        )
      )
    )
  );
}

export { Hero };