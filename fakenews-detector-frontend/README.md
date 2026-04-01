# VeriLens Frontend (Fake News Detector)

A premium React + Tailwind dashboard UI for a Fake News Detector ML project.

## Tech Stack
- React (Vite)
- Tailwind CSS
- Axios
- Framer Motion
- Recharts

## Project Structure

```bash
src/
  components/        # Reusable UI building blocks
  data/              # Mock data fixtures
  sections/          # Feature sections/pages of the single-page app
  services/          # API clients + mocked async handlers
  utils/             # Utility maps/helpers
```

## Run locally

```bash
npm install
npm run dev
```

## Features Included
- Hero section with feature highlights and CTA
- URL analyzer with article preview before analysis
- Claim text analyzer with larger textarea
- Chrome extension popup UI + on-page trust overlay mockup
- Animated results dashboard with metrics and chart
- NLP-style entity highlighting for people/org/date/location/suspicious claims
- Loading skeletons, empty states, and error handling
