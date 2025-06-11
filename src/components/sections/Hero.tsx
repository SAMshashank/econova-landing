import { HeroSection as HeroSectionType } from '@/types/contentful';

interface HeroProps {
  content: HeroSectionType;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="hero-section">
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${content.backgroundImage.url})`
        }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="font-bold">{content.headline}</h1>
        <p>{content.subheadline}</p>
        <a href={content.ctaButton.link} className="button button-primary">
          {content.ctaButton.text}
        </a>
      </div>
    </section>
  );
} 