import { collection, getFirestore } from "firebase/firestore";
import type { NextPage } from "next";
import App from "../config";
import { useCollection } from "react-firebase-hooks/firestore";
import Layout from "../components/layout";
// import { Box } from "@chakra-ui/react";
import Container from "../components/container";
import InputSearch from "../components/inputSearch";
import ListItems from "../components/listItem";
import Logo from "../components/logo";


const Home: NextPage = () => {

  
  const [value, loading, error] = useCollection(
    collection(getFirestore(App), "users")
  );

  return (
    <Layout>
      
      <Container>
        <Logo />
        <InputSearch />
        <ListItems />
      </Container>
    </Layout>
  );
};

export default Home;
