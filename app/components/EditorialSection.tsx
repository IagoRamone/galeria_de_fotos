interface EditorialSectionProps {
  images: string[];
  title: string;
  description: string;
}

export default function EditorialSection({ images, title, description }: EditorialSectionProps) {
  return (
    <section className="max-w-3xl mx-auto mb-16 px-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Imagem ${index + 1}`}
          className="w-full mb-4"
        />
      ))}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-base text-neutral-800 whitespace-pre-line">{description}</p>
    </section>
  );
}
