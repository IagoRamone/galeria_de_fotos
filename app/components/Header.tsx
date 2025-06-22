"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 sm:py-6 border-b border-neutral-200 bg-black z-50 relative">
      <div className="relative h-10 flex items-center justify-center">
        
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-6">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-28 w-auto cursor-pointer"
            />
          </Link>
        </div>

        <button
          className="absolute left-0 flex flex-col justify-center items-center space-y-1 sm:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40 flex flex-col p-6 sm:hidden"
          >
            <button
              className="self-end text-black text-xl mb-8"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu"
            >
              ✕
            </button>

            <ul className="space-y-6 text-black text-2xl font-medium">
              <li>
                <Link href="/ato" onClick={() => setIsOpen(false)}>
                  Ato
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="hidden sm:flex justify-center mt-4 space-x-8 text-white text-sm">
        <Link href="/ato">Ato</Link>
      </nav>
    </header>
  );
}
