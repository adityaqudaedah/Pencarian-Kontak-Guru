import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Layout from "../components/layout";
// import { Box } from "@chakra-ui/react";
import Container from "../components/container";
import InputSearch from "../components/inputSearch";
import ListItems from "../components/listItem";
import Logo from "../components/logo";
import Me from "../components/me";
import { useAppSelector } from "../hooks/useAppSelector";
import { getAuth } from "firebase/auth";

const Home: NextPage = () => {
  const userAuthState = useAppSelector((state) => state.userAuth.value);
  const [user, setUser] = useState<boolean>(false);
  const [isUserExist, setIsUserExist] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      console.log("user not exist");
      setIsUserExist(false);
    } else {
      console.log("user exist");
      setIsUserExist(true);
    }
  }, [user]);

  useEffect(() => {
    const { currentUser: user } = getAuth();

    if (user !== null) {
      localStorage.setItem("user", user.uid);
      setUser(true);
    } else {
      setUser(false);
    }
  }, [userAuthState]);

  return (
    <>
      {isUserExist && (
        <Container>
          <Me />
        </Container>
      )}
      {!isUserExist && (
        <Layout>
          <Container>
            <Logo />
            <InputSearch />
            <ListItems />
          </Container>
        </Layout>
      )}
    </>
  );
};

export default Home;
