# ClickCart: React E-commerce Frontend (Work in Progress)

ClickCart is an **in-progress** e-commerce frontend for an electronics store, built with React and Vite. This repository is a **frontend-only showcase**. It shows the UI, routing, state management and API integration I built. It is **not production-ready**.

> **Note:** The original Node.js/Express backend is **intentionally excluded** from this public repository. Features that need the API won't work unless a compatible backend is running locally.

## Tech stack

| Area | Technology |
|---|---|
| Framework | React 19, Vite 7 |
| Routing | React Router 7 (`createBrowserRouter`) |
| State management | Redux Toolkit 2, React Redux 9, redux-persist (localStorage) |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`), tw-animate-css |
| UI components | shadcn/ui ("new-york" style) on Radix UI primitives, class-variance-authority, clsx, tailwind-merge |
| Icons | lucide-react |
| Notifications | sonner |
| HTTP client | axios |
| Linting | ESLint 9 (react-hooks and react-refresh plugins) |

## What's implemented

**Frontend features that work without a backend**
- Home page with hero section, features strip and footer
- Hero buttons and footer "Explore" links that go to existing routes (Products, Sign Up, Cart, Login)
- Responsive navigation bar with conditional login/logout and greeting
- Signup and login forms with controlled inputs, password show/hide toggle and loading states
- "Check your email" confirmation page
- Profile page layout with tabbed interface and image preview before upload
- Reusable shadcn/ui components (Button, Card, Input, Label, Select, Skeleton, Tabs, Toaster)
- Redux store with persisted user and product slices

**Product listing logic (needs the API to load data)**
- Fetches products from the API and stores them in Redux
- Client-side search, category filter, brand filter, price-range filter and price sorting
- Product cards with skeleton loading placeholders

## Features that need the backend

These pages call a REST API at `http://localhost:8000/api/v1`, which isn't part of this repository:

- User registration, login and logout
- Email verification link handling
- Profile update with profile-picture upload
- Product listing

## Not yet implemented

- **Cart:** the Cart page is a placeholder, the cart badge is static, and "Add to Cart" isn't wired up
- **Checkout:** not implemented
- **Orders:** the Orders tab on the Profile page is empty
- **Payments:** not implemented. **Razorpay (or any other payment gateway) is not integrated.**
- Admin product-management UI
- Forgot-password / OTP UI
- Newsletter signup: the footer form is disabled and labelled "Demo only". No emails are collected.
- "Deals" / promotions: there's no deals page

## Known limitations

- **The Products page has no products without the API.** Product data comes only from the backend, and there's no mock data yet. When the API can't be reached, the page shows a "Products unavailable" message instead of an empty grid.
- API URLs are hardcoded to `http://localhost:8000` rather than read from environment variables.
- The original image assets were left out because their redistribution rights weren't confirmed. The logo, hero illustration, profile avatar fallback and favicon are now built with CSS, Lucide icons and a hand-written SVG, so the repository has no third-party images.
- The signup, login, email-verification and logout flows haven't been tested end to end in this showcase, because they need the excluded backend. Logout always clears the locally stored token and user, even if the server can't be reached.
- Auth tokens are stored in `localStorage`, which is fine for a demo but not recommended for production.
- No automated tests.
- ClickCart is an educational portfolio project, not a real store. The footer says so and has no contact details or social links.

## Run it locally

**Requirements:** Node.js 20.19+ or 22.12+ (required by Vite 7) and npm.

```bash
cd frontend
npm install
npm run dev
```

Then open the URL Vite prints (by default `http://localhost:5173`).

Other scripts:

```bash
npm run build     # production build to frontend/dist
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Project structure

```
frontend/
├── public/              # static assets
├── src/
│   ├── components/      # Navbar, Hero, Features, Footer, ProductCard, FilterSidebar
│   │   └── ui/          # shadcn/ui components
│   ├── lib/utils.js     # cn() class-name helper
│   ├── pages/           # Home, Products, Cart, Login, Signup, Verify, VerifyEmail, Profile
│   ├── redux/           # store, userSlice, productSlice
│   ├── App.jsx          # route definitions
│   └── main.jsx         # app entry, Redux Provider and PersistGate
├── index.html
└── vite.config.js       # React + Tailwind plugins, "@" → src alias
```

## Roadmap

- Mock product data so the showcase works without a backend
- Environment-based API URL (`VITE_API_URL`)
- Cart, checkout and order history
- Replacement image assets with clear licensing
- Deployed live demo
