"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const LiveDot = () => (
  <div className="flex items-center gap-1.5">
    <div className="relative flex h-3 w-3 items-center justify-center">
      <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></div>
      <div className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></div>
    </div>
    {/* <span className="text-xs text-muted-foreground">Live</span> */}
  </div>
);

export function ProjectsSection() {
  const projects = [
    {
      title: "Expense Tracker - Flutter App",
      description:
        "A sleek and intuitive mobile app for tracking daily expenses, managing budgets, and analyzing spending habits with detailed charts and insights.",
      image:
        "https://images.pexels.com/photos/30139610/pexels-photo-30139610/free-photo-of-real-estate-investment-concept-with-keys-and-money.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com",
      demo: "https://example.com",
      tags: ["Flutter", "Dart", "Node.js", "MongoDB", "Express"],
      stars: 312,
      forks: 76,
    },
    {
      title: "Multi-Tenancy in Food Delivery Platform",
      description:
        "A scalable food delivery platform with multi-tenancy architecture for restaurant owners and customers, featuring real-time order tracking.",
      image:
        "https://images.pexels.com/photos/5713770/pexels-photo-5713770.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://example.com",
      tags: [
        "React",
        "Redux",
        "Node.js",
        "MongoDB",
        "Express",
        "Multi-Tenancy",
      ],
      stars: 184,
      forks: 43,
    },
    {
      title: "Plantopia - Multi-Nursery Plant Platform",
      description:
        "A marketplace connecting multiple plant nurseries to users, offering a wide variety of plants with real-time inventory and location-based shop selection.",
      image:
        "https://images.pexels.com/photos/4505175/pexels-photo-4505175.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com",
      demo: "https://example.com",
      tags: [
        "React",
        "MongoDB",
        "Express",
        "Node.js",
        "E-commerce",
      ],
      stars: 418,
      forks: 102,
    },
    {
      title: "Plantopia - Multi-Nursery Plant Platform (React Native App)",
      description:
        "A mobile app connecting users with multiple plant nurseries, offering a wide variety of plants with real-time inventory and location-based shop selection.",
      image:
        "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com",
      demo: "https://example.com",
      tags: [
        "React Native",
        "MongoDB",
        "Express",
        "Node.js",
        "Mobile App",
        "E-commerce",
      ],
      stars: 512,
      forks: 132,
    },
    {
      title: "Multi-Tenancy in Food Delivery Platform (Flutter App)",
      description:
        "A scalable food delivery mobile app built with Flutter, featuring multi-tenancy for restaurant owners and customers, real-time order tracking, and an intuitive user interface.",
      image:
        "https://images.pexels.com/photos/26925530/pexels-photo-26925530/free-photo-of-dishes-and-beer-on-table-in-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com",
      demo: "https://example.com",
      tags: [
        "Flutter",
        "Dart",
        "Firebase",
        "Node.js",
        "MongoDB",
        "Express",
        "Food Delivery",
        "Multi-Tenancy",
      ],
      stars: 276,
      forks: 61,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-primary mt-4 mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-[800px]">
            Explore some of my latest projects showcasing my technical skills
            and creativity
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-background/0" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-3 rounded-xl bg-purple-500/10 `}>
                      <Folder className="h-5 w-5 text-purple-500" />
                    </div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardDescription className="text-base">
                      {project.description.length > 100
                        ? `${project.description.substring(0, 100)}...`
                        : project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 7).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full group/btn"
                    asChild
                  >
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" className="rounded-full group/btn" asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5" />
                      Live
                    </Link>
                  </Button>
                  <LiveDot />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

