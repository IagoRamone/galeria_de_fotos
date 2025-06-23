"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-neutral-200 bg-black z-50 relative">
      <div className="flex items-center justify-between px-4 sm:px-10 py-4 sm:py-6">
        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex flex-col justify-center items-center space-y-1 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>

        {/* Logo */}
        <div className="flex-1 text-center sm:text-left">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={120}
              className="h-20 w-auto mx-auto sm:mx-0 cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-8 text-white text-sm">
          <Link href="/makingof" className="hover:underline">
            Making Of
          </Link>
        </nav>
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
                <Link href="/makingof" onClick={() => setIsOpen(false)}>
                  Making Of
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
