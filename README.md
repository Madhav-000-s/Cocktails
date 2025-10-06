# 🍹 Mojitto Cocktails - Velvet Pour

A modern, interactive cocktail showcase website built with Next.js, featuring stunning animations and a premium cocktail experience. This project showcases various cocktails and mocktails with smooth scroll animations, video backgrounds, and responsive design.

![Mojitto Cocktails](public/gifs/mojitto.gif)

## ✨ Features

- **🎬 Video Background**: Immersive full-screen video background with scroll-triggered playback
- **🎨 GSAP Animations**: Smooth scroll animations, text splitting effects, and parallax scrolling
- **📱 Responsive Design**: Mobile-first design that works perfectly on all devices
- **🍸 Cocktail Showcase**: Interactive sections featuring popular cocktails and mocktails
- **🌿 Visual Elements**: Decorative leaf animations and modern UI components
- **⚡ Performance Optimized**: Built with Next.js 15 and Turbopack for lightning-fast development

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP (GreenSock) with ScrollTrigger and SplitText
- **Fonts**: Custom fonts (Modern Negra, Mona Sans, DM Serif Text)
- **Responsive**: React Responsive for media queries
- **Build Tool**: Turbopack for faster development

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mojitto_cocktails
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── About.tsx            # About section component
│   ├── Art.tsx              # Art showcase component
│   ├── Cocktails.tsx        # Cocktail menu component
│   ├── Hero.tsx             # Hero section with animations
│   └── Navbar.tsx           # Navigation component
└── constants/
    └── index.ts             # Data constants (cocktails, navigation, etc.)
```

## 🎯 Key Components

### Hero Section
- Animated text splitting with gradient effects
- Parallax scrolling leaf decorations
- Video background with scroll-triggered playback
- Responsive design with mobile optimizations

### Cocktails Section
- Interactive cocktail and mocktail listings
- Smooth parallax animations
- Price and origin information display

### Navigation
- Fixed navigation with blur background effect
- Smooth scroll to sections
- Responsive design

## 🎨 Animation Features

- **Text Splitting**: Characters and words animate in with staggered timing
- **Scroll Triggers**: Elements animate based on scroll position
- **Parallax Effects**: Background elements move at different speeds
- **Video Scrubbing**: Video playback synced with scroll position
- **Smooth Transitions**: All animations use GSAP's easing functions

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile devices (max-width: 767px)
- Tablet and desktop devices
- Optimized touch interactions

## 🎵 Media Assets

- **Videos**: Background video in `/public/videos/`
- **Images**: Cocktail images, decorative elements, and UI assets
- **Fonts**: Custom font files in `/public/fonts/`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
This Next.js app can be deployed on any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🎨 Customization

### Adding New Cocktails
Edit `src/constants/index.ts` to add new cocktails to the menu:

```typescript
const cocktailLists = [
  {
    name: "Your Cocktail Name",
    country: "COUNTRY_CODE",
    detail: "Description",
    price: "$XX",
  },
  // ... more cocktails
];
```

### Modifying Animations
Animation configurations are in each component's `useGSAP` hook. Key areas:
- Hero animations: `src/components/Hero.tsx`
- Cocktail section: `src/components/Cocktails.tsx`
- Navigation effects: `src/components/Navbar.tsx`

### Styling
- Global styles: `src/app/globals.css`
- Tailwind configuration: Custom utilities and theme variables
- Component-specific styles: Inline Tailwind classes

---
## 👨‍💻 About the Developer

**Madhavendranath**

Full-Stack Engineer | Building Production-Grade Web Applications

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/madhavendranath-s/)
[![Email](https://img.shields.io/badge/-Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:madhavendranaths@gmail.com)
<!-- [![Portfolio](https://img.shields.io/badge/-Portfolio-000000?style=flat-square&logo=safari&logoColor=white)](https://yourportfolio.com) -->