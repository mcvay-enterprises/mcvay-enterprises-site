# McVay Enterprises Website

Official website for McVay Enterprises and Whitehall CAP, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 14 with App Router
- 📘 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- ♿ Accessible components
- 🔍 SEO optimized with metadata
- 🚀 Optimized performance
- 📊 Analytics integration

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/mcvay-enterprises/mcvay-enterprises-site.git

# Navigate to project directory
cd mcvay-enterprises-site

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

```bash
# Create a production build
npm run build
# or
yarn build

# Start the production server
npm start
# or
yarn start
```

## Project Structure

```
├── src/
│   ├── app/              # Next.js 14 App Router pages
│   │   ├── page.tsx      # Home page
│   │   ├── about/        # About page
│   │   ├── services/     # Services page
│   │   ├── contact/      # Contact page
│   │   ├── blog/         # Blog pages
│   │   └── not-found.tsx # 404 page
│   └── components/       # Reusable components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── CTA.tsx
│       ├── Testimonials.tsx
│       └── Pricing.tsx
├── public/              # Static files
│   ├── robots.txt
│   └── sitemap.xml
└── ...
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_SITE_URL=https://www.mcvayenterprises.com
FORMSPREE_FORM_ID=your_formspree_id
```

## Deployment

This site is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

## License

MIT License - see LICENSE file for details

## Contact

For inquiries, visit [www.mcvayenterprises.com](https://www.mcvayenterprises.com) or contact us through the website.
