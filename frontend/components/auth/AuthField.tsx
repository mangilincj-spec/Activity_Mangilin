import type { ComponentProps } from "react";

type Props = ComponentProps<"input"> & { label: string; name: string; error?: string };

export function AuthField({ label, name, error, ...props }: Props) {
  const errorId = `${name}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-display text-label-md text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="h-12 w-full rounded-xl border border-line bg-card px-4 text-body-md text-ink outline-none focus:border-accent focus:ring-4 focus:ring-accent/15 aria-invalid:border-red-500"
        {...props}
      />
      {error && (
        <p id={errorId} className="text-body-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}