import { useContext } from "react";
import { ThemeContext } from "../App";

const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handClick() {
    if(theme === 'light')
      setTheme('dark');
    else
      setTheme('light');
  }

  return (
    <div>
      <button onClick={handClick} id="apple">Change Theme</button>
    </div>
  );
};

export default ChildC;
