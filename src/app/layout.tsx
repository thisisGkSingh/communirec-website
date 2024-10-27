import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Communirec",
  description:
    "Communirec is a comprehensive recreation management software designed to streamline the organization, registration, and payment processes for community programs, memberships, and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Communirec - Recreation Management Software</title>
        <meta
          name="description"
          content="Communirec is a comprehensive recreation management software designed to streamline the organization, registration, and payment processes for community programs, memberships, and events."
        />
        <meta
          name="keywords"
          content="Recration Management, Membership Management, Events Management, Community Management"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.communirec.com" />
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
