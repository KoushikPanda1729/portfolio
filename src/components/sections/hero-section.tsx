"use client";

import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/ui/tech-badge";
import {
  ArrowRight,
  Linkedin,
  Mail,
  Code2,
  Boxes,
  Cpu,
  Globe,
  CodepenIcon,
  Database,
  Server,
  Laptop,
  Cloud,
  Github,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const techStack = [
    { icon: CodepenIcon, name: "React" },
    { icon: Database, name: "SQL" },
    { icon: Server, name: "Node.js" },
    { icon: Laptop, name: "TypeScript" },
    { icon: Cloud, name: "AWS" },
    { icon: Github, name: "Git" },
  ];

  const floatingIcons = [
    { icon: Code2, top: "10%", left: "10%", delay: 0 },
    { icon: Boxes, top: "20%", right: "10%", delay: 0.2 },
    { icon: Cpu, bottom: "20%", left: "15%", delay: 0.4 },
    { icon: Globe, bottom: "15%", right: "15%", delay: 0.6 },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center py-20 overflow-hidden bg-dot-pattern"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      {/* Animated background dots */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-primary/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative grid lg:grid-cols-2 gap-8 items-center">
        <motion.div className="flex flex-col gap-4" style={{ y: textY }}>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <Code2 className="h-4 w-4" />
              <span className="text-sm font-medium">Available for Work</span>
              <ArrowRight className="h-4 w-4" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-primary">Koushik Panda</span>
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
              A passionate full-stack developer crafting beautiful and
              functional web experiences
            </p>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Button asChild size="lg" className="rounded-full group">
              <Link href="#contact">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              asChild
            >
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {[
              { href: "https://github.com", icon: Github },
              { href: "https://linkedin.com", icon: Linkedin },
              { href: "mailto:example@example.com", icon: Mail },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-primary hover:scale-110 transition-transform"
                asChild
              >
                <Link href={social.href} target="_blank">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.href}</span>
                </Link>
              </Button>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {techStack.map((tech, index) => (
              <TechBadge key={index} {...tech} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          style={{
            scale: imageScale,
            rotate: imageRotate,
          }}
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Animated rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Main image container */}
            <div className="relative z-10 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-2">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-dot-pattern">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=500&fit=crop"
                  alt="Developer coding on a computer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />

                {/* Floating icons */}
                {floatingIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-primary/20"
                    style={{ ...item, position: "absolute" }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: item.delay, duration: 0.5 }}
                  >
                    <item.icon className="h-12 w-12" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
