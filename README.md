# Krishan Singh — Senior Mobile Software Engineer & Architect Portfolio

A high-performance, responsive personal portfolio built with Next.js 14, Tailwind CSS, Framer Motion, and hardware-accelerated CSS animations.

---

## 📂 Asset Management & Replacements

All static assets are located in the `public/` directory at the project root.

### 📄 How to Change Your Resume
1. Compile or export your resume into a standard PDF format.
2. Rename your PDF file to **`resume.pdf`** (case-sensitive).
3. Place the file inside the **`public/`** folder:
   ```bash
   public/
   └── resume.pdf
   ```
4. The download button on the website will automatically point to `/resume.pdf` and serve the updated file.

### 🖼️ Profile Images
- **`public/krishan.png`**: High-resolution professional portrait for dark mode.
- **`public/krishan.jpg`**: Portrait photograph for light mode.

---

## ✍️ Customizing Website Text & Links

All professional details, work experience cards, education timelines, projects, and skills are centralized in:
📂 **`src/data/content.ts`**

### Structure Overview

- **`personalInfo`**: Modify email, phone, location, MBTI, and social links:
  ```typescript
  export const personalInfo = {
    name: 'Krishan Singh',
    handle: 'krishansingh2611',
    role: 'Senior Mobile Software Engineer & Architect',
    email: 'er.krishansingh2611@gmail.com',
    location: 'Hyderabad, India',
    ...
  }
  ```
- **`heroPhrases`**: Typewriter phrases rendered in the Hero section.
- **`aboutContent`**: Main professional summary, education info, and impact statistics.
- **`skills`**: Technical skill groups across Native Android, Cross-Platform (Flutter), Architecture, Security, etc.
- **`experiences`**: Professional employment history (Asakta, iRESLab, MobileCoderz).
- **`projects`**: Featured mobile applications with Google Play links, tech tags, and interactive terminal mock logs.

---

## 🛠️ Development & Build Guide

### Start Development Server
```bash
npm run dev
```
Runs the app locally at [http://localhost:3000](http://localhost:3000).

### Compile Production Build
```bash
npm run build
```
Produces a static export in `out/` (HTML, CSS, JS).

---
