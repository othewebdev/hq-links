import { albumInfo as artist } from "@/data/artists/odee-loh/albums/cant-let-you-down";
import Release from "@/modules/Release";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          {artist.name} - {artist.release.name}
        </title>
        <meta
          name="description"
          content="HQ Links your favorite artist to you- in one place."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Release artist={artist} />
      </main>
    </>
  );
}
