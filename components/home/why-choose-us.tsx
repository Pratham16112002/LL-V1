"use client";

import { Heart, Users, Lightbulb, Handshake } from "lucide-react";

const FEATURES = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every person with respect, dignity, and genuine care.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our professionals are trained and dedicated to your well-being.",
  },
  {
    icon: Lightbulb,
    title: "Personalized Plans",
    description: "Each service is tailored to meet your specific needs and goals.",
  },
  {
    icon: Handshake,
    title: "Partnership Approach",
    description: "We work with you to ensure your complete satisfaction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="section-header">Why Choose Live Freely</h2>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {FEATURES.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        group bg-white p-7 rounded-xl border border-transparent
        shadow-sm md:hover:shadow-lg
        md:hover:border-primary/20
        transform md:hover:-translate-y-2 md:hover:scale-110
        transition-all duration-300 ease-out
      "
    >
      {/* Icon Box */}
      <div
        className="
          w-16 h-16 rounded-xl bg-primary/10 
          flex items-center justify-center 
          mx-auto mb-6 group-hover:bg-primary/20 transition
        "
      >
        <Icon className="text-primary" size={28} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>
  );
}