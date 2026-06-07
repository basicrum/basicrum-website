import { EmailSignupForm } from "@/components/email-signup-form";

export default function CallToAction() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">
						Let us help you
					</h2>
					<p className="mt-4">Sign up for Basicrum</p>

					<EmailSignupForm size="lg" className="mt-10 lg:mt-12" />
				</div>
			</div>
		</section>
	);
}
