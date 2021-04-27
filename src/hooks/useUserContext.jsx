import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export const useUserContext = () => useContext(UserContext);
