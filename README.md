# Brinda Clinic — Website

A production-ready, fully static medical clinic landing page for **Brinda Clinic**, Port Blair, Andaman & Nicobar Islands.

---

## File Structure

```
brinda-clinic/
├── index.html          → Main landing page
├── appointment.html    → Appointment booking form
├── privacy-policy.html → Privacy Policy
├── terms.html          → Terms of Service
├── styles.css          → Global stylesheet (all pages)
├── components.js       → Shared navbar + footer injected into every page
├── script.js           → Main interactivity (chat, FAQ, counters, menu)
├── appointment.js      → Appointment form validation & submission
├── logo.png            ← ADD YOUR LOGO HERE
└── README.md
```

---

## Setup Instructions

### 1. Add your logo
Place your `logo.png` file in the root directory (same folder as `index.html`). The logo appears in the navbar and footer. If `logo.png` is missing, a text fallback ("B") is shown automatically.

### 2. (Optional) Add images
You can add the following images to replace the placeholder boxes:

| File name            | Used in              |
|----------------------|----------------------|
| `hero-doctor.jpg`    | Hero section         |
| `clinic-interior.jpg`| About section (main) |
| `clinic-exterior.jpg`| About section (small)|
| `doctor-photo.jpg`   | Doctor section       |
| `gallery-1.jpg` to `gallery-5.jpg` | Gallery section |

If images are missing, styled placeholder boxes are shown automatically.

### 3. Update clinic details
In **`components.js`** (top of file), update these constants:
```js
const PHONE     = '+91 98765 43210';
const PHONE_TEL = '+919876543210';
const EMAIL     = 'care@brindaclinic.in';
const ADDRESS   = 'Near Aberdeen Bazaar, Port Blair, ...';
```

In **`index.html`**, update the Google Maps embed `src` URL (in the `#map-section`) to point to your exact clinic location.

In the **Doctor section** of `index.html`, fill in the actual doctor name, qualifications, and biography.

---

## GitHub Pages Deployment

1. Push all files to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select `main` branch, `/ (root)`.
4. Click **Save**. Your site will be live at `https://yourusername.github.io/repo-name`.

No build step required — this is pure HTML/CSS/JS.

---

## Features

- Sticky navbar with logo, clinic name, and Book Appointment button
- Slide-in drawer menu with dark/light mode toggle
- Hero with animated stats counter, floating cards, grid background
- Services grid (9 services) with hover animations
- About clinic section with image placeholders
- Doctor profile card with credentials
- Gallery with placeholder slots for 5 images/videos
- Testimonials from 3 patients
- Appointment CTA with inline preview form
- Google Maps embed (auto greyscale, colour on hover)
- FAQ accordion
- AI Chat widget with clinic knowledge base
- AI Call modal (direct call / WhatsApp / book appointment)
- WhatsApp floating button
- Phone call floating button
- Full footer: logo, address, links, hours, social media
- Privacy Policy page
- Terms of Service page
- Full appointment booking form with validation
- Success confirmation modal
- Scroll reveal animations
- Dark / Light mode (persisted in localStorage)
- Mobile responsive at all breakpoints

---

## Colour Palette

Black & white only — no colour accents by design.

| Token               | Light Mode  | Dark Mode   |
|---------------------|-------------|-------------|
| `--bg`              | `#FFFFFF`   | `#0A0A0A`   |
| `--bg-secondary`    | `#F7F7F7`   | `#141414`   |
| `--text-primary`    | `#0A0A0A`   | `#F5F5F5`   |
| `--text-secondary`  | `#444444`   | `#BBBBBB`   |
| `--border`          | `#E0E0E0`   | `#2A2A2A`   |

---

## Fonts

- **Display / Headings:** Cormorant Garamond (Google Fonts)
- **Body / UI:** Outfit (Google Fonts)

Both loaded from Google Fonts CDN — requires internet connection.

---

## Icons

All icons use [Lucide Icons](https://lucide.dev/) loaded via CDN. No installation required.

---

*Built with care. Brinda Clinic © 2025.*
