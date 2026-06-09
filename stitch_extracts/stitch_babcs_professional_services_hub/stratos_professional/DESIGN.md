---
name: Stratos Professional
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is engineered for a multidisciplinary professional services environment where precision meets accessibility. The brand personality is **Strategic, Transparent, and Authoritative**, aimed at C-suite executives and business owners who require high-stakes reliability in Accounting, HR, and Audit.

The aesthetic follows a **Corporate / Modern** direction with a focus on "Structural Clarity." This style utilizes a rigorous grid, deliberate whitespace, and a refined sense of depth to convey stability. It avoids unnecessary ornamentation, instead using high-quality typography and a sophisticated color palette to evoke an emotional response of trust and effortless competence.

## Colors
The palette is anchored by **Deep Navy (#0F172A)**, providing a foundation of authority and permanence. **Slate Gray (#64748B)** is utilized for secondary information and interface borders to maintain a professional, low-friction environment.

**Emerald Green (#10B981)** serves as the strategic accent color, symbolizing growth, financial health, and successful audits. It is used sparingly for primary actions, success states, and key data points. The background uses a crisp **Neutral White/Gray (#F8FAFC)** to ensure high readability and a "high-end gallery" feel. 

For data visualizations:
- Positive/Growth: Emerald Green
- Neutral/Information: Slate Gray
- Critical/Urgent: Deep Navy or a muted systemic Red.

## Typography
The design system relies exclusively on **Inter** to achieve a systematic, utilitarian, and modern feel. The typeface’s tall x-height ensures legibility in dense financial reports and audit tables.

- **Headlines:** Use tighter letter-spacing and heavier weights to command attention.
- **Body:** Optimized for long-form reading in HR policies and service descriptions.
- **Data Display:** For financial figures, use tabular numbers (`tnum`) to ensure columns of figures align perfectly in tables and dashboards.
- **Hierarchy:** Maintain a clear distinction between labels (uppercase, tracked out) and body text to facilitate rapid scanning of complex forms.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop to maintain an executive, composed look, while transitioning to a **Fluid Grid** for mobile. 

- **Grid:** A 12-column grid is used for desktop. Service cards typically span 4 columns, while primary data dashboards span 8 or 12.
- **Spacing Rhythm:** An 8px base unit drives all padding and margins. 
- **Responsive Behavior:** 
  - **Desktop (1280px+):** 40px outer margins, 24px gutters.
  - **Tablet (768px - 1279px):** 24px outer margins, 16px gutters. Elements reflow from 3 columns to 2.
  - **Mobile (Up to 767px):** 16px outer margins. Vertical stacking of all components.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and extremely subtle **Ambient Shadows**. This design system avoids heavy drop shadows to maintain its professional "flat-plus" aesthetic.

- **Surface Levels:** 
  - Level 0: Background (`#F8FAFC`).
  - Level 1: Primary cards and content blocks (Pure White `#FFFFFF`).
  - Level 2: Overlays, dropdowns, and active tooltips.
- **Shadows:** Use a single, highly-diffused shadow for Level 1 components: `0 4px 12px rgba(15, 23, 42, 0.04)`. This creates a sense of the interface being composed of physical, stacked sheets of paper.
- **Dividers:** Use 1px borders in Slate Gray at 10% opacity to separate content without creating visual noise.

## Shapes
The shape language is **Soft (0.25rem / 4px)**. This choice reflects a balance between the "sharp" precision of accounting/audit and the "approachable" nature of HR services.

- **Standard Elements:** Buttons, inputs, and small widgets use a 4px radius.
- **Containers:** Large service cards or feature blocks use 8px (`rounded-lg`) to feel more substantial and modern.
- **Interactive States:** Active indicators (like tab underlines) remain sharp (0px) to denote technical accuracy.

## Components
- **Buttons:**
  - **Primary:** Deep Navy background with White text. No gradient. High-contrast and authoritative.
  - **Secondary:** White background with a 1px Slate Gray border.
  - **CTA:** Emerald Green background. Reserved for "Contact Sales" or "Approve Audit."
- **Service Cards:** White background, Level 1 shadow, 8px radius. Features a Slate Gray icon and a Deep Navy headline. Hover state includes a 2px Emerald Green bottom border.
- **Data Tables:** Row-based layout with subtle Slate Gray dividers. Header cells use `label-sm` typography with a light gray background. Use tabular figures for all numeric columns.
- **Input Fields:** 4px radius, 1px Slate Gray border. On focus, the border transitions to Deep Navy with a 2px Emerald Green "soft glow" (box-shadow).
- **Status Chips:** Small, pill-shaped indicators for "Audit Complete" or "Pending Review." Use low-saturation background tints of the status color with high-saturation text (e.g., Light Green bg with Dark Green text).