# JBL Website — Hero & About Us Sections

A pixel-close implementation of the JBL web template built with **React + Vite + Tailwind CSS v4**, submitted as part of the Nebuloid Tech Studio LLP technical assessment.

---

## 🔗 Links

- **Live Demo:** [https://jbl-website.vercel.app](https://jbl-website.vercel.app)
- **GitHub:** [https://github.com/YOUR_USERNAME/jbl-website](https://github.com/yo-soy-dev/jbl-website)
- **Figma Reference:** [JBL Web Template](https://www.figma.com/design/ORj0wnxvVMHOF1vaQmYS1x/JBL-web-template)

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI Framework |
| Vite | 8 | Build Tool |
| Tailwind CSS | v4 | Styling |
| Bebas Neue | Google Fonts | Heading Font |
| Inter | Google Fonts | Body Font |

---

## 📁 Project Structure

```
jbl-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed navbar with active link highlighting
│   │   ├── HeroSection.jsx   # Hero slider with wave animation
│   │   └── AboutSection.jsx  # About Us, History, What We Offer
│   ├── App.jsx               # Page routing with useState
│   ├── index.css             # Tailwind v4 + custom theme tokens
│   └── main.jsx
├── vite.config.js
├── package.json
└── README.md
```

---

## ✨ Features Implemented

### Navbar
- Fixed top navigation with blur backdrop
- JBL logo with purple-to-orange gradient
- Active link underline indicator (orange)
- SVG icon buttons (search, user, wishlist, cart)
- Click navigation between pages

### Hero Section
- Full-screen gradient background (purple → red-brown)
- Animated SVG sound wave lines
- Slide carousel with 3 slides
- Product image with drop shadow glow
- Side thumbnail navigation
- Animated dot indicators
- ORDER NOW button

### About Us Section
- Hero banner with wave background
- **Find Your True Sound** — bordered text box layout
- **Our History** — orange section with image slider (3 milestones, prev/next arrows)
- **What We Offer** — tab navigation (Bluetooth, Headphones, Gaming, etc.)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yo-soy-dev/jbl-website.git

# Navigate to project folder
cd jbl-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🎨 Design Decisions

- Used **inline styles** alongside Tailwind for precise pixel-level control matching the Figma design
- **Bebas Neue** font used for all headings to match the bold, uppercase JBL brand identity
- Wave SVG lines are hand-crafted to replicate the exact flow pattern from the Figma file
- Orange (`#FF4500`) used as the primary accent color throughout, consistent with JBL branding
- Navigation uses `useState` for lightweight client-side routing — no external router library needed for a two-page assignment

---

## 📸 Screenshots

### Home Page
![Hero Section](<img width="1517" height="724" alt="image" src="https://github.com/user-attachments/assets/59cd89d9-27a8-44a0-8b55-2f8681e3ff57" />
)

### About Us Page
![About Section](<img width="1536" height="714" alt="image" src="https://github.com/user-attachments/assets/b03d4d57-9e4b-459e-b156-b39bfc06739d" />
)

> Add screenshots by taking a browser screenshot and saving to `/screenshots/` folder

---

## 👤 Author

**Devansh**
- Submitted for: Nebuloid Tech Studio LLP — Full Stack Developer (Fresher) Assessment
- Date: June 2026
