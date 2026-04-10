# Gaia Retreat Apartment - Professional Refactoring

A modern, professional website for the Gaia Retreat Apartment vacation rental in Riomaggiore, Cinque Terre.

## ✨ Features

### 🎨 Design Improvements
- **Modern Professional Aesthetic**: Clean, elegant design with sophisticated color palette
- **Responsive Layout**: Fully responsive on mobile, tablet, and desktop
- **Better Typography**: Improved hierarchy and readability
- **Smooth Animations**: Fade-in effects and hover transitions
- **Professional Color Scheme**: Green (#2d5016), warm brown, and golden accents

### 🌍 Multi-Language Support
- Italian (Italiano) - Default
- English
- French (Français)
- Language preference persists in localStorage

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Smooth navigation
- Touch-friendly interface

### ⚡ Performance
- Lightweight CSS (no frameworks)
- Pure JavaScript (no dependencies)
- Lazy-loaded images
- Smooth scrolling navigation

## 📂 Project Structure

```
gaia-retreat/
├── index.html          # Main HTML structure
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── translations.js     # Multi-language translations
└── README.md          # This file
```

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in your browser
2. Click language buttons (IT, EN, FR) to switch languages
3. Use navigation menu to explore sections

### Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Then visit http://localhost:8000
```

## 🎯 Key Improvements Over Reference

| Feature | Reference (Carrd) | New Design |
|---------|------------------|-----------|
| Design | Basic | Professional, modern |
| Language Toggle | Navigation list | Clean button interface |
| Mobile Experience | Limited | Fully responsive |
| Performance | Average | Optimized |
| Animations | None | Smooth transitions |
| Information Hierarchy | Mixed | Clear organization |
| Call-to-Action | Scattered | Prominent booking CTA |

## 📝 Content Sections

1. **Navigation Bar**
   - Sticky navigation with language switcher
   - Quick links to all sections

2. **Hero Section**
   - Large title and subtitle
   - Call-to-action button
   - Gradient background

3. **About Section**
   - Welcome message
   - Booking call-to-action
   - Feature highlights

4. **Gallery**
   - Photo grid with hover effects
   - Responsive layout

5. **Useful Links**
   - Travel guides
   - Ferry schedules
   - Parking information

6. **Restaurants**
   - Organized by location
   - TripAdvisor links
   - Cuisine descriptions

7. **Travel Tips**
   - Best time to visit
   - Packing advice
   - Local cuisine
   - Hiking recommendations

8. **Contact Section**
   - Quick booking link
   - Useful links
   - Location information

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --color-primary: #2d5016;      /* Green */
    --color-accent: #d4a574;       /* Gold */
    --color-light: #f5f5f0;        /* Off-white */
}
```

### Languages
Add new languages in `translations.js`:
```javascript
es: {
    'hero.title': 'Gaia Retreat Apartment',
    'hero.subtitle': 'Una experiencia inolvidable en Riomaggiore, Cinque Terre',
    // ... more translations
}
```

### Images
Replace placeholder images:
```html
<img src="YOUR_IMAGE_URL" alt="description">
```

## 📞 Contact & Booking

All booking requests are directed to Airbnb:
- [Airbnb Listing](https://www.airbnb.it/rooms/1349419281125459428)

## 📄 License

© 2024 Gaia Retreat Apartment. All rights reserved.

---

Built with ❤️ for travelers
