import "@/styles/globals.css";
import { Montserrat, Nunito } from "next/font/google";
import type { AppProps } from "next/app";
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
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} ${nunito.variable}`}>
      <Component {...pageProps} />;
    </main>
  );
}
