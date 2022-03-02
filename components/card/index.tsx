import { Flex } from "@chakra-ui/react";
import React from "react";
import { NextPage } from "next";

interface CardProps <T>{
  children: T;
}

const Card: NextPage<CardProps<{}>> = ({ children }) => {
  return (
    <Flex
      p={4}
      boxShadow="md"
      flexDirection="column"
      borderRadius="lg"
      fontSize="sm"
      w = {["110%","100%"]}
    >
      {children}
    </Flex>
  );
};

export default Card;
