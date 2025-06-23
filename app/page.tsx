"use client";
import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  const gallery = [
    {
      title: "Ato 1 – Lar",
      images: [
        "/Ato 01 - Construindo memórias 02.JPG",
        "/Ato 01 - Construindo memórias 01.JPG",
        "/Ato 01 - Construindo memórias 03.JPG",
        "/Extra 03.JPG",
        "/Ato 01 - Construindo memórias 04.JPG",
        "/Extra 02.JPG",
      ],
    },
    {
      title: "Ato 2 – A Perda",
      images: [
        "/Extra 01.JPG",
        "/Ato 02 - O luto 01.JPG",
        "/Ato 02 - O luto 03.JPG",
        "/Ato 02 - O luto 02.JPG",
        "/Ato 02 - O luto 04.JPG",
      ],
    },
    {
      title: "Ato 3 – Memória",
      images: [
        "/Ato 03 - A força da memória 04.JPG",
        "/Ato 03 - A força da memória 01.JPG",
        "/Extra 06.JPG",
        "/Extra 08.JPG",
        "/Ato 03 - A força da memória 02.JPG",
      ],
    },
    {
      title: "Ato 4 – Casamento",
      images: [  
        "/Extra 04.JPG",
        "/Ato 03 - A força da memória 03.JPG",
        "/Extra 05.JPG",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-[family-name:var(--font-geist-sans)]">
      <Header />

      <section className="max-w-6xl mx-auto px-4 pt-10 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
  {/* H1 à esquerda */}
  <div className="sm:w-1/3">
    <h1 className="text-2xl font-bold">Editorial Memórias que se vestem</h1>
  </div>

  {/* Carta Carta */}
      <div className="sm:w-2/3 space-y-4">
        <h2 className="text-xl font-semibold">
          Carta Editorial: O que vestimos não é só moda, é memória em forma de afeto.
        </h2>
        <p>
          Nosso editorial nasce do desejo de questionar e desconstruir os estereótipos de gênero impostos pela sociedade...
        </p>
        <p>
          Inspirados por marcas como Another Place e Dendezeiro...
        </p>
        <p>
          Nosso público é composto por pessoas que veem a moda como ferramenta de expressão...
        </p>
        <p>
          Produzimos o ensaio em estúdio para garantir liberdade criativa e controle...
        </p>
      </div>
    </section>


      <section className="max-w-6xl mx-auto px-4 pt-4 pb-10 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start text-sm text-neutral-600">
        <div className="sm:w-2/3 space-y-2">
          <p><strong>Direção de moda:</strong> Milleni Lewer e Mônica Ribeiro</p>
          <p><strong>Styling:</strong> Mônica Ribeiro, Catarina Malek, Ester Carvalho, Geovanna Henriques, Bárbara Barbosa e Milleni Lewer</p>
          <p><strong>Assistente de Styling:</strong> Isabella Lima</p>
          <p><strong>Produção executiva:</strong> Ester Carvalho</p>
          <p><strong>Fotografia:</strong> Sergio Danilo</p>
          <p><strong>Modelos:</strong> Julia Valentim e Maria do Amparo</p>
          <p><strong>Maquiagem:</strong> Geovanna Henriques</p>
          <p><strong>Site:</strong> Iago Ramone</p>
        </div>
      </section>

      <main id="galeria" className="px-4 pb-20">
        {gallery.map((section, index) => (
          <div key={index} className="mb-12">
            <h1 className="text-2xl font-bold my-6">{section.title}</h1>
            <div className="flex flex-wrap gap-4">
              {section.images.map((src, i) => (
                <div key={i} className="w-full sm:w-[48%] lg:w-[31%]">
                  <Image
                  src={src}
                  alt={`Imagem ${i + 1}`}
                  width={1200}
                  height={1600} 
                  className="w-full h-auto rounded aspect-[3/4] object-cover"
                  />

                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      <section className="max-w-xl mx-auto px-4 text-center mt-10">
        <blockquote className="italic text-neutral-600 text-sm">
        &ldquo;O que a memória ama, fica eterno&rdquo;<br />— Adélia Prado
        </blockquote>
      </section>

      <footer className="mt-20 text-center text-sm text-neutral-500">
        © 2025 Editorial Moda — Fuxicos que Vestem Memórias
      </footer>
    </div>
  );
}
