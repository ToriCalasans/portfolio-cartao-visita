"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import {
  Linkedin,
  Github,
  Mail,
  Code,
  Sparkles,
  BrainCircuit,
} from "lucide-react";

export default function Page() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <LoadingScreen />;
  }
  function LoadingScreen() {
    return (
      <div className="loading-screen">
        <img src="/tori_run.png" alt="Carregando" />
        <div className="loading-bar">
          <div className="loading-progress" />
        </div>
        <p>Carregando universo...</p>
      </div>
    );
  }
  return (
    <main className="container">
      <div className="card">
        <ThemeToggle />
        <div className="avatar">
          <Image
            src="/avatar.png"
            alt="Tori Calasans"
            width={120}
            height={120}
          />
        </div>

        <h1 className="name">Tori Calasans</h1>
        <h2 className="role">Desenvolvedora Front-End</h2>

        <div className="tags">
          <div className="tag">
            <Code size={18} />
            <span>Criadora de código</span>
          </div>

          <div className="tag">
            <Sparkles size={18} />
            <span>Neurodivergente</span>
          </div>

          <div className="tag">
            <BrainCircuit size={18} />
            <span>Mente criativa</span>
          </div>
        </div>

        <ul className="highlights">
          <li>Buscando sempre melhorar experiências</li>
          <li>Transformando ideias em realidade</li>
          <li>A criatividade é inteligência se divertindo.</li>
        </ul>

        <div className="contact">
          <a
            href="https://www.linkedin.com/in/tori-calasans"
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={25} />
          </a>
          <a
            href="https://github.com/ToriCalasans"
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={25} />
          </a>
          <a
            href="calasanstori@gmail.com"
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={25} />
          </a>
        </div>
      </div>
    </main>
  );
}
