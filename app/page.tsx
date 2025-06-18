import Image from "next/image";

export default function Home() {
  const photos = [
    "/Ato 01 - Construindo memórias 01.JPG",
    "/Ato 01 - Construindo memórias 02.JPG",
    "/Ato 01 - Construindo memórias 03.JPG",
    "/Ato 01 - Construindo memórias 04.JPG",
    "/Ato 02 - O luto 01.JPG",
    "/Ato 02 - O luto 02.JPG",
    "/Ato 02 - O luto 03.JPG",
    "/Ato 02 - O luto 04.JPG",
    "/Ato 02 - O luto 01.JPG",
    "/Ato 03 - A força da memória 01.JPG",
    "/Ato 03 - A força da memória 02.JPG",
    "/Ato 03 - A força da memória 03.JPG",
    "/Ato 03 - A força da memória 04.JPG",
    "/Extra 01.JPG",
    "/Extra 02.JPG",
    "/Extra 03.JPG",
    "/Extra 04.JPG",
    "/Extra 05.JPG",
    "/Extra 06.JPG",
    "/Extra 07.JPG",
    "/Extra 08.JPG",
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <header className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-2">Fuxicos que Vestem Memórias</h1>
        <p className="text-sm sm:text-base max-w-xl mx-auto text-neutral-600">
          Uma curadoria visual inspirada nos editoriais de moda contemporâneos.
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((src, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-md">
            <Image
              src={src}
              alt={`Editorial ${index + 1}`}
              width={500}
              height={700}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </main>

      <footer className="mt-20 text-center text-sm text-neutral-500">
        © 2025 Editorial Moda — Fuxicos que Vestem Memórias
      </footer>
    </div>
  );
}
