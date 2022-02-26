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

import { useAppSelector } from "../../hooks/useAppSelector";

interface ModalsInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Modals: NextPage<ModalsInterface> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef();
  const currState = useAppSelector(
    (state) => state.navButton.isLoginButtonClicked
  );
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
          <ModalHeader>
            {currState ? "Sign In" : "Create Your Account"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {currState && (
              <>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    // ref={initialRef.current}
                    placeholder="mamat@email.org"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Password" />
                </FormControl>
              </>
            )}
            {!currState && (
              <>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    // ref={initialRef.current}
                    placeholder="your first name..."
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    // ref={initialRef.current}
                    placeholder="your last name..."
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="text"
                    // ref={initialRef.current}
                    placeholder="0812345..."
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Subject</FormLabel>
                  <Input
                    type="text"
                    // ref={initialRef.current}
                    placeholder="Math,Physics..."
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Lecturer Id</FormLabel>
                  <Input
                    type="text"
                    // ref={initialRef.current}
                    placeholder="NPSN..."
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    // ref={initialRef.current}
                    placeholder="mamat@email.org"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Password" />
                </FormControl>
                
                <FormControl mt={4}>
                  <FormLabel>Profile Image</FormLabel>
                  <Input type="file"/>
                </FormControl>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              {currState ? "login" : "submit"}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modals;
