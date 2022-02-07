import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { NextPage } from "next";
// import { useDisclosure } from "@chakra-ui/react";

interface ModalsInterface{
  isOpen: boolean,
  onOpen: () => void,
  onClose:() => void
}

const Modals:NextPage<ModalsInterface> = ({isOpen,onClose}) => {
  const initialRef = React.useRef();
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal initialFocusRef={initialRef.current} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef.current} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modals;
