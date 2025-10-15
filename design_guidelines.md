# Design Guidelines: Srinithya Manoharan Portfolio

## Design Approach
**Reference-Based Approach** drawing inspiration from Linear's minimalist sophistication and Stripe's professional polish, adapted for a developer portfolio with creative asymmetric layouts.

## Core Design Principles
- **Technical Professionalism**: Clean, precise design reflecting engineering mindset
- **Visual Confidence**: Bold typography and strategic color usage
- **Content Hierarchy**: Clear information architecture guiding visitors through credentials
- **Subtle Dynamism**: Micro-interactions that enhance without distracting

## Color Palette

### Dark Mode (Primary)
- **Background Base**: 220 20% 8%
- **Background Elevated**: 220 18% 12%
- **Primary Brand**: 260 70% 65% (Modern purple with sophistication)
- **Accent**: 175 65% 55% (Teal for technical trust)
- **Text Primary**: 220 10% 95%
- **Text Secondary**: 220 10% 65%
- **Border Subtle**: 220 15% 20%

### Light Mode
- **Background**: 220 15% 98%
- **Primary Brand**: 260 65% 50%
- **Accent**: 175 60% 45%
- **Text Primary**: 220 20% 15%
- **Text Secondary**: 220 15% 40%

## Typography

### Font Families
- **Display/Headers**: Inter (700-800 weight) via Google Fonts
- **Body**: Inter (400-500 weight)
- **Code/Technical**: JetBrains Mono (400 weight)

### Scale
- **Hero Name**: text-6xl to text-7xl (bold)
- **Section Headers**: text-4xl to text-5xl
- **Subsection Headers**: text-2xl to text-3xl
- **Body**: text-base to text-lg
- **Captions**: text-sm

## Layout System

### Spacing Primitives
Primary units: **2, 4, 6, 8, 12, 16, 20, 24, 32**
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component gaps: gap-6 to gap-8
- Card padding: p-6 to p-8

### Container Strategy
- **Max Width**: max-w-7xl for full sections
- **Content Width**: max-w-4xl for text-heavy content
- **Grid Columns**: 1 (mobile), 2-3 (tablet/desktop)

## Component Library

### Navigation
Sticky header with blur backdrop, logo left, smooth-scroll links right, resume download CTA button in primary color

### Hero Section
**Layout**: Asymmetric split (60/40) - Left: Name, title, short tagline, contact links (GitHub, LinkedIn, Email); Right: Professional headshot or abstract gradient visual
**Height**: 85vh minimum
**Special**: Name in gradient text (primary to accent), contact icons with subtle hover scale

### Projects Showcase
**Grid**: 2 columns (desktop), 1 column (mobile)
**Cards**: Elevated background, border-subtle, p-8, hover lift effect (translate-y-1)
**Content**: Project title (text-2xl), tech stack pills (small badges), description, key achievements as bullet points, optional demo/code links
**Tech Pills**: Small rounded badges with background-elevated and border

### Skills Section
**Layout**: Category-based grid (3 columns desktop, 1 mobile)
**Categories**: Languages, Front-End, Back-End, Tools, Soft Skills
**Style**: Each category as a card with header and list of skills, skills separated by bullet points or as inline tags

### Experience Timeline
**Layout**: Single column with year markers on left
**Cards**: Full-width with left border accent, company name bold, duration in secondary text, bullet achievements

### Awards Section
**Layout**: Horizontal cards or 3-column grid
**Style**: Icon + title + description, subtle background with primary color border-left accent

### Education
**Layout**: Stacked cards with institution, degree, CGPA, and years
**Visual**: Subtle connecting line between education levels

### Footer
Minimal centered layout with copyright, quick links to sections, social icons repeated

## Images

### Hero Image
**Placement**: Right side of hero section (40% width)
**Type**: Professional headshot with circular mask OR abstract geometric pattern in brand colors OR subtle code-themed background
**Treatment**: Slight blur or overlay to blend with background

### Project Cards (Optional)
Small thumbnail previews of project interfaces if available, otherwise use abstract tech illustrations

## Animations
**Scroll Reveal**: Fade-in on scroll for section headers only
**Hover States**: Subtle scale (1.02) on project cards, color shift on navigation links
**NO**: Page transitions, parallax effects, or distracting motion

## Accessibility
- Consistent contrast ratios (WCAG AA minimum)
- Focus indicators on all interactive elements
- Semantic HTML structure for screen readers
- Skip-to-content link in navigation

## Unique Design Decisions
- **Gradient Text**: Hero name uses linear gradient from primary to accent
- **Asymmetric Hero**: Breaks conventional centered pattern for modern feel
- **Tech Pills**: Visual representation of technical skills throughout
- **Subtle Borders**: Use border-subtle extensively instead of heavy shadows
- **Professional Photo**: Include hero image to humanize the portfolio and build trust