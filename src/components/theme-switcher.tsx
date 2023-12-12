import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Switcher() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const body = document.body;
    darkMode ? body.classList.add("dark") : body.classList.remove("dark");
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <button
        className="flex items-center gap-2 py-1 px-2 hover:rounded-lg"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <Sun size={18} strokeWidth={2} />
        ) : (
          <Moon size={18} strokeWidth={2} />
        )}
      </button>
    </>
  );
}
