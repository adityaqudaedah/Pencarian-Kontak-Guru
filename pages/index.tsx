import type { NextPage } from "next";
import Layout from "../components/layout";
// import { Box } from "@chakra-ui/react";
import Container from "../components/container";
import InputSearch from "../components/inputSearch";
import ListItems from "../components/listItem";
import Logo from "../components/logo";
import Me from "../components/me";

const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Me />
        <Logo />
        <InputSearch />
        <ListItems />
      </Container>
    </Layout>
  );
};

export default Home;
