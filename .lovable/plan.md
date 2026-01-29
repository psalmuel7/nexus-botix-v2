
# Implementation Plan: Header Scroll Behavior and Reusable Hero Section

## Overview
This plan covers three main changes:
1. Header collapse behavior on scroll
2. Reusable hero section component for non-home pages
3. Route renaming from "/about" to "/about-us"

---

## 1. Header Scroll Collapse with Smooth Transition

### Current State
The header has a two-row layout:
- Top row: "Sign in" link (right-aligned)
- Bottom row: Logo, navigation, and "Get started free" button

### Changes
- Add scroll state tracking using `useState` and `useEffect`
- When scrolled beyond a threshold (e.g., 50px), hide the "Sign in" row
- Apply CSS transition for smooth collapse animation

### Technical Details
```text
┌─────────────────────────────────────────────────────────┐
│ Before Scroll:                                          │
│   ┌─────────────────────────────────────────────────┐   │
│   │                                      Sign in    │   │
│   ├─────────────────────────────────────────────────┤   │
│   │ Nexus Botix   [Nav Links]    [Get started free] │   │
│   └─────────────────────────────────────────────────┘   │
│                                                         │
│ After Scroll (collapsed):                               │
│   ┌─────────────────────────────────────────────────┐   │
│   │ Nexus Botix   [Nav Links]    [Get started free] │   │
│   └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**File Modified:** `src/components/Header.tsx`
- Add `isScrolled` state with scroll listener
- Apply conditional classes for height/opacity/overflow transitions
- Use `transition-all duration-300` for smooth animation

---

## 2. Reusable Page Hero Section Component

### Design Reference
Based on the provided screenshots, the hero section features:
- Full-width background using `heroBlurBg.svg` (blue blurred ellipses on white)
- Centered bold title (e.g., "Everything your chatbot needs to work smarter.")
- Centered grey subtitle text below
- Adequate padding for visual balance

### New Component
**File:** `src/components/shared/PageHeroSection.tsx`

Props:
- `title: string` - The main heading
- `subtitle: string` - The description text

### Usage Per Page
| Page | Title | Subtitle |
|------|-------|----------|
| Product | "Everything your chatbot needs to work smarter." | "Nexus Botix is a single platform for answering questions, handling conversations, and capturing leads without juggling tools or workflows." |
| About Us | "About Us" | "We help businesses create powerful chatbots through a simple, intuitive platform — no technical skills, no complexity, just better conversations." |
| Contact | "Contact Us" | "Got something in mind!, A question, an idea, or just curious? Reach out — Our team is ready to assist with clarity and care." |

---

## 3. Route and Navigation Updates

### Changes
- Update route from `/about` to `/about-us`
- Update nav link label from "About" to "About Us" (optional, or keep as "About")
- Update all file references

### Files Modified
| File | Change |
|------|--------|
| `src/App.tsx` | Change route path from `/about` to `/about-us` |
| `src/components/Header.tsx` | Update navLinks href from `/about` to `/about-us` |
| `src/pages/About.tsx` | Update page title to "About Us - Nexus Botix" |

---

## File Change Summary

### Files to Create
1. `src/components/shared/PageHeroSection.tsx` - New reusable hero component

### Files to Modify
1. `src/components/Header.tsx` - Add scroll collapse behavior + update About link
2. `src/App.tsx` - Update route from `/about` to `/about-us`
3. `src/pages/About.tsx` - Update page title, use new hero section
4. `src/pages/Contact.tsx` - Use new hero section instead of UnderDevelopment
5. `src/pages/Product.tsx` - Keep structure but update hero import
6. `src/components/Products/Products.tsx` - Use new PageHeroSection
7. `src/components/Products/HeroSection.tsx` - Remove (replaced by shared component)

---

## Implementation Order
1. Create `PageHeroSection.tsx` component with the blur background
2. Update Header.tsx with scroll behavior and route update
3. Update App.tsx route
4. Update Product page to use new hero
5. Update About page to use new hero
6. Update Contact page to use new hero
