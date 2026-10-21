import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <>
      <h1 className="font-display text-headline-sm text-ink">Welcome back</h1>
      <p className="mt-2 mb-8 text-body-md text-ink-soft">Sign in to your account.</p>
      <LoginForm />
    </>
  );
}