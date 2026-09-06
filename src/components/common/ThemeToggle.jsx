import { useTheme } from "../../context/ThemeContext";
import Icon from "./Icon";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      role="switch"
      aria-checked={theme === "light"}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={theme === "dark" ? "Light Mode" : "Dark Mode"}
    >
      <span className="track-icon"><Icon name="moon" size={13} /></span>
      <span className="track-icon"><Icon name="sun" size={13} /></span>
      <span className="knob">
        <Icon name={theme === "dark" ? "moon" : "sun"} size={12} strokeWidth={2} />
      </span>
    </button>
  );
}
