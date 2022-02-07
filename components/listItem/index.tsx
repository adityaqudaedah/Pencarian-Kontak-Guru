import { UnorderedList } from "@chakra-ui/react";
import React from "react";
import Item from "../item";

const ListItems = () => {
  return (
    <UnorderedList
      px={["1.5rem","1rem","0.5rem",null]}
      mt={5}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      <Item />
    </UnorderedList>
  );
};

export default ListItems;
