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
import LoginForm from "../forms/login";
import RegisterForm from "../forms/register";
import { useAppSelector } from "../../hooks/useAppSelector";


interface ModalsInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Modals: NextPage<ModalsInterface> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef();
  const currState = useAppSelector(state=>state.navButton.isLoginButtonClicked)
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal
        // initialFocusRef={initialRef.current}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {currState&&<LoginForm />}
            {!currState&&<RegisterForm />}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modals;
