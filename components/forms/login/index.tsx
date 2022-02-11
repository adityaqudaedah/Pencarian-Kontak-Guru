import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const LoginForm = () => {
  return (
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
  );
};

export default LoginForm;
