import React, { useEffect, useState } from "react";
import {
  VStack,
  Image,
  StackDivider,
  Text,
  Heading,
  Spacer,
  Flex,
  Button,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useAppSelector } from "../../hooks/useAppSelector";
import db, { firebase } from "../../config"
import { collection, getDoc,doc, DocumentSnapshot, DocumentData} from "firebase/firestore";

const Me: NextPage = () => {
  const cred = useAppSelector((state) => state.userAuth.value);
  const [user, setuser] = useState<any> (null)
  
  const getDocById = async() => {
    const snap = await getDoc(doc(db, 'users', cred.uid))
    setuser(snap.data())
  }
  

  useEffect(() => {
    console.log('get document')
    getDocById()
    return () => {
      console.log('clean up at me components')
    }
  }, [cred])
  
  return (
    <VStack
      borderWidth="1px"
      borderRadius="md"
      padding={5}
      width="md"
      boxShadow="lg"
    >
      <Heading as="h1">Hello, {user?.nama.split(' ').slice(0,-1).join(' ')}</Heading>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <VStack divider={<StackDivider borderColor="gray.200" />} width="xs">
        <Flex width="100%">
          <Text fontSize="md">Full Name </Text>
          <Spacer />
          <Text fontSize="md">{user?.nama}</Text>
        </Flex>
        <Flex width="100%">
          <Text fontSize="md">Lecturer Id </Text>
          <Spacer />
          <Text fontSize="md">{user?.idPeg}</Text>
        </Flex>
        <Flex width="100%">
          <Text fontSize="md">Phone </Text>
          <Spacer />
          <Text fontSize="md">{user?.number}</Text>
        </Flex>
        <Flex width="100%">
          <Text fontSize="md">Subject </Text>
          <Spacer />
          <Text fontSize="md">{user?.sub}</Text>
        </Flex>
      </VStack>

      <Button colorScheme="linkedin" width="80%">
        update
      </Button>
      <Button colorScheme="red" width="80%">
        logout
      </Button>
    </VStack>
  );
};

export default Me;
