import AddReleaseForm from "@/modules/addReleaseForm";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";

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
        <Link href="/">logout</Link>
        <AddReleaseForm />
      </main>
    </>
  );
}
