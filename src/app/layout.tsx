import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imagica Labs Inc.",
  description:
    "Imagica Labs offers full-stack development, cloud computing, and mobile development services to help you grow your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Imagica Labs - IT Consultancy Services</title>
        <meta
          name="description"
          content="Imagica Labs offers full-stack development, cloud computing, and mobile development services to help you grow your business."
        />
        <meta
          name="keywords"
          content="Imagica Labs, IT Consultancy, Full-stack Development, Cloud Computing, Mobile Development"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.imagicalabs.com" />
        {/* <link rel="icon" type="image/png" href="/Logo.png" /> */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=fc0bfce6e1310f1539afec9729716721"
        ></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
