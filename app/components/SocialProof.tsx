import Image from 'next/image';

const brands = [
  { src: '/img/brands/placeholder-1.svg', alt: 'Placeholder Brand 1' },
  { src: '/img/brands/placeholder-2.svg', alt: 'Placeholder Brand 2' },
  { src: '/img/brands/placeholder-3.svg', alt: 'Placeholder Brand 3' },
  { src: '/img/brands/placeholder-4.svg', alt: 'Placeholder Brand 4' },
  // Add two more for a 3x2 grid on desktop
  { src: '/img/brands/placeholder-2.svg', alt: 'Placeholder Brand 5' },
  { src: '/img/brands/placeholder-1.svg', alt: 'Placeholder Brand 6' },
];

export default function SocialProof() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Trusted by forward-thinking teams
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center justify-items-center gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={140}
                height={40}
                className="aspect-[3.5/1] object-contain grayscale transition-all hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}