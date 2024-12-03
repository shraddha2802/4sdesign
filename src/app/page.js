"use client";

import React, { useEffect } from "react";
import Header from "./components/Header";
import Services from "./home/Service";
import About from "./home/About";
import "./globals.css";
import Client from "./home/Client";
import Career from "./home/Career";
import Contact from "./home/Contact";
import Project from "./home/Project";
import Banner from "./home/Banner";

export default function Home() {
  useEffect(() => {
    document.title = "4S DESIGN Consultancy Services";
  }, []);

  return (
    <div>
      <Header />
      <Banner/>
      <About />
      <Services />
      <Client />
      <Project/>
      <Career />
      <Contact />
    </div>
  );
}
