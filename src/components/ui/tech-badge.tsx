import { type LucideIcon } from "lucide-react";

interface TechBadgeProps {
  icon: LucideIcon;
  name: string;
}

export function TechBadge({ icon: Icon, name }: TechBadgeProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
