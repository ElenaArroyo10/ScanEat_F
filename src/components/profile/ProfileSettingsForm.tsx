import { IoCameraOutline } from "react-icons/io5";
import { Link, useNavigate } from "@tanstack/react-router";
import { editProfile } from "../../services/authService";
import { useState } from "react";

function ProfileSettingsForm() {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		setError("");

		const formData = new FormData(event.currentTarget);
		const firstName = formData.get("firstName") as string;
		const lastName = formData.get("lastName") as string;
		const email = formData.get("email") as string;
		setIsSubmitting(true);

		try {
			await editProfile(firstName, lastName, email);
			navigate({ to: "/dashboard" });
		} catch (error) {
			console.error("Error updating profile:", error);
			setError("Failed to update profile. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
}

	return (
		<main className="min-h-screen bg-brand-white">
			<div className="h-20 bg-brand-mint" />

			<section className="-mt-10 min-h-[calc(100vh-5rem)] rounded-t-[40px] bg-white px-6 py-10">
				<form
					onSubmit={handleSubmit}
					className="mx-auto flex w-full max-w-sm flex-col"
				> 
					<h1 className="text-center text-[32px] font-bold text-brand-mint-dark">
						Profile Settings
					</h1>

					<div className="mt-10 flex justify-center">
						<div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-mint">
							<IoCameraOutline className="h-15 w-15 text-white" />
						</div>
					</div>

					<div className="mt-10">
						<input
							id="firstName"
							name="firstName"
							type="text"
							required
							placeholder="Nombre"
							className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-text-primary outline-none focus:border-2 focus:border-brand-brown"
						/>
					</div>

					<div className="mt-5">
						<input
							id="lastName"
							name="lastName"
							type="text"
							required
							placeholder="Apellido"
							className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-text-primary outline-none focus:border-2 focus:border-brand-brown"
						/>
					</div>

					<div className="mt-5">
						<input
							id="email"
							name="email"
							type="email"
							required
							placeholder="Correo electrónico"
							className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-text-primary outline-none focus:border-2 focus:border-brand-brown"
						/>
                    </div>
                    
                    <div className="mt-5">
						<Link
							to="/dashboard"
							className="mt-2 block w-full cursor-pointer rounded-lg border border-brand-mint-dark px-4 py-3 text-center text-base font-bold text-brand-mint-dark hover:bg-brand-mint-dark/10"
						>
							Cambiar contraseña
						</Link>
					</div>

					<div>
						{error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}

						<Link
							to="/dashboard"
							className="mt-16 block w-full cursor-pointer rounded-lg border border-brand-mint-dark px-4 py-3 text-center text-base font-bold text-brand-mint-dark hover:bg-brand-mint-dark/10"
						>
							Cancelar cambios
						</Link>

						<button
							type="submit"
							disabled={isSubmitting}
							className="mt-6 w-full cursor-pointer rounded-lg bg-brand-mint-dark px-4 py-3 text-base font-bold text-white hover:bg-brand-mint-dark/90"
						>
							{isSubmitting ? "Guardando..." : "Guardar cambios"}
						</button>
					</div>
				</form>
			</section>
		</main>
	);
}

export default ProfileSettingsForm;