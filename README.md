# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, TypeScript, and Tailwind CSS. This project showcases a developer profile with sections for home, about, projects, and contact information.

## Overview

This portfolio is designed to present:

- a strong personal introduction and branding
- technical skills and achievements
- project highlights with live links
- contact information and social links
- a clean, mobile-friendly layout with a modern dark theme

It is structured as a multi-page portfolio using React Router so each section feels like a dedicated page while remaining fast and lightweight.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Font Awesome icons

## Features

- Responsive landing page
- Professional about section
- Project showcase page with project cards
- Contact page entry point
- Clean animated UI with hover interactions
- Easy-to-update project content through a single data file
- Fast development workflow with Vite

## Project Structure

```bash
vite-project/
├── src/
│   ├── assets/
│   ├── component/
│   │   ├── Root_component.tsx
│   │   └── Router_component.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   └── Project.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── info.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── README.md
└── pnpm-lock.yaml
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or newer recommended)
- pnpm

### Installation

1. Clone the repository
2. Open the project folder
3. Install dependencies:

```bash
pnpm install
```

### Run locally

```bash
pnpm dev
```

Then open the local Vite URL shown in the terminal (usually http://localhost:5173).

### Build for production

```bash
pnpm build
```

### Preview a production build

```bash
pnpm preview
```

## Updating Portfolio Content

The main portfolio data is stored in:

- `src/info.tsx`

This file contains the project data such as:

- project title
- description
- image
- live project link

You can quickly update or add new projects by editing that file.

## Main Pages

- Home: introduction and main hero section
- About: developer background, skills, and achievements
- Project: portfolio project showcase
- Contact: contact section for reaching out

## Customization Tips

- Replace the profile image in `src/assets/`
- Update the intro text in `src/pages/Home.tsx`
- Edit the about details in `src/pages/About.tsx`
- Add more projects in `src/info.tsx`
- Adjust colors, spacing, and styling in `src/index.css`

## License

This project is for personal portfolio use and can be adapted for your own website or portfolio branding.

## Author

Hayat Abdurehman
