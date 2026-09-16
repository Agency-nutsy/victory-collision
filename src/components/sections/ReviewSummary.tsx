import { Star } from "lucide-react";
import AnimatedCounter from "../animations/AnimatedCounter";

interface ReviewSummaryProps {
  rating: number;
  count: number;
  link: string;
}

export default function ReviewSummary({ rating, count, link }: ReviewSummaryProps) {
  if (!rating || !count) return null;

  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-5xl font-black font-heading text-base">{rating.toFixed(1)}</span>
        <div className="flex flex-col gap-1">
          <div className="flex text-accent">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-current' : 'fill-transparent opacity-30'}`} 
              />
            ))}
          </div>
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary hover:text-base transition-colors underline decoration-gray-600 underline-offset-2"
          >
            Based on <AnimatedCounter value={count} duration={1500} /> Google reviews
          </a>
        </div>
      </div>
    </div>
  );
}
