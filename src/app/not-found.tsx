import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-[#1A1815] text-[#F5F1EA]">
      <h1 className="text-9xl font-heading font-black text-accent/20 tracking-tighter mb-4">404</h1>
      <h2 className="text-3xl font-heading font-bold text-[#F5F1EA] mb-6">Page Not Found</h2>
      <p className="text-xl text-[#A8A093] max-w-md mx-auto mb-10 leading-relaxed">
        It looks like you've drifted off the main road. The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="group flex items-center gap-2 px-8 py-4 bg-accent text-[#1A1815] rounded-full font-bold transition-all hover:brightness-110 shadow-xl">
        Return Home
        <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
