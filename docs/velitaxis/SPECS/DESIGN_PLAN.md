# DESIGN PLAN — The Market

## Direction

Clean Facebook Marketplace, not a Facebook clone and not the 2008 wall. Familiar structure:
search first, category chips, photo-led cards, a compact seller panel. The visual language
is modern: white surfaces, soft gray page, one strong blue accent, generous radii, and
system sans type.

## Tokens

- Brand: `#1466e8`, dark `#0e51bb`, tint `#eef4ff`.
- Ink: `#0f1b2d`; body `#334155`; muted `#5b6b82`.
- Page: `#f4f6f9`; surface: `#ffffff`; line: `#e3e8ef`.
- Radii: controls 10px, cards 14px, large media 18px.
- Type: system sans; display weight 800, tight tracking; body 15px/1.5.
- Spacing: 4/8/12/18/24/28; container max 1180px.

## Layout

- Sticky white header: brand, search, Sell something. Search drops below on mobile.
- Home: short intro, category chips, result count, grid/list toggle.
- Cards: 4:3 photo, price, two-line title, category chip, date. 3/2/1 columns.
- List view: 230px photo left, details centered.
- Detail: large photo left, title/price/description below; seller card and message form in a
  sticky right rail. One column on mobile.
- Sell: 780px form, photo dropzone first, then fields, then publish actions.

## Components

- Buttons: primary blue, secondary white with line.
- Inputs: 44px, 10px radius, clear focus ring, red border on invalid.
- Chips: category pills; active is ink with white text.
- Seller: initials avatar, seller label, email, Message Seller button.
- Success: green inline confirmation after a message.

## Quality gates

- No horizontal scroll at 360, 768, 1440.
- Axe: zero violations.
- Visible focus states.
- Every form field has a label and an inline error.
- No login, so avoid implying private data. Seller email is shown because the brief asks for
  contact details.
