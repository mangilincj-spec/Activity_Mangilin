"use server";

import { redirect } from "next/navigation";
import { validateLogin, validateRegister, type AuthState } from "./validation";

export async function login(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const errors = validateLogin(email, password);
  if (Object.keys(errors).length) return { errors, values: { email } };

  // TODO: send email + password to the backend API and set a session cookie
  redirect("/");
}

export async function register(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  const errors = validateRegister(name, email, password, confirmPassword);
  if (Object.keys(errors).length) return { errors, values: { name, email } };

  // TODO: create the user through the backend API
  redirect("/login");
}