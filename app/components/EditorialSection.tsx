import Image from "next/image";

interface EditorialSectionProps {
  images: string[];
  description: string;
}

export default function EditorialSection({ images, description }: EditorialSectionProps) {
  return (
    <section className="max-w-3xl mx-auto mb-16 px-4">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Imagem ${index + 1}`}
          className="w-full mb-4"
        />
      ))}
      <p className="text-base text-neutral-800 whitespace-pre-line">{description}</p>
    </section>
  );
}
