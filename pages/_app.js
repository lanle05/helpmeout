import "styles/globals.css";
import { Work_Sans, Sora } from "next/font/google";

const work = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const sora = Sora({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sora",
});

export const Metadata = {
  title: "Help Me Out",
  description: "Your web Assistant",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <html lang="en" className={` ${work.variable} ${sora.variable}`}>
      <body className={work.className}>
        {/* <Component {...pageProps} /> */}
      </body>
    </html>
  );
}
