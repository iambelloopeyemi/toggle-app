import { useContext } from "react";
import { toggleContext } from "../Context/ToggleContext";
import Content from "./Content";
import LightSwitch from "./LightSwitch";

export default function Container() {
  const { darkMode } = useContext(toggleContext);
  return (
    <div
      className={
        darkMode ? `Container Container-dark` : `Container Container-light`
      }
    >
      <Content />
      <LightSwitch />
    </div>
  );
}
