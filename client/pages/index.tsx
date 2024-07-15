import React, { useState, useEffect } from "react";
import { Montserrat, Nunito } from "next/font/google";
import { Header, Banner, Benefits, Container} from "@/components";
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});
const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});
const port = process.env.PORT || 3005;

export default function Home() {
  return ( 
    <main className={`${montserrat.variable} ${nunito.variable}`}>
      <Header />
      <div className="flex flex-col items-center mx-auto my-0 w-[1090px]">
          <Banner/>
          <Benefits/>
          </div>
    </main>
  
);
}
