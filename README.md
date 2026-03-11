# Academic Website

A modern professional academic website built with Next.js and Tailwind CSS.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Add Your Logo

Place your logo image in the `/public` folder as `Logo.png` (recommended size: 48x48px or higher).

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
  /home - Home page
  /modules - Modules page
  /agenda - Agenda page
  /outcomes - Outcomes page
  /codebase-links - Codebase Links page
  /feedback - Feedback page
  /contact - Contact page
  layout.tsx - Root layout with Navbar
  page.tsx - Root page (redirects to /home)

/components
  Navbar.tsx - Navigation component

/public
  Logo.png - Your logo (add this file)

/styles
  globals.css - Global styles
```

## Design Theme

- **Background**: White (#FFFFFF)
- **Sections**: Light grey (#F5F5F5)
- **Text**: Black (#000000)
- **Borders**: Soft grey (#E5E5E5)
- **Font**: Inter (modern sans-serif)

## Next Steps

Add content to the individual pages as needed. All pages are currently empty placeholders ready for your content.
