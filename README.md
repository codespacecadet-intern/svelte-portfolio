# Interactive Developer Portfolio with SvelteKit

## Overview

This project is my submission for the HNG Internship Stage 5b frontend task. The goal of the task was to build an interactive developer portfolio with **Svelte** or **SvelteKit** that feels immersive, animated, polished, memorable, and production-ready, not just a static “about me” page.

I built this portfolio with **SvelteKit** because I wanted proper routing, clean structure, reusable components, and a strong foundation for a real product-style experience.

## What the Task Required

The portfolio needed to:

- present my projects and skills
- demonstrate advanced frontend interactions
- showcase smooth animations and transitions
- maintain excellent performance
- feel unique and intentional

It also had to satisfy the 9 major Stage 5b requirements below.

## How I Met the 9 Core Requirements

### 1. Built with Svelte or SvelteKit

I used **SvelteKit** and structured the app with reusable components, reactive state, and file-based routing.

- homepage route: [src/routes/+page.svelte](</C:/Users/USER/svelte-portfolio/src/routes/+page.svelte:1>)
- dynamic project routes: [src/routes/projects/[slug]/+page.svelte](</C:/Users/USER/svelte-portfolio/src/routes/projects/[slug]/+page.svelte:1>)
- central content model: [src/lib/data/portfolio.ts](</C:/Users/USER/svelte-portfolio/src/lib/data/portfolio.ts:1>)

### 2. Hero Section

I built a bold landing section with:

- my name and title
- short introduction
- social/contact links
- resume download CTA
- strong visual identity
- animated ambient hero visuals

Main implementation:

- [src/lib/components/Hero.svelte](</C:/Users/USER/svelte-portfolio/src/lib/components/Hero.svelte:1>)

### 3. Projects Showcase

I built a dynamic project system that includes:

- project title
- description
- technologies used
- preview visuals
- live demo links
- GitHub links
- category filtering
- individual case-study routes

Main implementation:

- [src/lib/components/ProjectCard.svelte](</C:/Users/USER/svelte-portfolio/src/lib/components/ProjectCard.svelte:1>)
- [src/lib/components/ProjectFilter.svelte](</C:/Users/USER/svelte-portfolio/src/lib/components/ProjectFilter.svelte:1>)
- [src/routes/projects/[slug]/+page.svelte](</C:/Users/USER/svelte-portfolio/src/routes/projects/[slug]/+page.svelte:1>)

### 4. Smooth Animations and Transitions

I used lightweight, performance-friendly motion instead of overloading the app with heavy animation libraries.

I implemented:

- reveal-on-scroll transitions
- staggered section entry
- hover transitions
- ambient floating motion
- reduced-motion support

Main implementation:

- [src/lib/actions/in-view.ts](</C:/Users/USER/svelte-portfolio/src/lib/actions/in-view.ts:1>)
- [src/app.css](</C:/Users/USER/svelte-portfolio/src/app.css:1>)

### 5. Responsive and Adaptive Design

I made the portfolio responsive across desktop, tablet, and mobile using:

- fluid typography
- adaptive grid layouts
- mobile stacking patterns
- touch-friendly controls
- clean responsive navigation

Main implementation:

- [src/app.css](</C:/Users/USER/svelte-portfolio/src/app.css:1>)

### 6. Performance Optimization

I treated performance as part of the build process by:

- keeping dependencies minimal
- using lightweight SVG project visuals
- lazy loading project images
- using efficient CSS transforms and opacity for motion
- structuring routed project pages cleanly

I verified the app with:

```bash
npm run check
npm run build
```

### 7. Accessibility

I built accessibility into the experience through:

- semantic HTML
- keyboard navigation
- visible focus states
- alt text for visuals
- readable contrast
- skip navigation link
- reduced-motion controls

Main implementation:

- [src/app.css](</C:/Users/USER/svelte-portfolio/src/app.css:71>)
- [src/lib/components/CommandPalette.svelte](</C:/Users/USER/svelte-portfolio/src/lib/components/CommandPalette.svelte:1>)
- [src/lib/components/ContactForm.svelte](</C:/Users/USER/svelte-portfolio/src/lib/components/ContactForm.svelte:1>)

### 8. Contact Section

I added a functional contact experience using a validated form with mail integration. I chose this approach so I could keep the frontend secure without exposing secrets.

It includes:

- name, email, and message fields
- validation feedback
- sanitized user input
- direct email flow

Main implementation:

- [src/lib/components/ContactForm.svelte](</C:/Users/USER/svelte-portfolio/src/lib/components/ContactForm.svelte:1>)
- [src/lib/utils/sanitize.ts](</C:/Users/USER/svelte-portfolio/src/lib/utils/sanitize.ts:1>)

### 9. Theme Support

I implemented dark/light theme switching with persistence, alongside reduced-motion preference persistence.

Main implementation:

- [src/lib/stores/preferences.svelte.ts](</C:/Users/USER/svelte-portfolio/src/lib/stores/preferences.svelte.ts:1>)
- [src/lib/components/ThemeToggle.svelte](</C:/Users/USER/svelte-portfolio/src/lib/components/ThemeToggle.svelte:1>)

## Creative Feature

For the advanced creative requirement, I implemented a **developer-tools-style command palette**. It helps users jump between sections, open project pages, switch theme, toggle reduced motion, and start contact actions. I chose this because it makes the portfolio feel engineered, interactive, and memorable.

Main implementation:

- [src/lib/components/CommandPalette.svelte](</C:/Users/USER/svelte-portfolio/src/lib/components/CommandPalette.svelte:1>)

## Technical Decisions

I organized the project for clarity and reuse:

- `src/lib/components` for reusable UI
- `src/lib/data` for portfolio content
- `src/lib/stores` for shared preferences
- `src/lib/actions` for scroll reveal behavior
- `src/routes` for pages and routing

I also added:

- a custom error page for broken routes
- slug-based route validation
- input sanitization for contact

Relevant files:

- [src/routes/+error.svelte](</C:/Users/USER/svelte-portfolio/src/routes/+error.svelte:1>)
- [src/routes/projects/[slug]/+page.ts](</C:/Users/USER/svelte-portfolio/src/routes/projects/[slug]/+page.ts:1>)

## Setup

Install and run locally:

```bash
npm install
npm run dev
```

Validation and production build:

```bash
npm run check
npm run build
npm run preview
```

## Trade-offs

I made a few intentional trade-offs:

- I used mail integration instead of backend email sending to avoid exposing secrets.
- I used SVG placeholder visuals to keep the portfolio fast and easy to personalize.
- I focused on interaction quality, structure, accessibility, and polish instead of adding unnecessary effects.

## Submission Notes

Before final submission, I still need to replace:

- placeholder GitHub and live demo links
- placeholder contact details if needed
- the placeholder resume file if I have my final PDF
- placeholder project visuals if I want real screenshots

I also need to deploy the app to Vercel, Netlify, or a similar platform so I can submit both:

- GitHub repository URL
- live deployed URL

## Final Summary

I built this portfolio to directly answer the Stage 5b brief by combining:

- SvelteKit architecture
- interactive UI design
- smooth motion
- responsive layouts
- accessibility
- theme support
- performance awareness
- a creative developer-tools experience

This project is my attempt to show not just what I build, but how I think about frontend engineering.
