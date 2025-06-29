import { Section } from "../shared/Section";
import { PhotoCarousel } from "./PhotoCarousel";

export function PhotoGallery() {
  return (
    <Section title="Retratos de Nuestro Amor">
      <p className="text-center text-[#2D3436] italic mb-8">
        Un minuto, un segundo, un instante que queda en la eternidad
      </p>
      <PhotoCarousel />
    </Section>
  );
}
