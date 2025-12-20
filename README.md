# Portfolio Website

A modern, responsive personal portfolio website built with Next.js 15, React 19, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful transitions
- **Dark Mode**: System-aware dark mode toggle
- **Fully Responsive**: Mobile-first design
- **SEO Optimized**: Meta tags and semantic HTML
- **Sections**:
  - Hero Section with stats and CTAs
  - About Me with highlights
  - Skills with categorized tech stack
  - Projects with filtering
  - Experience & Education timeline
  - Contact form with validation

## 📦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information

Edit `src/data/portfolioData.ts` to update:
- Personal info (name, email, location)
- Social links
- About me content
- Skills and tech stack
- Projects
- Experience and education

### Styling

- Colors: Edit `tailwind.config.ts` to change the primary color palette
- Fonts: Update the font imports in `src/app/globals.css`

### Images

Add your images to the `public/images/` folder:
- `avatar.jpg` - Your profile picture
- `projects/` - Project screenshots

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with SEO
│   └── page.tsx         # Main page
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, Skills, etc.
│   ├── providers/       # Theme provider
│   └── ui/              # Reusable UI components
└── data/
    └── portfolioData.ts # All portfolio content
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built as a portfolio template for IT students seeking internships in Cloud, ERP, and Software Development.
