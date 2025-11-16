import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: number;
}

const CategoryCard = ({ icon: Icon, title, count }: CategoryCardProps) => {
  return (
    <a
      href="#"
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-hover hover:border-primary"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary group-hover:bg-primary transition-colors">
          <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <div>
          <h3 className="font-semibold text-card-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{count.toLocaleString('id-ID')} jasa</p>
        </div>
      </div>
    </a>
  );
};

export default CategoryCard;
