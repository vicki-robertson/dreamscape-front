import { Jaldi } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import NavbarMobile from "./components/Header/NavbarMobile";

export const jaldi = Jaldi({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Happy Travel",
  description: "Happy Travel, el app de planificación de viajes hecho por DreamScape",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={jaldi.className}>{children}</main>
        <NavbarMobile/>
      </body>
    </html>
  );
}
