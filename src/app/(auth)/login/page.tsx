import { Mountain } from "lucide-react";

import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-4 py-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Login Card */}

      <div className="relative w-full max-w-md rounded-3xl border border-border/60 bg-background/80 p-8 shadow-2xl backdrop-blur-xl lg:p-10">
        {/* Logo */}

        <div className="mb-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-green-700 text-white shadow-xl">
            <Mountain className="h-10 w-10" />
          </div>
        </div>

        {/* Heading */}

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome Back
          </h1>

          <p className="mt-2 text-2xl font-bold text-emerald-600">
            GearUp
          </p>

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Sign in to your account and manage your rentals, bookings,
            outdoor gear, payments, and adventures from one dashboard.
          </p>
        </div>

        {/* Login Form */}

        <LoginForm />
      </div>
    </main>
  );
}