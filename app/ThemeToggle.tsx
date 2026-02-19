"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);
  return (
    <button onClick={() => setDark(!dark)} className="theme-toggle">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
