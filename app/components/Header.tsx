"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 sm:py-6 border-b border-neutral-200 bg-black z-50 relative">
    <div className="relative h-10 flex items-center justify-center">
      
    <div className="absolute left-1/2 transform -translate-x-1/2 mt-6">
      <Link href="/" onClick={() => setIsOpen(false)}>
        <Image src="/logo.png" alt="Logo" className="h-28 w-auto cursor-pointer" />
      </Link>
    </div>

      <button
        className="absolute left-0 flex flex-col justify-center items-center space-y-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
      >
        <span className="w-6 h-0.5 bg-white" />
        <span className="w-6 h-0.5 bg-white" />
        <span className="w-6 h-0.5 bg-white" />
      </button>
    </div>


      {isOpen && (
  <div className="absolute top-full left-0 w-full bg-white border-t border-neutral-200 shadow-md py-4 px-6">
    <ul className="flex flex-col space-y-4 text-sm">
      <li>
        <Link href="/ato" onClick={() => setIsOpen(false)}>
          Ato
        </Link>
      </li>
    </ul>
  </div>
)}
    </header>
  );
}
