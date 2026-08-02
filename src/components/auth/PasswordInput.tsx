"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type PasswordInputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(
  (
    {
      className,
      placeholder = "Enter your password",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] =
      React.useState(false);

    return (
      <div className="relative">
        <Input
          ref={ref}
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder={placeholder}
          className={cn(
            "h-12 pr-12",
            className
          )}
          {...props}
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(
              (prev) => !prev
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-primary"
          aria-label={
            showPassword
              ? "Hide password"
              : "Show password"
          }
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName =
  "PasswordInput";

export default PasswordInput;