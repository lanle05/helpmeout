import '@/styles/globals.css'
import { Work_Sans, Sora } from "next/font/google";

const Work = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const SoraFont = Sora({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sora",
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
