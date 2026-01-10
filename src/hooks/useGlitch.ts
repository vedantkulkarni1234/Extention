'use client';

import { useState, useEffect } from 'react';

export function useGlitch(probability = 0.1) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < probability) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100 + Math.random() * 200);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [probability]);

  return isGlitching;
}
