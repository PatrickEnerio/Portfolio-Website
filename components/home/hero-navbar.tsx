"use client";

import { useState } from "react";
import { NavContent } from "@/components/layout/nav-content";
import { useActiveSection } from "@/components/layout/use-active-section";

export function HeroNavbar() {
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <NavContent
      activeSection={activeSection}
      mobileOpen={mobileOpen}
      onMobileOpenChange={setMobileOpen}
    />
  );
}
