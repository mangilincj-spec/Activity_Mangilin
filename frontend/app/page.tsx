        import Link from "next/link";

export default function Home() {
return (
<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
<main className="flex w-full max-w-md flex-col items-center gap-8 px-6 py-32 text-center">
<div className="flex flex-col gap-3">
<h1 className="...">Welcome</h1>
<p className="...">Sign in to your account or create a new one.</p>
</div>

<div className="flex w-full flex-col gap-4 sm:flex-row">
<Link href="/login" className="...">Login</Link>
<Link href="/register" className="...">Register</Link>
</div>
</main>
</div>
);
}