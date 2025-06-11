# EcoNova Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Contentful CMS. Features include multi-language support, content preview, and dynamic content management.

![EcoNova Landing Page](public/images/screenshots/landing-page.png)

## Features

- 🌐 Multi-language Support (English & Spanish)
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully Responsive Design
- 🔄 Content Preview Mode
- 📝 Dynamic Content Management
- 🚀 Next.js 14 App Router
- 💻 TypeScript Support
- 🎯 SEO Optimized

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Contentful account
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/econova-landing.git
cd econova-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:
```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
CONTENTFUL_PREVIEW_TOKEN=your_preview_token
CONTENTFUL_PREVIEW_SECRET=your_preview_secret
```

## Running the Project

1. Development mode:
```bash
npm run dev
# or
yarn dev
```

2. Build for production:
```bash
npm run build
# or
yarn build
```

3. Start production server:
```bash
npm run start
# or
yarn start
```

## Project Structure

```
econova-landing/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   └── [lang]/
│   │       └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── ProductShowcase.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Footer.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── lib/
│   │   ├── contentful.ts
│   │   └── content.ts
│   └── types/
│       └── contentful.ts
└── package.json
```

## Content Management

### Contentful Setup

1. Create a new space in Contentful
2. Create the following content types:
   - Landing Page
   - Hero Section
   - Features Section
   - Testimonials Section
   - Product Showcase
   - CTA Section
   - Footer Section

### Preview Mode

To enable preview mode:
```bash
curl -X GET "http://localhost:3000/api/preview?secret=your_preview_secret&slug=your-page"
```

To disable preview mode:
```bash
curl -X GET "http://localhost:3000/api/exit-preview"
```

## Language Support

The project supports multiple languages:
- English (default): `/en`
- Spanish: `/es`

To add a new language:
1. Add the language to `SUPPORTED_LANGUAGES` in `src/app/[lang]/page.tsx`
2. Add the language to the `languages` array in `src/components/LanguageSwitcher.tsx`
3. Create corresponding content in Contentful

## Screenshots

![Hero Section](public/images/screenshots/hero.png)
![Features Section](public/images/screenshots/features.png)
![Product Showcase](public/images/screenshots/product.png)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Contentful](https://www.contentful.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
