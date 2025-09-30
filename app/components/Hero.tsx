import Image from 'next/image';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Optimize Cloud Spend with Confidence
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Zyorix provides world-class FinOps expertise to help you understand, control, and optimize your cloud infrastructure costs, driving efficiency and enabling you to scale with confidence.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" aria-label="Book a Free Audit">
                Book a Free Audit
              </Button>
              <Button variant="outline" size="lg" aria-label="See Case Studies">
                See Case Studies
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/img/hero/placeholder.svg"
              alt="Hero illustration showing cloud optimization concepts"
              width={550}
              height={550}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}