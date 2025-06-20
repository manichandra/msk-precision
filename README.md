# MSK Precision Engineering Group Website

A modern, responsive website for MSK Precision Engineering Group built with Next.js 14, featuring precision manufacturing services, engineering consulting, and technical training programs.

## 🚀 Features

- **Precision Works**: CNC machining, 3D printing, and quality assurance services
- **Engineering Services**: CFD analysis, FEA simulation, and AI-driven optimization
- **Technical Training**: CAD/CAM, CNC programming, and engineering courses
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Performance Optimized**: Static site generation for fast loading

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: GitHub Pages (static export)

## 🏃‍♂️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run export` - Build and export static files
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🚀 Deployment to GitHub Pages

### Manual Deployment

1. Build and export the static site:
```bash
npm run export
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages when you push to the main branch.

To set up automatic deployment:

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy on every push to main

### Configuration

The site is configured for GitHub Pages in `next.config.ts`:

- `output: 'export'` - Enables static export
- `basePath: '/msk-site'` - Sets the base path for GitHub Pages
- `images.unoptimized: true` - Disables image optimization for static export
- `trailingSlash: true` - Adds trailing slashes to URLs

## 🏗 Project Structure

```
msk-site/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── precision-works/   # Precision Works division
│   ├── engineering/       # Engineering Services division
│   └── training/          # Training division
├── components/            # Reusable UI components
│   ├── shared/           # Navbar, Footer, Layout
│   ├── home/             # Homepage components
│   ├── precision-works/  # Precision Works components
│   └── engineering/      # Engineering components
├── lib/                  # Utilities and data
├── public/               # Static assets
└── .github/workflows/    # GitHub Actions
```

## 🎨 Design System

- **Colors**: Professional blue/cyan gradient theme
- **Typography**: Inter font family (400, 700 weights)
- **Components**: shadcn/ui with custom MSK branding
- **Animations**: Subtle Framer Motion transitions
- **Layout**: Responsive grid system with max-width containers

## 📝 Content Strategy

- **Homepage**: Hero, division overview, value propositions
- **Precision Works**: CNC capabilities, 3D printing, quality assurance
- **Engineering**: CFD, FEA, AI optimization services
- **Training**: Technical education programs
- **About**: Company story and leadership
- **Contact**: Contact form and location details

## 🔧 Development

This project uses modern development practices:

- **TypeScript** for type safety
- **ESLint** for code quality
- **Tailwind CSS** for styling
- **Component-based architecture**
- **Static site generation** for performance

## 📄 License

This project is proprietary software for MSK Precision Engineering Group.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
