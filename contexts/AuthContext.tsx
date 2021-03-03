import React, { createContext } from "react";

import { AuthProps } from "../interfaces/index"
interface AuthContextType {
  auth: AuthProps | null;
  setAuth: React.Dispatch<React.SetStateAction<AuthProps>>;
}
const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: (auth: AuthProps | null) => auth,
});

export default AuthContext;
