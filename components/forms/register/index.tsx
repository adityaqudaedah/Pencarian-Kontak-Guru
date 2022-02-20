import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const RegisterForm = () => {
  return (
    <>
      <FormControl>
        <FormLabel>FirstName</FormLabel>
        <Input
          type="text"
          // ref={initialRef.current}
          placeholder="your first name..."
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>LastName</FormLabel>
        <Input
          type="text"
          // ref={initialRef.current}
          placeholder="your last name..."
        />
      </FormControl>

      <FormControl mt={4} >
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

export default RegisterForm