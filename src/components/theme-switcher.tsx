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
        className="flex gap-2 px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-700 hover:rounded-lg"
        onClick={toggleDarkMode}
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        <div className="text-sm font-semibold ">Dark Mode</div>
      </button>
    </>
  );
}
