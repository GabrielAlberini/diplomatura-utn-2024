import { useUser } from "./context/UserContext.jsx";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const { userData, updateUser, showName } = useUser();
  const [name, setName] = useState("pepe");
  console.log(name);

  useEffect(() => {
    setName("Juan");
  }, []);

  return (
    <>
      <div>{userData.name}</div>
    </>
  );
}

export default App;
