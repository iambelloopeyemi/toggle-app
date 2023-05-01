import { useState } from "react";
import "./App.css";
import { toggleContext } from "./Context/ToggleContext";
import Container from "./components/Container";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <toggleContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Container />
    </toggleContext.Provider>
  );
}
