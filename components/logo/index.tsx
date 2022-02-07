import React from "react";
import { Img } from "@chakra-ui/react";
import Doodle from "../../assets/GroovySittingDoodle.svg";

const Logo = () => {
  return (
    <>
          <Img my={4} boxSize="50%" src={Doodle.src}  />
    </>
  );
};

export default Logo;
