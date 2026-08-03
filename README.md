# 🏕️ GearUp — Rent Sports & Outdoor Gear Instantly

GearUp Banner

## 🚀 Project Overview

**GearUp** is a modern sports and outdoor equipment rental platform where users can discover, rent, and manage sports gear easily.

The platform connects customers who need outdoor equipment with providers who want to rent their gear. It provides a complete rental ecosystem with authentication, role-based dashboards, inventory management, payments, reviews, and administration.

Built with a modern frontend architecture using **Next.js, TypeScript, Tailwind CSS, and TanStack Query**.

---

# 🌐 Live Demo & Repository

🚀 **Live Website:**  
https://gearup-frontend-mu.vercel.app/

💻 **Frontend Repository:**  
https://github.com/shahidca/gearup-frontend

⚙️ **Backend Repository:**  
https://rent-sports-outdoor-gear-api.onrender.com

---

# ✨ Features

## 👤 Customer Features

- Browse available sports and outdoor equipment
- Search and filter gears
- View detailed gear information
- Check availability
- Request equipment rentals
- Manage rental history
- View payment records
- Download invoices
- Submit ratings and reviews
- Update profile information

---

## 🏪 Provider Features

- Provider dashboard
- Add new gear items
- Edit gear information
- Upload gear images
- Manage inventory
- Accept or reject rental requests
- Track rental status
- View earnings

---

## 🛡️ Admin Features

- Admin dashboard
- Manage all users
- Manage providers
- Manage gear listings
- Manage categories
- Monitor rental activities
- View platform statistics
- Control platform operations

---

# 🛠️ Technology Stack

## Frontend

- ⚛️ React.js
- ▲ Next.js (App Router)
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🔄 TanStack Query
- 📝 React Hook Form
- ✅ Zod Validation
- 🎬 Framer Motion
- 🔐 JWT Authentication
- 💳 Stripe Payment Integration

## Backend

- 🟢 Node.js
- 🚂 Express.js
- 🔷 TypeScript
- 🐘 PostgreSQL
- 🔑 JWT Authentication
- 🔒 bcrypt Password Hashing
- 🗄️ Raw SQL Queries

---

# 📂 Project Structure

```
src
│
├── app
│   ├── (public)
│   ├── (auth)
│   ├── (dashboard)
│   └── layout.tsx
│
├── components
│   ├── common
│   ├── dashboard
│   ├── forms
│   └── ui
│
├── hooks
│
├── services
│
├── providers
│
├── types
│
├── utils
│
└── config
```

---

# 🔐 Authentication & Authorization

GearUp uses secure role-based authentication.

### Available Roles:

- Customer
- Provider
- Admin

Security features:

- JWT authentication
- Protected routes
- Middleware authorization
- Role-based dashboard access
- Secure API communication

---

# 📸 Screenshots

## 🏠 Homepage

Add your screenshot:

```
![Homepage](your-image-url)
```

---

## 🛒 Gear Details Page

```
![Gear Details](your-image-url)
```

---

## 📊 Dashboard

```
![Dashboard](your-image-url)
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/your-username/gearup-frontend.git
```

## Go to Project Folder

```bash
cd gearup-frontend
```

## Install Dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_backend_api_url

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

---

# ▶️ Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 📦 Available Scripts

Development:

```bash
npm run dev
```

Production Build:

```bash
npm run build
```

Start Production:

```bash
npm start
```

Lint:

```bash
npm run lint
```

---

# 🔌 API Features

The frontend communicates with backend APIs:

### Authentication

- Register
- Login
- Logout
- Profile management

### Gear Management

- Create gear
- Update gear
- Delete gear
- Browse gears
- Search gears

### Rental System

- Create rental request
- Manage rentals
- Track rental status

### Payment

- Stripe payment integration
- Payment history
- Invoice generation

### Reviews

- Add reviews
- View ratings

---

# 🎨 UI & Design

Design approach:

- Responsive design
- Modern dashboard UI
- Glassmorphism effects
- Smooth animations
- Mobile-first layout
- Clean user experience

---

# 🚀 Future Improvements

- Real-time notifications
- Customer-provider chat system
- AI-based gear recommendations
- Location-based search
- Mobile application
- Advanced analytics
- Recommendation system

---

# 👨‍💻 Developer

## Md. Shahid Hossain

Full Stack Web Developer

### Skills

- React.js
- Next.js
- TypeScript
- JavaScript
- Node.js
- Express.js
- PostgreSQL
- MongoDB
- Tailwind CSS
- Firebase

---

# 📄 License

This project is created for educational, portfolio, and demonstration purposes.

---

# ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.
