export type FieldErrors = Partial<Record<"name" | "email" | "password" | "confirmPassword", string>>;

export type AuthState = {
  errors?: FieldErrors;
  values?: { name?: string; email?: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLogin(email: string, password: string): FieldErrors {
  const errors: FieldErrors = {};
  if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";
  if (!password) errors.password = "Enter your password.";
  return errors;
}

export function validateRegister(name: string, email: string, password: string, confirmPassword: string): FieldErrors {
  const errors: FieldErrors = {};
  if (name.length < 2) errors.name = "Enter your full name.";
  if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";
  if (password.length < 8) errors.password = "Use at least 8 characters.";
  if (confirmPassword !== password) errors.confirmPassword = "Passwords don't match.";
  return errors;
}