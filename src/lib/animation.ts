"use client";

import { useEffect, useState, useRef, RefObject } from "react";

// Custom hook to detect if an element is in viewport
export function useInView(options = {}): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
}

// Custom hook to handle parallax scrolling
export function useParallax(
  speed: number = 0.1
): [RefObject<HTMLDivElement>, { transform: string }] {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const { top } = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (top < windowHeight && top > -ref.current.offsetHeight) {
        const newOffset = (top - windowHeight) * speed;
        setOffset(newOffset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return [ref, { transform: `translateY(${offset}px)` }];
}

// Simple fade-in animation classes
export const fadeInAnimationVariants = {
  initial: "opacity-0 translate-y-10",
  animate: "opacity-100 translate-y-0",
  transition: "transition duration-1000 ease-in-out",
  stagger: (index: number) => ({
    transitionDelay: `${index * 150}ms`,
  }),
};

// Global smooth scroll function
const smoothScrollTo = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // 1 second
  let start: number | null = null;

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};

// Global smooth scroll hook
export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const targetId = href.substring(1);
          smoothScrollTo(targetId);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return { smoothScroll: smoothScrollTo };
};
