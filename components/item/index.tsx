import { Button, Heading, ListItem, Image, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppCollection } from "../../hooks/useAppCollection";
import Card from "../card";

const Item = () => {

 
  const usersCollection = useAppCollection();

  
  return (
    <>
      {usersCollection?.map((curr, i) => (
        <ListItem key={i}listStyleType="none">
          <Card>
            <Image
              boxSize="150px"
              objectFit="cover"
              src={curr?.url}
              alt="Dan Abramov"
            />
            <Heading size="md" mt={2}>
            {curr.nama}
            </Heading>
            <p>
              Subject : <span>{curr?.sub}</span>
            </p>
            <p>
              Phone : <span>{curr?.number }</span>
            </p>
            <Tooltip hasArrow label={curr?.number}>
              <Button colorScheme="teal" variant="solid">
                Copy
              </Button>
            </Tooltip>
          </Card>
        </ListItem>
      ))}
    </>
  );
};

export default Item;
