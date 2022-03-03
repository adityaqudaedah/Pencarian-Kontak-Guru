import { Button, Heading, ListItem, Image, Tooltip, Spinner } from "@chakra-ui/react";
import React from "react";
import { useAppCollection } from "../../hooks/useAppCollection";
import Card from "../card";

const Item = () => {

 
  const usersCollection = useAppCollection();
  // console.log(usersCollection!==null?usersCollection[0].nama:'hello');
  // console.log(usersCollection)


  
  return (
    <>
      {usersCollection!==null?usersCollection?.map((curr, i) => (
        <ListItem key={i}listStyleType="none">
          <Card>
            <Image
              boxSize="150px"
              objectFit="cover"
              src={curr?.url}
              alt="Dan Abramov"
            />
            <Heading size="md" mt={2}>
            {curr?.nama}
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
      )):<><Spinner /></>}
    </>
  );
};

export default Item;
