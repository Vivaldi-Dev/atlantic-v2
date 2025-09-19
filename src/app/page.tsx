'use client'

import Banner from "./components/banner/Banner";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Pacotes from "./components/pacotes/Pacotes";
import Services from "./components/services/Services";
             


export default function Home() {
  return (
    <div className="">
      <Header/>
      <Banner/>
      <Pacotes/>
      <Experience/>
      <Services/>
      <Hero/>
    </div>
  );
}
