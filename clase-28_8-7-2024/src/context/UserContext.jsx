/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from "react";

const userContext = createContext();

export const useUser = () => useContext(userContext);

export const UserProvider = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const updateUser = (name, email) => {
    setUserData({ name, email });
  };

  const showName = () => {
    return "Hi " + userData.name;
  };

  return (
    <userContext.Provider value={{ userData, updateUser, showName }}>
      {props.children}
    </userContext.Provider>
  );
};
