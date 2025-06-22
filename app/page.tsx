"use client";
import Header from "./components/Header";
import Image from "next/image";


export default function Home() {
  const allImages = [
    "/Ato 01 - Construindo memórias 02.JPG",
    "/Ato 01 - Construindo memórias 01.JPG",
    "/Ato 01 - Construindo memórias 03.JPG",
    "/Extra 03.JPG",
    "/Ato 01 - Construindo memórias 04.JPG",
    "/Extra 02.JPG", 
     "/Extra 01.JPG", 
    "/Ato 02 - O luto 01.JPG",
    "/Ato 02 - O luto 03.JPG", 
    "/Ato 02 - O luto 02.JPG",
    "/Ato 02 - O luto 04.JPG", 
    "/Ato 03 - A força da memória 01.JPG", 
    "/Extra 06.JPG", 
    "/Extra 08.JPG", 
    "/Ato 03 - A força da memória 02.JPG",
    "/Extra 07.JPG",
    "/Extra 04.JPG", 
    "/Ato 03 - A força da memória 03.JPG",
    "/Extra 05.JPG", 
    "/Ato 03 - A força da memória 04.JPG",
  ];

  return (
    <div className="min-h-screen bg-white text-black font-[family-name:var(--font-geist-sans)]">
      <Header />

      <section className="max-w-2xl mx-auto px-4 pt-10 pb-6 text-center">
        <p className="text-base text-black leading-relaxed">
          Neste editorial, Julia e Maria representam muitas mulheres brasileiras, que valorizam a moda através do afeto, da memória e do “feito a mão”.
        </p>
      </section>

      <main
  id="galeria"
  className="px-4 pt-6 pb-20"
>
  {/* Mobile: rolagem horizontal */}
  <div className="flex gap-4 overflow-x-auto sm:hidden pb-4">
    {allImages.map((src, index) => (
      <div key={index} className="flex-shrink-0 w-64">
        <Image
          src={src}
          alt={`Imagem ${index + 1}`}
          width={640}
          height={480}
          className="w-full h-auto rounded"
        />
      </div>
    ))}
  </div>

  {/* Desktop: grid */}
  <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {allImages.map((src, index) => (
      <div key={index}>
        <Image
          src={src}
          alt={`Imagem ${index + 1}`}
          width={1200}
          height={900}
          className="w-full h-auto rounded"
        />
      </div>
    ))}
  </div>
</main>


      <section className="max-w-xl mx-auto px-4 text-center mt-10">
        <blockquote className="italic text-neutral-600 text-sm">
          “O que a memória ama, fica eterno”<br />— Adélia Prado
        </blockquote>
      </section>

      <footer className="mt-20 text-center text-sm text-neutral-500">
        © 2025 Editorial Moda — Fuxicos que Vestem Memórias
      </footer>
    </div>
  );
}
