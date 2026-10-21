"use client";

import Link from "next/link";
import { useActionState } from "react";
import { btnPrimary } from "@/components/ui";
import { register } from "@/lib/auth/actions";
import type { AuthState } from "@/lib/auth/validation";
import { AuthField } from "./AuthField";

export function RegisterForm() {
  const [state, formAction, pending] = useActionState<AuthState, FormData>(register, {});

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <AuthField label="Full name" name="name" autoComplete="name"
        defaultValue={state.values?.name} error={state.errors?.name} />
      <AuthField label="Email" name="email" type="email" autoComplete="email"
        defaultValue={state.values?.email} error={state.errors?.email} />
      <AuthField label="Password" name="password" type="password" autoComplete="new-password"
        error={state.errors?.password} />
      <AuthField label="Confirm password" name="confirmPassword" type="password" autoComplete="new-password"
        error={state.errors?.confirmPassword} />

      <button type="submit" disabled={pending} className={`${btnPrimary} min-h-12 w-full`}>
        {pending ? "Creating account…" : "Create account"}
      </button>

      <p className="text-center text-body-sm text-ink-soft">
        Already have an account?{" "}
        <Link href="/login" className="text-accent underline">Sign in</Link>
      </p>
    </form>
  );
}