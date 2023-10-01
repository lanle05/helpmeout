import "styles/globals.css";
import { useEffect } from "react";
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

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Run any global initialization or side effects here
  }, []);

  return (
    <>
      <html lang="en" className={` ${work.variable} ${sora.variable}`}>
        <body className={work.className}>
          <Component {...pageProps} />
        </body>
      </html>
    </>
  );
}

export default MyApp;
