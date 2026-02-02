import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import Image from "next/image";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  category: string;
  href: string;
  onSave?: () => void;
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, imageUrl, title, category, href, onSave, ...props }, ref) => {
    const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (onSave) {
        onSave();
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "group relative block overflow-hidden rounded-[2rem] border border-stone-100 bg-white text-stone-800 transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-stone-200/50 hover:-translate-y-1",
          className
        )}
        {...props}
      >
        <a href={href} aria-label={title} className="block">
          <div className="aspect-[4/5] overflow-hidden relative">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="p-6 space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">{category}</p>
            <h3 className="font-serif text-xl leading-tight text-stone-800 group-hover:text-rose-burnt transition-colors">{title}</h3>
          </div>
        </a>

        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 right-4 h-10 w-10 rounded-full opacity-0 backdrop-blur-md bg-white/80 border-none transition-all duration-500 group-hover:opacity-100 hover:bg-white hover:scale-110"
          onClick={handleSaveClick}
          aria-label="Save"
        >
          <Bookmark className="h-4 w-4 text-stone-600" />
        </Button>
      </div>
    );
  }
);

ProductCard.displayName = "ProductCard";

export { ProductCard };
