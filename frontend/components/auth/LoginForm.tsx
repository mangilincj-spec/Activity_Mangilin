"use client";

import Link from "next/link";
import { useActionState } from "react";
import { btnPrimary } from "@/components/ui";
import { login } from "@/lib/auth/actions";
import type { AuthState } from "@/lib/auth/validation";
import { AuthField } from "./AuthField";

export function LoginForm() {
  const [state, formAction, pending] = useActionState<AuthState, FormData>(login, {});

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <AuthField label="Email" name="email" type="email" autoComplete="email"
        defaultValue={state.values?.email} error={state.errors?.email} />
      <AuthField label="Password" name="password" type="password" autoComplete="current-password"
        error={state.errors?.password} />

      <button type="submit" disabled={pending} className={`${btnPrimary} min-h-12 w-full`}>
        {pending ? "Signing in…" : "Sign in"}
      </button>

      <p className="text-center text-body-sm text-ink-soft">
        No account yet?{" "}
        <Link href="/register" className="text-accent underline">Create one</Link>
      </p>
    </form>
  );
}