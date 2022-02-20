import { useState } from "react";

export const useNavButtonState = (status:boolean) => {
    const [navButtonLogin, setNavButtonLogin] = useState(status);
    
    
  return navButtonLogin;
};
