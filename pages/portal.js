import Head from "next/head";
import { Inter } from "@next/font/google";
import Login from "@/modules/login";
import AddReleaseForm from "@/modules/addReleaseForm";

const inter = Inter({ subsets: ["latin"] });

export default function Portal() {
  return (
    <>
      <Head>
        <title>Portal - HQ Links</title>
        <meta
          name="description"
          content="HQ Links your favorite artist to you- in one place."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <a href="/">logout</a>
        <AddReleaseForm />
      </main>
    </>
  );
}
