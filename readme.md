# 🌐 Mohamed Hasan M – Portfolio  
 
[![React](https://img.shields.io/badge/Frontend-React%2018-blue?logo=react&logoColor=white)](https://react.dev/)  
[![Express](https://img.shields.io/badge/Backend-Express%20JS-green?logo=express&logoColor=white)](https://expressjs.com/)  
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql&logoColor=white)](https://www.postgresql.org/)  
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  

A **modern, full-stack portfolio website** showcasing my skills, projects, and education as a **Java Full Stack Developer**.    
Built with **React, Express, and PostgreSQL** for a smooth, responsive, and animated experience.  

---           
   
## ✨ Features   
   
- 🎨 **Dark/Light Theme** – toggle seamlessly  
- ⚡ **Fast Performance** – optimized builds with Vite  
- 🖼 **Smooth Animations** – Intersection Observer + CSS transitions  
- 📄 **Download Resume** – instant PDF access  
- 📬 **Contact Form** – integrated backend API with validation  
- 📱 **Fully Responsive** – works on all devices  

---
       
## System Architecture  

### **Frontend**  
- ⚛ **React 18 + TypeScript**  
- 🛣 **Wouter** for lightweight routing  
- 🎨 **Shadcn/UI + Tailwind CSS** for clean UI  
- 🔄 **React Query** for data fetching  
- 🌓 **Theme Context** for dark/light modes  

### **Backend**  
- 🚀 **Express + TypeScript**  
- 🗄 **PostgreSQL with Drizzle ORM**  
- 🧩 **RESTful API** for contact form and resume download  
- 📝 **Centralized error handling & logging**  

---

## 🗃️ Data & Storage  

- **Database:** Neon Serverless PostgreSQL  
- **Migrations & Schema:** Drizzle Kit  
- **Session Storage:** In-memory (ready for PostgreSQL session storage)  
- **Static Files:** Resume and assets served via Express  

---

## 🔐 Authentication (Future Ready)  

- 🧾 **User schema ready** for username/password  
- 🔒 **Session management** setup with `connect-pg-simple`  
- 👨‍💻 **Easily extendable** for protected admin routes  

---

## ⚙️ Development & Deployment  

| Area              | Tool/Process |
|-------------------|-------------|
| **Dev Server**    | Vite HMR for frontend, `tsx` for backend |
| **Build Process** | Vite (frontend) + esbuild (backend) |
| **Environment**   | No required environment variables for local development (`PORT` is optional and defaults to `5000`) |
| **Tooling**       | TypeScript, custom path aliases, error overlays |

---

## 📦 External Dependencies  

- **Frontend:** Radix UI, Lucide Icons, React Hook Form, Zod, date-fns  
- **Backend:** Drizzle ORM, Express, pg  
- **Build Tools:** PostCSS, Autoprefixer, Vite Plugins  
- **Fonts:** Google Fonts (Inter)  

---

## 🚀 Getting Started  

```bash
# Clone repo
git clone https://github.com/mohamedhasan-m/Portfolio-Website.git
cd Portfolio-Website

# Install dependencies
npm install

# Start development server (frontend + backend)
npm run dev

# Type-check
npm run check

# Production build
npm run build

# Start production server (after build)
npm run start
```
## 📬 Contact  

- **Portfolio:** [hasan-developer.netlify.app](https://hasan-developer.netlify.app/)  
- **Email:** [mohamedhasan8403@gmail.com](mailto:mohamedhasan8403@gmail.com)  
- **LinkedIn:** [linkedin.com/in/mohamed-hasan-325051362](https://www.linkedin.com/in/mohamed-hasan-325051362/)  
