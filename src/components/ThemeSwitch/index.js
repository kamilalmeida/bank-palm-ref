import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

export default function ThemeSwitche({ toggleTheme }) {
  const { title } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={title === "dark"}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      onColor="#b1459b"
    />
  );
}
