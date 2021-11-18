import { Heading, Text, Center, CircularProgress } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <Center flexDir="column">
      <Head>
        <title>Cultura Natural | Cardápio</title>
        <meta property="og:title" content="Cultura Natural | Cardápio" />
        <meta name="description" content="Cultura Natural | Cardápio" />
        <meta property="og:description" content="Cultura Natural | Cardápio" />
        <meta property="og:image" content="logo.png" key="ogimage" />
        <meta httpEquiv="refresh" content="1; URL='https://cardapio.culturanaturalbr.com.br'"/>
      </Head>
      <Header />
      <CircularProgress isIndeterminate color="green.300" />
      <Heading pt={4}>Redirecionando para o cardápio...</Heading>
      <Text as="a" href="https://cardapio.culturanaturalbr.com.br">Caso nao seja redirecionado, clique aqui</Text>
    </Center>
  );
}
