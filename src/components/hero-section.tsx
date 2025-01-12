"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail, Github, Download} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ReactIcon,
  NodeIcon,
  NextJSIcon,
  AWSIcon,
  DockerIcon,
  FlutterIcon,
  ReactNativeIcon,
  MongoDBIcon,
} from "./tech-icons";


export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth) * 100,
        y: (clientY / innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextJSIcon },
    { name: "React Native", icon: ReactNativeIcon },
    { name: "Flutter", icon: FlutterIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "AWS", icon: AWSIcon },
    { name: "Docker", icon: DockerIcon },
  ];

  const experience = [
    {
      company: "Fordel Studio",
      role: "Software Engineer (SDE1)",
      period: "2024 - Present",
      description:
        "Responsible for designing, developing, and maintaining scalable web and App , ensuring high-quality software delivery, and collaborating with cross-functional teams to meet business objectives.",
    },
  ];
const resumeFile = "/resume/Koushik_Panda_Resume.pdf";
const demoImage =
  "https://media.licdn.com/dms/image/v2/D5603AQELBIEhoD5pJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703826175873?e=1742428800&v=beta&t=pjFc0fb0WAWSeq21PobT9YrE_qJ2l5XFmvSCZRs7ix0";

  return (
    <div className="relative min-h-screen flex items-center py-20 overflow-hidden bg-background">
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--spotlight-color) 0%, transparent 25%)`,
        }}
      />

      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(to_right,var(--grid-color)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative grid lg:grid-cols-2 gap-8 items-center z-20 px-4 md:px-6">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer backdrop-blur-sm border border-primary/10"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm font-medium">Available for Work</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-primary">Koushik Panda</span>
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
              A passionate full-stack developer with 1+ years of experience in
              building modern App and web applications
            </p>

            {/* Experience Section */}
            <div className="space-y-3 mt-4 w-full max-w-[600px] mx-auto md:mx-0">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg bg-primary/5 border border-primary/10 overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-semibold text-primary text-base sm:text-lg truncate">
                    {exp.company}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {exp.role} | {exp.period}
                  </p>
                  <p className="text-xs sm:text-sm mt-1 line-clamp-2">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 sm:gap-4 flex-col md:flex-row">
            <div className="flex gap-2 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full group text-sm sm:text-base"
              >
                <Link href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-sm sm:text-base"
                asChild
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-sm sm:text-base flex items-center gap-2"
                onClick={() => {
                  fetch(resumeFile)
                    .then((response) => response.blob())
                    .then((blob) => {
                      const url = window.URL.createObjectURL(blob);
                      const link = document.createElement("a");
                      link.href = url;
                      link.download = "Koushik_Panda_Resume.pdf";
                      document.body.appendChild(link);
                      link.click();
                      link.remove();
                      // Cleanup
                      window.URL.revokeObjectURL(url);
                    })
                    .catch((err) =>
                      console.error("Error downloading file:", err)
                    );
                }}
              >
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { href: "https://github.com/KoushikPanda1729", icon: Github },
              {
                href: "https://www.linkedin.com/in/koushik-panda-10b734291/",
                icon: Linkedin,
              },
              { href: "mailto:pandakoushik123@gmail.com", icon: Mail },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-primary hover:bg-primary/10"
                asChild
              >
                <Link href={social.href} target="_blank">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.href}</span>
                </Link>
              </Button>
            ))}
          </div>

          <motion.div
            className="flex flex-wrap gap-2 sm:gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors backdrop-blur-sm border border-primary/10"
              >
                <tech.icon />
                <span className="text-xs sm:text-sm font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mx-auto ">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl " />

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
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={demoImage}
                alt="Modern workspace with laptop showing code"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
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
