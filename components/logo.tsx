import Image from "next/image";

import icon from "@/public/brand/vollui-icon.png";
import wordmark from "@/public/brand/vollui-wordmark-plain.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src={icon} alt="" className="h-7 w-auto" preload />
      <Image src={wordmark} alt="Vollui" className="h-6 w-auto" preload />
    </span>
  );
}
