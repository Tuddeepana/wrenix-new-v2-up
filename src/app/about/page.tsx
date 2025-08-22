'use client';

import React, { useEffect } from 'react';
import AboutHero from "./_components/AboutHero";
import CountComponent from "./_components/CountComponent";
import VisionMission from "./_components/VisionMission";

export default function AboutPage() {
  useEffect(() => {
    // Any code that accesses document should go here
    // For example: document.getElementById(), document.querySelector(), etc.
  }, []);

  return (
    <div className="min-h-screen">
      <AboutHero />
      <CountComponent />
      <VisionMission />
    </div>
  );
}