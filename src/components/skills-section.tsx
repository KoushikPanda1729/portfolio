"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Server,
  DatabaseIcon,
  Smartphone,
  Settings2,
  Code2,
  Blocks,
  FileCode,
  Braces,
  Cloud,
  Container,
  Cog,
  Coffee,
  Code,
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: LayoutDashboard,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "React", icon: Blocks },
        { name: "Next.js", icon: Blocks },
        { name: "TypeScript", icon: Braces },
        { name: "JavaScript", icon: Braces },
        { name: "Redux", icon: Blocks },
        { name: "Tailwind CSS", icon: FileCode },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      iconColor: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Express", icon: Server },
        { name: "Python", icon: FileCode },
      ],
    },
    {
      title: "Database",
      icon: DatabaseIcon,
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      skills: [
        { name: "PostgreSQL", icon: DatabaseIcon },
        { name: "MongoDB", icon: DatabaseIcon },
        { name: "Redis", icon: DatabaseIcon },
        { name: "MySQL", icon: DatabaseIcon },
      ],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "React Native", icon: Blocks },
        { name: "Flutter", icon: Smartphone },
        { name: "iOS", icon: Smartphone },
        { name: "Android", icon: Smartphone },
      ],
    },
    {
      title: "DevOps",
      icon: Settings2,
      iconColor: "text-red-500",
      bgColor: "bg-red-500/10",
      skills: [
        { name: "Docker", icon: Container },
        { name: "Kubernetes", icon: Cloud },
        { name: "AWS", icon: Cloud },
        { name: "CI/CD", icon: Cog },
      ],
    },
    {
      title: "Languages",
      icon: Code2,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "JavaScript", icon: Braces },
        { name: "TypeScript", icon: Braces },
        { name: "Dart", icon: Braces },
        { name: "Python", icon: FileCode },
        { name: "Java", icon: Coffee },
        { name: "C++", icon: FileCode },
      ],
    },
    {
      title: "Data Structure And Algorithm",
      icon: Code,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "C++", icon: Braces },
        { name: "C", icon: Braces },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <div className="w-12 h-1 bg-primary mt-4 mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-[800px]">
            A comprehensive overview of my technical expertise and tools I work
            with
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 rounded-xl ${category.bgColor} ${category.iconColor}`}
                    >
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="grid grid-cols-2 gap-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <skill.icon className="h-4 w-4 shrink-0" />
                        <span className="text-sm">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
