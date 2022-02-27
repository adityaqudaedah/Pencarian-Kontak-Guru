import React, { useState, useEffect } from "react";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
import useAuthStateApp from "../../hooks/useAppAuth";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { login } from "../../redux/features/user/userAuthSlice";

interface ModalsInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Modals: NextPage<ModalsInterface> = ({ isOpen, onClose }) => {
  // const initialRef = React.useRef();

  const currState = useAppSelector(
    (state) => state.navButton.isLoginButtonClicked
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userIsLogin, setUserIsLogin] = useState(false);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useAppDispatch();

  useEffect(() => {
    let identifier:ReturnType<typeof setTimeout>
    if (user) {
      console.log('validating form');
       identifier = setTimeout(
         () => { setFormIsValid(email.includes("@") && password.length > 6);setUserIsLogin(true)} ,
         500
      );
      
    }
    
    return () => {
      console.log('clean up');
      clearTimeout(identifier);
    };
  }, [email, password,user]);

  useEffect(() => {
    const userAuth = async(auth:Auth,userEmail:string,userPassword:string) => {
      setLoading(true)
      const { user } = await signInWithEmailAndPassword(auth, userEmail, userPassword) 
      if (user) {
        dispatch(login(user.uid))
        alert('login successfully')
        setLoading(false)
      } else {
        alert('invalid username or password')
      }
      
    }
    if (formIsValid) {
      const auth = getAuth();
      userAuth(auth,email,password)
      // signInWithEmailAndPassword(auth, email, password)
      //   .then((res) => dispatch(login(res.user.uid)))
      //   .then(()=>setLoading(true))
      //   .then((_) => alert("login succesfully"))
      //   .then(()=>setLoading(false))
      //   .catch(e=>alert(e.mesasge));
      
    }
  }, [userIsLogin]);

  

  return (
    <>
      <Modal
        // initialFocusRef={initialRef.current}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {/* {if choose user login or sign in} */}
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
                    onChange={(e) => setEmail(e.target.value.trim())}
                    placeholder="mamat@email.org"
                    required
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value.trim())}
                  />
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
                  <Input type="file" />
                </FormControl>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={loading?true:false}
              loadingText='Loading...'
              colorScheme='blue'
              mr={3}
              onClick={() => setUser(true)}
            >
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

