import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className="w-12 h-1 bg-primary mt-4 mb-6 rounded-full" />
      <p className="text-xl text-muted-foreground max-w-[800px]">{subtitle}</p>
    </motion.div>
  );
}
