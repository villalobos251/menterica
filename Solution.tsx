@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;700;800;900&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Montserrat", ui-sans-serif, system-ui, sans-serif;
  
  --color-brand-gold: #eab308;
  --color-brand-gold-hover: #ca8a04;
  --color-brand-dark: #0f172a;
  --color-brand-dark-light: #1e293b;
}

body {
  background-color: var(--color-brand-dark);
  color: #f8fafc;
  font-family: var(--font-sans);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
}
