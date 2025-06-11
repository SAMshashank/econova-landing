import { FeaturesSection } from '@/types/contentful';

interface FeaturesProps {
  content: FeaturesSection;
}

export default function Features({ content }: FeaturesProps) {
  return (
    <section className="features-section py-20">
      <div className="container">
        <h2 className="text-6xl font-bold text-center mb-12">{content.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
