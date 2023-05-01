import { useContext } from "react";
import { toggleContext } from "../Context/ToggleContext";

export default function LightSwitch() {
  const { darkMode, toggleDarkMode } = useContext(toggleContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div className="Lightswitch">
      <img
        src={darkMode ? `../lightswitch-off.png` : `../lightswitch-on.png`}
        alt="Lightswitch on"
        onClick={handleClick}
      />
    </div>
  );
}
