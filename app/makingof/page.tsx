"use client";
import Header from "../components/Header";

export default function MakingOf() {
  return (
    <div className="min-h-screen bg-white text-black font-[family-name:var(--font-geist-sans)]">
      <Header />

      <div className="px-4 sm:px-10 pt-10 space-y-12">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Making of</h1>
          <p className="text-base text-neutral-700 mb-6">
            Por trás das câmeras, cada ponto, cada clique e cada riso se entrelaçam. Este making of mostra a cumplicidade e os bastidores da construção do nosso editorial “Fuxicos que Vestem Memórias”.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4">
          <video 
            controls 
            className="w-full rounded-lg shadow-lg"
            src="/makingof.mp4" 
          >
            Seu navegador não suporta a exibição de vídeos.
          </video>
        </section>

        <footer className="mt-20 text-center text-sm text-neutral-500">
          © 2025 Editorial Moda — Fuxicos que Vestem Memórias
        </footer>
      </div>
    </div>
  );
}
