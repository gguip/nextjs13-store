import { Inter } from "next/font/google";
import Link from "next/link";

import Header from "./Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fruit Shop",
  description: "Here you find all fruits",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={"min-h-screen flex flex-col relative " + inter.className}
      >
        <Header />

        <div className="flex-1">{children}</div>
        <footer className="flex items-center flex-wrap justify-center border-t border-solid border-blue-900 p-10 md:p-8">
          <Link href={"https://www.instagram.com"} target="_blank">
            <i className="fa-brands fa-instagram text-slate-700 hover:text-slate-500 hover:scale-110 cursor-pointer text-2xl sm:text-3xl md:text-4xl" />
          </Link>
        </footer>
        <div id="portal"></div>
      </body>
    </html>
  );
}
