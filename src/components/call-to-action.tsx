import { Button } from "@/components/ui/button";
import { Mail, SendHorizonal } from "lucide-react";

export default function CallToAction() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">
						Let us help you
					</h2>
					<p className="mt-4">Sign up for Basicrum</p>

					<form
						action="https://api.web3forms.com/submit"
						method="POST"
						className="mx-auto mt-10 max-w-sm lg:mt-12"
					>
						<div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
							<Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

							<input
								placeholder="Your mail address"
								className="h-14 w-full bg-transparent pl-12 focus:outline-none"
								type="email"
							/>
							<input
								type="hidden"
								name="access_key"
								value="53f82be5-9942-437a-bc85-34cedca69437"
							/>
							<input
								type="checkbox"
								name="botcheck"
								className="hidden"
								style={{ display: "none" }}
							/>

							<div className="md:pr-1.5 lg:pr-0">
								<Button aria-label="submit" className="rounded-(--radius)">
									<span className="hidden md:block">Get Started</span>
									<SendHorizonal
										className="relative mx-auto size-5 md:hidden"
										strokeWidth={2}
									/>
								</Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
