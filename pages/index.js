import Login from "@/modules/login";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>HQ Links</title>
        <meta
          name="description"
          content="HQ Links your favorite artist to you- in one place."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <p>You shouldnt be here</p>
      </main>
    </>
  );
}
