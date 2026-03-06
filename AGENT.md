# Store Single - Agent Guide

## Architecture

Entry point `App.tsx` composes a single-product landing page inside `<div className="store-single">`:
Header -> ProductHero -> Features -> Gallery -> Reviews -> Purchase -> Footer.

- **Header.tsx** — Navigation with brand name, mobile menu toggle (`menuOpen` via `useVar`), section anchor links (#features, #gallery, #reviews, #purchase), and cart button reading `cartCount` (number).
- **ProductHero.tsx** — Hero section for the single product with name, tagline, pricing (current + original with discount percentage), quick feature bullets, and "Add to Cart" button that increments `cartCount` via `useVar`.
- **Features.tsx** — Stateless grid of six feature cards (icon + title + description). Data configurable via `features` prop with defaults.
- **Gallery.tsx** — Image viewer with main display and thumbnail strip. `selectedGalleryImage` tracked via `useVar`. Images use color swatches as placeholders with label text.
- **Reviews.tsx** — Stateless customer reviews section with summary stats (average rating, total count) and review cards. Includes a `StarRating` helper component.
- **Purchase.tsx** — Package selector with three tiers (Basic/Pro/Premium). Manages `selectedPurchaseOption`, `purchaseQuantity`, and `cartCount` via `useVar`. Calculates dynamic total and displays checkout guarantees.
- **Footer.tsx** — Stateless multi-column footer with link groups and social icons.

Shared state keys: `cartCount`, `menuOpen`, `selectedGalleryImage`, `selectedPurchaseOption`, `purchaseQuantity`.
Note: `cartCount` is shared between Header, ProductHero, and Purchase.

## Styling

- One `.css` file per component (e.g., `ProductHero.css`, `Gallery.css`) plus `App.css` and `styles.css` for globals.
- Plain class names: `.product-hero`, `.gallery-section`, `.purchase-option`, `.review-card`.
- Gallery uses inline `style={{ background: color }}` for image placeholders.
- ProductHero includes a decorative `.product-3d` / `.product-box` element for visual flair.

## Extension Points

- Replace color-swatch gallery placeholders with real `<img>` tags by updating `GalleryImage` interface and `Gallery.tsx` rendering.
- Add a review submission form by introducing `useVar` state for new review data and appending to the reviews list.
- Add variant selection (size/color) to Purchase.tsx by extending the `PurchaseOption` interface and UI.

## Constraints

- `cartCount` is a simple number (not a list of items) shared across multiple components (Header, ProductHero, Purchase).
