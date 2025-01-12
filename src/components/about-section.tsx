"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Briefcase,
  Award,
  GraduationCap,
  Trophy,
  BadgeIcon as Certificate,
} from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const achievements = [
    { icon: Trophy, text: "1+ Years Experience" },
    { icon: Award, text: "Software Engineer at Fordel Studio" },
    { icon: Award, text: "Full Stack Developer" },
    { icon: Certificate, text: "IOS Enthusiast" },
  ];

  const certifications = [
    { name: "IOT Edge ML (NPTEL Certified)", icon: Award },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <div className="w-12 h-1 bg-primary mt-4 mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-[800px]">
            Passionate about creating beautiful and functional web experiences
          </p>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="relative overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Background</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  I&apos;m a full-stack developer with 1 year of experience
                  building apps and web applications. I specialize in React,
                  React Native, Flutter, Node.js, and modern web technologies.
                  My passion lies in creating intuitive user interfaces and
                  scalable backend solutions.
                </p>

                <div className="flex flex-wrap gap-3">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="flex items-center gap-1 px-3 py-1"
                      >
                        <Icon className="h-4 w-4" />
                        {achievement.text}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="relative overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Master&apos;s in Computer Applications (MCA)
                      </h4>
                      <p className="text-muted-foreground">
                        North Bengal University, 2023-2025
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Bachelor&apos;s in Computer Applications (BCA)
                      </h4>
                      <p className="text-muted-foreground">
                        Panskura Banamali College, 2020-2023
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      Professional Certifications
                    </h4>
                    <div className="space-y-3">
                      {certifications.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                          <div key={index} className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-primary/10 text-primary">
                              <Icon className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">
                              {cert.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
