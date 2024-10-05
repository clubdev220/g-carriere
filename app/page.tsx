import Aboutus from "@/components/Aboutus";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Aboutus />
      <Services />
      <ContactUs />
    </>
  );
}
