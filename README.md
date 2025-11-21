# 📚 LibraConnect  
A simple, multi-page library borrowing website built with **HTML, Bootstrap, and Vanilla JavaScript**.

LibraConnect is a small team project where every student takes ownership of a single page and codes both **data rendering** (JS → HTML updates) and **interactivity** (DOM events, form validation, toggles, etc.). The goal is to learn how to build a clean UI, work with JS arrays, and make the site feel alive without any backend.  

---

## 🚀 What This Project Includes
- Fully static website (no backend)
- Multi-page layout
- Shared navbar/header/footer through includes
- Each page has:
  - Its own JavaScript file  
  - Data displayed dynamically  
  - At least one interactive feature  

---

## 🧩 Pages & Responsibilities

### 👤 Student 1 – Home Page (`index.html`)
**Data Rendering**
- Uses a JavaScript array containing featured books.
- Renders them as Bootstrap cards.

**Interactivity**
- Each card gets a **“Read More / Read Less” toggle**.
- Implemented with:
  - `addEventListener`
  - `textContent` changes
  - Show/Hide description with DOM updates

---

### 📖 Student 2 – Catalog Page (`catalog.html`)
**Data Rendering**
- Loops through a JS array of books and displays them in cards.

**Interactivity**
- Adds **live search**:
  - List filters automatically while typing (`keyup`)
  - Matches input using `.includes()`
  - Cards hide/show based on search results

---

### 🔑 Student 3 – Register/Login (`register.html`)
**Form Setup**
- Fields: `name`, `email`, `password`

**Interactivity**
- Validates:
  - Email must contain `@limu.edu.ly`
  - Password must be at least 6 characters
- Adds a super simple **Captcha** (e.g., a math question)
- Prevents form submission and shows errors if something’s off

---

### 📝 Student 4 – Borrow Page (`borrow.html`)
**Data Rendering**
- Displays books as a list with checkboxes.

**Interactivity**
- On checking a box:
  - Shows a confirmation like  
    `You selected: Book Title`
- Uses the `change` event on checkboxes

---

### 📚 Student 5 – History Page (`history.html`)
**Data Rendering**
- Borrow history comes from a JS array (title, date, status)

**Interactivity**
- Each row has a **“Show Details”** button
- When clicked:
  - Extra information (return date, fine, etc.) toggles into view
  - Implemented with `classList.toggle()`

---

## 🧠 Skills Practiced
- DOM manipulation  
- Event handling  
- Rendering arrays into HTML  
- Validation without libraries  
- Collaboration on a shared UI project  

---

## 🎯 Goal
By the end, the team should have a functional website where users can explore books, register, borrow, and view borrowing history—powered completely by front-end logic.  
