import { CTASection } from '@/types/contentful';

interface CTAProps {
  content: CTASection;
}

export default function CTA({ content }: CTAProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="text-4xl font-bold mb-6">{content.headline}</h2>
        <p className="text-xl mb-8">{content.description}</p>
        <a
          href={content.button.link}
          className={`button ${content.button.variant === 'primary' ? 'button-primary' : ''}`}
        >
          {content.button.text}
        </a>
      </div>
    </section>
  );
} 