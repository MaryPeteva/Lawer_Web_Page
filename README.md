# Law Firm Website

A modern, responsive website for a law office built with React and styled with CSS. The application features multiple pages showcasing services, team members, testimonials, and client contact information.

## Features

- 📱 Fully responsive design with mobile-first approach
- ⚛️ Built with React for modern, component-based architecture
- 🎨 Clean, professional aesthetic with custom styling
- 🧭 Navigation system with Navbar component
- 📑 Page components include:
  - Hero section with call-to-action
  - About page
  - Practice Areas/Services (expandable cards)
  - Team showcase
  - Client Testimonials
  - FAQ section (accordion style)
  - Contact page with Formspree integration
  - Privacy Policy
  - Statistics/Stats section
  - Footer with links

## Technical Details

- **Framework**: React (created via Create React App)
- **Styling**: Plain CSS with flexbox/grid and media queries; component-scoped styles
- **Package Manager**: npm
- **Dependencies**:
  - `framer-motion` for scroll/hover animations
  - `lucide-react` for iconography
  - `@formspree/react` for contact form handling
- **Browser Compatibility**: ES6+ modern browsers

## Project Structure

```
LawerWebPage/
├── frontend/                 # React frontend application
│   ├── public/              # Static files
│   │   ├── index.html       # Main HTML entry point
│   │   └── img/             # Image assets
│   ├── src/                 # Source code
│   │   ├── App.js           # Main App component
│   │   ├── App.css          # Main styles
│   │   ├── index.js         # React entry point
│   │   ├── index.css        # Global styles
│   │   └── components/      # React components
│   │       ├── Navbar.jsx
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── PracticeAreas.jsx
│   │       ├── Team.jsx
│   │       ├── Testimonials.jsx
│   │       ├── Stats.jsx
│   │       ├── FAQ.jsx
│   │       ├── Contact.jsx
│   │       ├── Footer.jsx
│   │       └── PrivacyPolicy.jsx
│   └── package.json         # Project dependencies
├── README.md                # Project documentation
└── .git/                    # Git repository
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design optimized for mobile, tablet, and desktop
- ES6+ JavaScript support required

## Current Status

The project is in active development. All major sections are implemented and styled; the contact form now integrates with Formspree and other interactive elements use Framer Motion for subtle animation. Ongoing work includes accessibility audits and performance tuning.

---

## License

[License pending]
