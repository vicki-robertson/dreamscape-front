import { Jaldi } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import Header from "./components/Header/Header";
import NavbarMobile from "./components/Header/NavbarMobile";

export const jaldi = Jaldi({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "DreamScape",
  description: "Happy Travel, el app de planificación de viajes hecho por DreamScape",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <body className={jaldi.className}>{children}</body>
      <NavbarMobile/>
    </html>
  );
}
