import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GigCardProps {
  id: number;
  title: string;
  seller: {
    name: string;
    level: string;
    avatar: string;
  };
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  tags?: string[];
}

const GigCard = ({ title, seller, price, rating, reviewCount, image, tags }: GigCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-hover">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 bg-background/80 backdrop-blur hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Seller Info */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-8 w-8 rounded-full bg-muted overflow-hidden">
            <img src={seller.avatar} alt={seller.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-card-foreground truncate">{seller.name}</p>
            <p className="text-xs text-muted-foreground">{seller.level}</p>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex gap-1 mb-3 flex-wrap">
            {tags.slice(0, 2).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Rating & Price */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="font-semibold text-sm">{rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground mb-0.5">Mulai dari</p>
            <p className="font-bold text-primary">
              Rp {price.toLocaleString('id-ID')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
