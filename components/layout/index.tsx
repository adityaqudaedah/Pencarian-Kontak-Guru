import { NextPage } from "next";
import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Modals from "../modals";
import { useDisclosure } from "@chakra-ui/react";


interface LayoutProps {
  children: Object;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const openModalHanlder = () => {
    onOpen()
  }

  return (
    <>
      <Navbar buttonClick = {openModalHanlder}  />
      <Modals isOpen = {isOpen} onOpen={openModalHanlder} onClose={onClose} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
