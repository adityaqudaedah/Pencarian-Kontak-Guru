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
  Spinner,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useAppSelector } from "../../hooks/useAppSelector";
import db from "../../config";
import { getDoc, doc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { login } from "../../redux/features/user/userAuthSlice";

const Me: NextPage = () => {
  const cred = useAppSelector((state) => state.userAuth.value);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setuser] = useState<any>(null);
  const dispatch = useAppDispatch();
  const uid = localStorage.getItem("user");
  const getDocById = async () => {
    try {
      setLoading(true);
      const snap = await getDoc(doc(db, "users", uid !== null ? uid : "else"));
      setLoading(false);
      setuser(snap.data());
    } catch (e) {
      console.log(e.message);
    }
  };

  const userLogoutHandler = async () => {
    localStorage.clear()
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("sign-out successfully");
        // dispatch(login(""));
      })
      .then((_) => dispatch(login("")))
      .catch((e) => alert(`error happened ${e}`));
  };

  useEffect(() => {
    console.log("get document");
    getDocById();
    return () => {
      console.log("clean up at me components");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cred]);

  return (
    <VStack
      borderWidth="1px"
      borderRadius="md"
      padding={5}
      width="md"
      boxShadow="lg"
    >
      {loading && (
        <Spinner
          label="loading..."
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="cyan.300"
          size="xl"
        />
      )}
      {!loading && (
        <>
          <Heading as="h1">
            Hello, {user?.nama.split(" ").slice(0, -1).join(" ")}
          </Heading>
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
          <Button colorScheme="red" width="80%" onClick={userLogoutHandler}>
            logout
          </Button>
        </>
      )}
    </VStack>
  );
};

export default Me;
