# Ecommerce-Website-using-Tailwind-CSS
<h1 align="center">🛍️ ShopSwift</h1>

<p align="center">
  <strong>A fully responsive eCommerce marketplace inspired by Daraz — built with pure Tailwind CSS</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License">
</p>

---

## 📌 Project Overview

**ShopSwift** is a modern, mobile-first eCommerce web application that replicates core functionality of platforms like **Daraz** and **Amazon**. Built entirely with **Tailwind CSS**, it delivers a sleek, utility-first styling approach without writing a single line of custom CSS. The platform features product browsing, shopping cart management, user authentication modals, and responsive layouts that work seamlessly across all devices.

---

## ✨ Core Features

| Feature Area | Implemented Components |
|--------------|------------------------|
| **Navigation** | Sticky header with search bar, category mega-menu, cart icon with badge, user profile dropdown |
| **Homepage** | Hero banner carousel, flash sale countdown timer, product grid (2→5 columns responsive), category icons row |
| **Product Listing** | Filter sidebar (price range, ratings, brands), sort by (popularity, price, latest), grid/list view toggle |
| **Shopping Cart** | Slide-out cart drawer, quantity adjusters, remove items, subtotal calculation, checkout button |
| **Product Details** | Image gallery thumbnails, variant selectors (size/color), add to cart with quantity picker, seller info card |
| **User Account** | Login/Register modals with form validation, order history mockup, wishlist heart icons |
| **Footer** | Multi-column links (customer care, social media, payment methods), newsletter signup |

---

## 🎨 Tailwind CSS Implementation Highlights
<!-- Responsive product grid -->
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 p-4">
  
  <!-- Product Card with hover effects -->
  <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    <img src="product.jpg" alt="Product" class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
    <div class="p-3">
      <h3 class="font-semibold text-gray-800 text-sm md:text-base line-clamp-2">Wireless Headphones</h3>
      <div class="flex items-center gap-2 mt-2">
        <span class="text-orange-500 font-bold text-lg">$29.90</span>
        <span class="text-gray-400 line-through text-sm">$49.90</span>
        <span class="bg-red-500 text-white text-xs px-2 py-0.5 rounded">-40%</span>
      </div>
      <button class="w-full mt-3 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
        Add to Cart
      </button>
    </div>
  </div>
</div>

<!-- Flash Sale Timer -->
<div class="bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded-lg flex items-center justify-between">
  <span class="font-bold">⚡ Flash Sale Ends in:</span>
  <div class="flex gap-2 font-mono">
    <span class="bg-black/30 px-3 py-1 rounded">12h</span>
    <span class="bg-black/30 px-3 py-1 rounded">45m</span>
    <span class="bg-black/30 px-3 py-1 rounded">22s</span>
  </div>
</div>

<!-- Cart Drawer -->
<div class="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50">
  <div class="flex flex-col h-full">
    <div class="p-4 border-b flex justify-between items-center">
      <h2 class="text-xl font-bold">Shopping Cart (3 items)</h2>
      <button class="text-gray-500 hover:text-gray-800">✕</button>
    </div>
    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <!-- Cart items loop here -->
    </div>
    <div class="p-4 border-t">
      <div class="flex justify-between mb-3">
        <span>Subtotal:</span>
        <span class="font-bold text-orange-500">$89.70</span>
      </div>
      <button class="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
        Proceed to Checkout →
      </button>
    </div>
  </div>
</div>
