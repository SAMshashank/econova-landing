import { TestimonialsSection } from '@/types/contentful';

interface TestimonialsProps {
  content: TestimonialsSection;
}

export default function Testimonials({ content }: TestimonialsProps) {
  return (
    <section className="testimonials-section py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">{content.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="text-lg text-gray-600 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-bold">{testimonial.authorName}</p>
                <p className="text-gray-500">{testimonial.authorTitle}</p>
                <p className="text-gray-500">{testimonial.authorCompany}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 