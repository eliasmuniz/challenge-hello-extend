"use client";

import { Nunito } from "@next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import FavoriteImage from "../components/FavoriteImage";
import { FavoriteProvider, useFavorites } from "../state/favorite";

const nunito = Nunito({
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

function RootLayout({children}: Props) {
  const [favorites] = useFavorites();

  return (
      <html lang="en" className={nunito.className}>
        <head>
          <title>Hello</title>
          <meta content="Challenge to practice" name="description" />
        </head>
        <body className="max-w-screen-md m-auto p-4">
          <main>
            <Link href="/">
              <h1 className="text-5xl font-bold mt-12">Dog Breeds</h1>
            </Link>
            <nav className="mt-8">
              <ul className="flex gap-6">
                <li>
                  <Link href="/briard">Briard</Link>
                </li>
                <li>
                  <Link href="/chihuahua">Chihuahua</Link>
                </li>
                <li>
                  <Link href="/chow">Chow</Link>
                </li>
              </ul>
            </nav>
            <article>{children}</article>
            <hr className="my-12" />
            <article>
              <h1 className="font-bold text-3xl mb-8">Favorites</h1>
              {favorites?.length === 0 ? (
                "You dont have favorites"
              ) : (
                <section className="grid grid-cols-3 mt-24 gap-6">
                  {favorites.map((image) => (
                    <FavoriteImage key={image} src={image} />
                  ))}
                </section>
              )}
            </article>
          </main>
        </body>
      </html>
  );
}

export default function RootLayoutContainer(props: Props){
  return(
    <FavoriteProvider >
      <RootLayout {...props} />
    </FavoriteProvider>
  )
}