"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavContent } from "@/components/layout/nav-content";
import { useActiveSection } from "@/components/layout/use-active-section";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroInView, setHeroInView] = useState(isHome);

  const showNavbar = !isHome || !heroInView;
  const navElevated = (isHome && showNavbar) || (!isHome && scrolled);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setHeroInView(false);
      return;
    }

    const hero = document.getElementById("hero");
    if (!hero) {
      setHeroInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome, pathname]);

  useEffect(() => {
    if (!showNavbar) {
      setMobileOpen(false);
    }
  }, [showNavbar]);

  return (
    <header
      className={cn(
        "z-50 transition-all duration-300 ease-out motion-reduce:transition-none",
        isHome ? "fixed inset-x-0 top-0" : "sticky top-0",
        showNavbar
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0",
        navElevated
          ? "border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <NavContent
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        onMobileOpenChange={setMobileOpen}
      />
    </header>
  );
}
