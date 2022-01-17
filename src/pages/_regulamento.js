import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Regulamento Cultura Natural | Promoção FOME DE SORTE</title>
        <meta property="og:title" content="Regulamento | Cultura Natural" />
        <meta name="description" content="Promoção FOME DE SORTE" />
        <meta property="og:description" content="Promoção FOME DE SORTE" />
        <meta property="og:image" content="logo.png" key="ogimage" />
      </Head>
      <Header />
      <Hero />
    </>
  );
}
