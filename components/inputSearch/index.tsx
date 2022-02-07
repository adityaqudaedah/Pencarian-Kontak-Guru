import { Input } from "@chakra-ui/react";
import React from "react";

const InputSearch = () => {
  return (
    <Input
      isInvalid
      focusBorderColor="teal.200"
      errorBorderColor="pink.100"
      borderRadius="md"
      variant="outline"
      placeholder="Cari guru..."
      size="sm"
      maxWidth="50rem"
      w={["100%", "70%"]}
    />
  );
};

export default InputSearch;
