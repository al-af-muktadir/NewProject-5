import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";

import Providers from "@/lib/Providers/Providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const Noto = Noto_Serif({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Introducing You Next Developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${Noto.className}  mx-auto text-white min-h-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}
      >
        <Providers>
          <div className="absolute top-0 z-[-2] h-screen w-full text-white"></div>
          <NavBar session={session} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
