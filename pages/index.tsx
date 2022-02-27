import type { NextPage } from "next";
import Layout from "../components/layout";
// import { Box } from "@chakra-ui/react";
import Container from "../components/container";
import InputSearch from "../components/inputSearch";
import ListItems from "../components/listItem";
import Logo from "../components/logo";
import Me from "../components/me";
import { useAppSelector } from "../hooks/useAppSelector";

const Home: NextPage = () => {
  const userAuthState = useAppSelector((state) => state.userAuth.value);
  console.log(userAuthState);
  return (
    <Layout>
      <Container>
        {userAuthState?.uid.length!==0 && <Me />}
        {userAuthState?.uid.length===0&&<><Logo /><InputSearch /><ListItems /></>}
      </Container>
        
    </Layout>
  );
};

export default Home;
