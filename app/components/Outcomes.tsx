"use client";

import { motion, Variants } from 'framer-motion';
import { BarChart, PiggyBank, Zap } from 'lucide-react';

const outcomes = [
  {
    icon: <PiggyBank className="w-10 h-10 text-primary" />,
    headline: 'Reduce Wasteful Spend',
    description: 'We identify unused resources, over-provisioned services, and inefficient configurations, cutting your cloud bill by up to 40%.',
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    headline: 'Increase Engineering Velocity',
    description: 'By automating cost controls and providing clear visibility, your teams can focus on building products, not managing infrastructure.',
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    headline: 'Achieve Predictable Forecasting',
    description: 'Gain a clear, accurate understanding of your cloud spend with granular showback, chargeback, and predictable forecasting models.',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function Outcomes() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Proven Outcomes
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Our data-driven approach delivers tangible results that impact your bottom line and accelerate innovation.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.headline}
              className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="mb-4">{outcome.icon}</div>
              <h3 className="text-xl font-bold mb-2">{outcome.headline}</h3>
              <p className="text-sm text-muted-foreground text-center">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}