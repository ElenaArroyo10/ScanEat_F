import { IoCameraOutline } from "react-icons/io5";
import { Link, useNavigate } from "@tanstack/react-router";

function ProfileSettingsForm() {
	const navigate = useNavigate();

	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
	event.preventDefault();

	navigate({ to: "/dashboard" });
}

	return (
		<main className="min-h-screen bg-brand-mint">
			<div className="h-20 bg-brand-mint" />

			<section className="min-h-[calc(100vh-5rem)] rounded-t-[40px] bg-white px-6 py-10">
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
							type="text"
							placeholder="Nombre"
							className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-text-primary outline-none focus:border-2 focus:border-brand-brown"
						/>
					</div>

					<div className="mt-5">
						<input
							id="lastName"
							type="text"
							placeholder="Apellido"
							className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-text-primary outline-none focus:border-2 focus:border-brand-brown"
						/>
					</div>

					<div className="mt-5">
						<input
							id="email"
							type="email"
							placeholder="Correo electrónico"
							className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-text-primary outline-none focus:border-2 focus:border-brand-brown"
						/>
					</div>

					<div>
						<Link
							to="/dashboard"
							className="mt-16 block w-full cursor-pointer rounded-lg border border-brand-mint-dark px-4 py-3 text-center text-base font-bold text-brand-mint-dark hover:bg-brand-mint-dark/10"
						>
							Cancelar cambios
						</Link>

						<button
							type="submit"
							className="mt-6 w-full cursor-pointer rounded-lg bg-brand-mint-dark px-4 py-3 text-base font-bold text-white hover:bg-brand-mint-dark/90"
						>
							Guardar cambios
						</button>
					</div>
				</form>
			</section>
		</main>
	);
}

export default ProfileSettingsForm;