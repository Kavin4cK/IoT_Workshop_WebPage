# IoT Workshop WebPage

A modern professional academic website built with Next.js and Tailwind CSS for Raspberry Pi Based Industrial IoT Systems Workshop.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /home - Home page with hero section and workshop overview
  /modules - Hardware components and software technologies
  /agenda - Workshop schedule and timeline
  /outcomes - Learning objectives and expected outcomes
  /codebase-links - GitHub repository links
  /feedback - Feedback form page
  /contact - Faculty and student coordinators
  layout.tsx - Root layout with Navbar
  page.tsx - Root page (redirects to /home)

/components
  Navbar.tsx - Navigation component with college logo

/public
  - College logos and component images

/styles
  globals.css - Global styles with Inter font
```

## Design Theme

- **Background**: White (#FFFFFF)
- **Sections**: Light grey (#F5F5F5)
- **Text**: Black (#000000)
- **Borders**: Soft grey (#E5E5E5)
- **Font**: Inter (modern sans-serif)

## Features

- Fully responsive design for mobile, tablet, and desktop
- Professional academic styling
- Hardware component showcase with images
- Interactive workshop agenda timeline
- Faculty and student coordinator profiles
