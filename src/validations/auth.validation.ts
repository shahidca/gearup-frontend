import { z } from "zod";

/* ======================================================
   Login
====================================================== */

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email."),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters."),
});

export type TLoginForm = z.infer<
  typeof loginSchema
>;

/* ======================================================
   Register
====================================================== */

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters.")
      .max(60, "Name is too long."),

    email: z
      .string()
      .email("Please enter a valid email."),

    phone: z
      .string()
      .min(11, "Phone number is required."),

    address: z
      .string()
      .min(3, "Address is required."),

    role: z.enum([
      "CUSTOMER",
      "PROVIDER",
    ]),

    profileImage: z
      .string()
      .optional()
      .or(z.literal("")),

    password: z
      .string()
      .min(
        6,
        "Password must be at least 6 characters."
      )
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
        "Password must contain uppercase, lowercase and a number."
      ),

    confirmPassword: z.string(),
  })
  .refine(
    (data) =>
      data.password ===
      data.confirmPassword,
    {
      message:
        "Passwords do not match.",
      path: ["confirmPassword"],
    }
  );

export type TRegisterForm = z.infer<
  typeof registerSchema
>;