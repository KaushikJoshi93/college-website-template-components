# **College Website Template Components**

[![College Website Template Components](https://img.shields.io/badge/College%20Website%20Template%20Components-v0.1.0-blue.svg)](https://github.com/KaushikJoshi93/college-website-template-components)
[![npm](https://img.shields.io/npm/v/college-website-template-components.svg)](https://www.npmjs.com/package/college-website-template-components)

**A comprehensive set of React components for building a stunning college website**

## **Overview**

Are you tired of building a college website from scratch? Look no further! `college-website-template-components` provides a set of pre-built, customizable React components to help you create a professional-looking college website in no time.

## **Components**

### Navbar

A responsive, customizable navbar component with support for logo, menu items, and mobile menu toggle.

### Carousel

A sleek, responsive carousel component with support for images, videos, and custom content.

### Hero Section

A hero section component with support for background images, videos, and custom content.

### Features Section

A features section component with support for icons, headings, and custom content.

### Testimonials Section

A testimonials section component with support for quotes, images, and custom content.

### Footer

A customizable footer component with support for social media links, contact information, and custom content.

## **Getting Started**

### Installation

`npm install college-website-template-components`

### Usage

```jsx
import React from 'react'
import { CollegeNavbar } from 'college-website-template-components'

const App = () => {
  return (
    <div>
      <CollegeNavbar
        logoPath='./assets/logo.png'
        items={[
          { name: 'Home', link: '#', subMenu: [{ name: 'Dashboard', link: '#', subMenu: [] }] },
          { name: 'About', link: '#', subMenu: [] },
        ]}
      />
    </div>
  )
}
```
