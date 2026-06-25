# Modern Portfolio Website

A fully-featured, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Supabase. Features include dark mode, smooth animations, and a complete admin panel for dynamic content management.

## Features

### Design & Theme
- Clean, modern, and professional design
- Fully responsive layout for all screen sizes
- Dark/Light mode toggle with localStorage persistence
- Smooth transitions and animations throughout
- Beautiful gradient accents and hover effects

### Portfolio Sections

#### 1. Hero / Home
- Eye-catching introduction with professional title
- Call-to-action buttons for navigation
- Social media links
- Animated scroll indicator

#### 2. About / CV
- Professional experience timeline
- Education history
- Certifications display
- Downloadable CV button

#### 3. Skills
- Visual skill display with progress bars
- Category filtering (All, Frontend, Backend, Tools)
- Icon integration with lucide-react
- Dynamic loading from database

#### 4. Projects
- Expandable project cards with detailed views
- Featured project highlighting
- Technology tags for each project
- GitHub and live demo links
- Project filtering (All / Featured)
- High-quality project images

#### 5. Contact
- Functional contact form with database integration
- Contact information display
- Social media links
- Form validation and success/error messaging

#### 6. Admin Panel
- Access via `#admin` hash route
- Full CRUD operations for skills
- Full CRUD operations for projects
- Easy-to-use forms for adding/editing content

### Technical Features

- **Database**: Supabase PostgreSQL with Row Level Security
- **State Management**: React hooks and context API
- **Routing**: Hash-based routing for admin panel
- **Icons**: Lucide React icon library
- **Styling**: Tailwind CSS with custom animations
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized builds with Vite

## Getting Started

```bash
npm install
npm run dev
```

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- Lucide React
