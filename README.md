# Gameloft test taks

This project is a test assignment implemented using **Next.js (App
Router)**, **Feature-Sliced Design (FSD)** architecture, and
**TailwindCSS**.

It includes:

-   Responsive **carousel**
-   **Add to Favorites** functionality
-   **Add to Basket / Cart**
-   Modular and scalable architecture following FSD principles

## 🚀 Tech Stack

-   **Next.js 14+** (App Router)
-   **TypeScript**
-   **Feature-Sliced Design (FSD)**
-   **TailwindCSS**
-   Zustand (for state management)
-   ESLint

## 📁 Project Structure (FSD)

    src/
     ├─ app/
     │   ├─ layout.tsx
     │   ├─ page.tsx
     │   └─ ...
     ├─ shared/          # Shared UI, libs, helpers, API, config
     ├─ entities/        # Business entities (product, user, cart item...)
     ├─ features/        # Reusable business features
     └─ widgets/         # UI blocks composed of features/entities

## ⚙️ Installation

``` bash
git clone <repository-url>
cd <project-folder>
npm install
```

## 🧪 Development

Start the development server:

``` bash
npm run dev
```

App runs at:

    http://localhost:3000

## 🏗️ Build

Create a production build:

``` bash
npm run build
```

Run production server:

``` bash
npm run start
```

## 🎡 Implemented Functionality

### 1. Carousel Component

-   Responsive: 1 item (mobile), 2 (tablet), 3 (desktop)
-   Fade animation
-   Manual + auto slide
-   Accessible and reusable

### 2. Add to Favorites

-   Toggle favorite on any product
-   Zustand global store
-   Persistence via localStorage
-   Works as separate FSD feature

### 3. Add to Basket

-   Add/remove products from cart
-   Global cart state with Zustand
-   Persists between reloads
-   Optimistic updates

## 🎨 Styling

Styled with **TailwindCSS**.

Global stylesheet:

    src/app/globals.css

## 📝 Scripts

  Command           Description
  ----------------- -------------------------
  `npm run dev`     Run development server
  `npm run build`   Create production build
  `npm run start`   Start production server
  `npm run lint`    Run ESLint

## 📌 Notes for Reviewer

-   Architecture strictly follows **FSD**
-   UI and logic are separated
-   Components are reusable and clean
-   Minimal global state, local state where appropriate
-   Carousel implemented without heavy libraries
-   Code is easy to scale and modify

## 📄 License

MIT License.
