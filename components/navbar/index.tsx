import React from "react";
import { Flex, Spacer, Box, Text, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector";
import { loginClicked } from "../../redux/features/nav/navButtonSlice";

interface NavProps {
  buttonClick: () => void;
}

const Navbar: NextPage<NavProps> = ({ buttonClick }) => {

  const currState = useAppSelector(state=>state.navButton.isLoginButtonClicked)
  const dispatch = useAppDispatch()

  
  return (
    <Flex alignItems={"center"}>
      <Box py={1} px={3} mt={4} ml={5} borderRadius="lg" bg="teal.50">
        <Text
          bgGradient="linear-gradient( 109.6deg,  rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% )"
          bgClip="text"
          fontSize={["md", "lg", "xl", "3xl"]}
          fontWeight="extrabold"
        >
          SMA NEGERI 73
        </Text>
      </Box>
      <Spacer />

      <Box mr={4}>
        <Button
          onClick={() => {
            buttonClick();
            dispatch(loginClicked(false))
          }}
          colorScheme="teal"
          variant="ghost"
        >
          Register
        </Button>
        <Button
          onClick={() => {
            buttonClick();
            dispatch(loginClicked(!currState))
          }}
          colorScheme="teal"
          variant="ghost"
        >
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
