# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a dark/light theme, smooth animations, and a clean, professional design.

## Features

- 🎨 Modern and Clean Design
- 🌓 Dark/Light Theme Toggle
- 📱 Fully Responsive
- ✨ Smooth Page Transitions
- 🎭 Framer Motion Animations
- 🎯 SEO Optimized
- 📝 Contact Form
- 🖼️ Project Showcase
- 📚 Experience Timeline
- 🎓 Education & Certifications

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with theme provider
│   │   ├── page.tsx      # Home page component
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   └── styles/          # Component styles
├── public/              # Static assets
└── package.json         # Project dependencies
```

## Customization

1. Update personal information in components:
   - Edit `Hero.tsx` for introduction
   - Modify `About.tsx` for skills and tech stack
   - Update `Projects.tsx` with your projects
   - Adjust `Experience.tsx` with your experience
   - Update `Contact.tsx` with your contact details

2. Replace images:
   - Add your project screenshots in `public/projects/`
   - Update your resume in `public/resume.pdf`

3. Customize theme:
   - Modify colors in `tailwind.config.ts`
   - Adjust animations in components using Framer Motion

## Deployment

The project is ready to be deployed to Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy!

## License

This project is open source and available under the MIT License.