
import EditorialSection from "../components/EditorialSection";
import Header from "../components/Header";


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-[family-name:var(--font-geist-sans)]">
      <Header />

      <div className="px-4 sm:px-10 pt-6 space-y-12">
        <main className="space-y-16">
          <EditorialSection
            images={[
              "/Ato 01 - Construindo memórias 01.JPG",
              "/Ato 01 - Construindo memórias 02.JPG",
              "/Ato 01 - Construindo memórias 03.JPG",
            ]}
            description="O encontro entre gerações é silencioso, mas repleto de emoção. O fuxico traz à tona a ternura, a conexão e o calor das experiências vividas juntas. É um momento de troca de olhares que reafirma o amor eterno entre elas."
          />

          <EditorialSection
            images={[
              "/Ato 02 - O luto 03.JPG",
              "/Ato 02 - O luto 02.JPG",
              "/Ato 02 - O luto 04.JPG",
            ]}
            description="No silêncio do luto, a dor é transformada em criação. Memórias vivas e bordadas revelam uma herança de afeto, conhecimento e arte. O luto não é apenas ausência é a presença que mudou de forma."
          />

          <EditorialSection
            images={[
              "/Extra 05.JPG",
              "/Extra 04.JPG",
              "/Ato 03 - A força da memória 03.JPG",
            ]}
            description="Vestimos muitas memórias ao longo da vida e o vestido de noiva representa sonho para diversas mulheres, é um símbolo marcante do ciclo que está por vir. Ao iniciar uma nova história, podemos carregar conosco o amor e o carinho dos nossos antepassados. É um dia em que a alegria, a saudade e a gratidão se entrelaçam todos costurados no mesmo vestido e no ser."
          />
        </main>

        <section className="max-w-xl mx-auto text-center mt-20 px-4">
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
    </div>
  );
}