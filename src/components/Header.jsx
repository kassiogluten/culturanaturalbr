import {
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";

import React from "react";

export function Header() {
  return (
    <Flex
      justify="center"
      align="center"
      w="100%"
      as="header"
    >
      <Flex
        p="1rem"
        w="full"
        align="center"
        justify="center"
        maxW={1200}
      >
        <Image src="/logo.png" alt="Logo" />
      </Flex>
    </Flex>
  );
}
