"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  User,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: { target: { id: string; value: string } }) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage("");

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedbackMessage("Message sent successfully!");
        setSuccess(true);
        setError(false);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setFeedbackMessage(errorData.message || "Failed to send message.");
        setError(true);
        setSuccess(false);
      }
    } catch (e) {
      setError(true);
      setSuccess(false);

      setFeedbackMessage("An error occurred. Please try again later." + e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-primary mt-4 mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Have a project in mind? Let&apos;s work together to create something
            amazing.
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription className="text-base">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <Link
                    href="mailto:pandakoushik123@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    pandakoushik123@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>Kolkata, India</span>
                </div>
                <div className="flex gap-4 mt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:text-primary hover:border-primary"
                    asChild
                  >
                    <Link
                      href="https://github.com/KoushikPanda1729"
                      target="_blank"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:text-primary hover:border-primary"
                    asChild
                  >
                    <Link
                      href="https://www.linkedin.com/in/koushik-panda-10b734291/"
                      target="_blank"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
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
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and I&apos;ll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <User className="h-4 w-4" />
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="rounded-[4px]"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="rounded-[4px]"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[150px] rounded-[4px] resize-none"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col items-center ">
                    <Button
                      className="rounded-[4px] w-full group"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    {success && (
                      <p className="text-center  text-sm mt-2 bg-green-500/10 px-[5px] py-[2px]  rounded-[4px] text-green-600">
                        {feedbackMessage}
                      </p>
                    )}
                    {error && (
                      <p className="text-center  text-sm mt-2 bg-red-500/10 px-[5px] py-[2px]  rounded-[4px] text-red-600">
                        {feedbackMessage}
                      </p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
