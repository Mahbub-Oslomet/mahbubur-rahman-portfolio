import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Mahbubur Rahman | IT Infrastructure & AI",
  description:
    "Professional portfolio of Md Mahbubur Rahman — Network & IT Infrastructure Engineer with experience in networking, systems administration, IT operations, cybersecurity and Applied AI.",
  keywords: [
    "Md Mahbubur Rahman",
    "Network Engineer",
    "IT Infrastructure",
    "IT Operations",
    "Cybersecurity",
    "Applied AI",
    "BGP",
    "OSPF",
    "Microsoft 365",
    "Azure"
  ],
  authors: [{ name: "Md Mahbubur Rahman" }]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
