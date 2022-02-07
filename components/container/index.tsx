import { Flex } from "@chakra-ui/layout";
import { NextPage } from "next";
import React from "react";

interface ContainerPorps {
  children: Object;
}

const Container: NextPage<ContainerPorps> = ({ children }) => {
  return (
    <Flex
      p={[1, 3, 4]}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minWidth="50vw"
      maxWidth="80vw"
      mx="auto"
      my={4}
    >
      {children}
    </Flex>
  );
};
export default Container;
