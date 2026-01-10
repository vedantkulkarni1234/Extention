'use client';

import { useGlitch } from '@/hooks/useGlitch';
import { cn } from '@/lib/utils';

export default function GlitchText({ children, className }: { children: React.ReactNode, className?: string }) {
  const isGlitching = useGlitch(0.05);

  return (
    <span className={cn(
      "relative inline-block transition-all",
      isGlitching && "skew-x-3 translate-x-1 text-cyan-500",
      className
    )}>
      {children}
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 -translate-x-1 -translate-y-1 text-red-500 opacity-70 -z-10 animate-pulse">
            {children}
          </span>
          <span className="absolute top-0 left-0 translate-x-1 translate-y-1 text-blue-500 opacity-70 -z-10 animate-pulse">
            {children}
          </span>
        </>
      )}
    </span>
  );
}
