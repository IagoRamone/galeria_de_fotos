
import EditorialSection from "./components/EditorialSection";


export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <header className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-2">Fuxicos que Vestem Memórias</h1>
        <p className="text-sm sm:text-base max-w-xl mx-auto text-neutral-600">
          Neste editorial, Julia e Maria representam muitas mulheres brasileiras, que valorizam a moda através do afeto, da memória e do “ feito a mão”. 

No final da galeria 

“O que a memória ama, fica eterno” - Adélia Prado
        </p>
      </header>

    <main className="space-y-12 p-6">
  <EditorialSection
    images={[
      "/Ato 01 - Construindo memórias 01.JPG",
      "/Ato 01 - Construindo memórias 02.JPG",
      "/Ato 01 - Construindo memórias 03.JPG",
    ]}
    title="ATO 1 – CONSTRUINDO MEMÓRIAS"
    description="O encontro entre gerações é silencioso, mas repleto de emoção. O fuxico traz à tona a ternura, a conexão e o calor das experiências vividas juntas. É um momento de troca de olhares que reafirma o amor eterno entre elas."
  />

  <EditorialSection
    images={[
      "/Ato 02 - O luto 03.JPG",
      "/Ato 02 - O luto 02.JPG",
      "/Ato 02 - O luto 04.JPG",
    ]}
    title="ATO 2 – O LUTO"
    description="
    No silêncio do luto, a dor é transformada em criação. Memórias vivas e bordadas revelam uma herança de afeto, conhecimento e arte. O luto não é apenas ausência é a presença que mudou de forma."
  />

  <EditorialSection
    images={[
      "/Extra 05.JPG",
      "/Extra 04.JPG",
      "/Ato 03 - A força da memória 03.JPG",
    ]}
    title="ATO 3 – A FORÇA DA MEMÓRIA"
    description="Vestimos muitas memórias ao longo da vida e o vestido de noiva representa sonho para diversas mulheres, é um símbolo marcante do ciclo que está por vir. Ao iniciar uma nova história, podemos carregar conosco o amor e o carinho dos nossos antepassados. É um dia em que a alegria, a saudade e a gratidão se entrelaçam todos costurados no mesmo vestido e no ser."
  />
</main>
<section className="max-w-xl mx-auto mt-16 px-4 text-center">
  <p className="text-base text-black mb-4">
    Nossa vida é um repertório, uma bagagem, uma colcha de tudo o que aprendemos e sentimos dos que vieram antes. A colcha e o fuxico carregam histórias de quem costuraram a vida por nós.
  </p>
  <blockquote className="italic text-neutral-600 text-sm">
    “O passado não reconhece o seu lugar: está sempre presente.”<br />— Mario Quintana
  </blockquote>
</section>


      <footer className="mt-20 text-center text-sm text-neutral-500">
        © 2025 Editorial Moda — Fuxicos que Vestem Memórias
      </footer>
    </div>
  );
}
