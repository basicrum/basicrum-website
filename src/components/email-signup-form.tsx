"use client";

import { useState, type FormEvent } from "react";
import { Mail, SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

//temporary, will remove this provider later
const WEB3FORMS_ACCESS_KEY = "53f82be5-9942-437a-bc85-34cedca69437";

interface EmailSignupFormProps {
	size?: "sm" | "lg";
	className?: string;
}

export function EmailSignupForm({
	size = "sm",
	className,
}: EmailSignupFormProps) {
	const [email, setEmail] = useState("");
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		if (email.trim() === "") {
			event.preventDefault();
			setError("Please enter your email address.");
		}
	};

	const isLarge = size === "lg";

	return (
		<form
			action="https://api.web3forms.com/submit"
			method="POST"
			onSubmit={handleSubmit}
			className={cn("mx-auto max-w-sm", className)}
			noValidate
		>
			<div
				className={cn(
					"bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center border shadow shadow-zinc-950/5 has-[input:focus]:ring-2",
					isLarge
						? "rounded-[calc(var(--radius)+0.75rem)] pr-3"
						: "rounded-[calc(var(--radius)+0.5rem)] pr-2",
				)}
			>
				<Mail
					className={cn(
						"pointer-events-none absolute inset-y-0 my-auto",
						isLarge ? "text-caption left-5 size-5" : "left-4 size-4",
					)}
				/>

				<input
					placeholder="Your mail address"
					className={cn(
						"w-full bg-transparent pl-12 focus:outline-none",
						isLarge ? "h-14" : "h-12",
					)}
					type="email"
					name="email"
					value={email}
					onChange={(event) => {
						setEmail(event.target.value);
						if (error) setError(null);
					}}
					aria-invalid={error ? true : undefined}
					aria-describedby={error ? "email-signup-error" : undefined}
				/>

				<input
					type="hidden"
					name="access_key"
					value={WEB3FORMS_ACCESS_KEY}
				/>
				<input
					type="checkbox"
					name="botcheck"
					className="hidden"
					style={{ display: "none" }}
					tabIndex={-1}
					aria-hidden="true"
				/>

				<div className="md:pr-1.5 lg:pr-0">
					<Button
						aria-label="submit"
						type="submit"
						size={isLarge ? "default" : "sm"}
						variant={isLarge ? "default" : "ghost"}
						className="rounded-(--radius)"
					>
						<span className="hidden md:block">Get Started</span>
						<SendHorizonal
							className="relative mx-auto size-5 md:hidden"
							strokeWidth={2}
						/>
					</Button>
				</div>
			</div>

			{error ? (
				<p
					id="email-signup-error"
					role="alert"
					className="mt-2 pl-2 text-left text-sm text-red-600 dark:text-red-400"
				>
					{error}
				</p>
			) : null}
		</form>
	);
}
