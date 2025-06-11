import { ProductShowcaseSection } from '@/types/contentful';

interface ProductShowcaseProps {
  content: ProductShowcaseSection;
}

export default function ProductShowcase({ content }: ProductShowcaseProps) {
  return (
    <section className="product-showcase">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-6">{content.title}</h2>
        <p className="text-xl text-center mb-12">{content.description}</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Images */}
          <div className="grid grid-cols-2 gap-4">
            {content.images.map((image, index) => (
              <div 
                key={index} 
                className="product-image rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px'
                }}
                title={image.title}
              />
            ))}
          </div>

          {/* Product Specifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Key Specifications</h3>
            <div className="grid gap-4">
              {content.specifications.map((spec, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-2xl">{spec.icon}</span>
                  <div>
                    <h4 className="font-bold text-lg">{spec.title}</h4>
                    <p className="text-gray-600">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {content.ctaButton && (
              <div className="mt-8 text-center">
                <a
                  href={content.ctaButton.link}
                  className="button button-primary inline-block"
                >
                  {content.ctaButton.text}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 