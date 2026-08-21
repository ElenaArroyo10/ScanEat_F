import { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Link, useNavigate } from "@tanstack/react-router";

function ChangePasswordForm() {
	const navigate = useNavigate();

	const [showCurrentPassword, setShowCurrentPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		setError("");

		if (!newPassword.trim()) {
			setError("Ingresa una nueva contraseña.");
			return;
		}

		if (newPassword.length < 8) {
			setError("La contraseña debe tener al menos 8 caracteres.");
			return;
		}

		if (!/\d/.test(newPassword)) {
			setError("La contraseña debe contener al menos un número.");
			return;
		}

		if (!/[!@#$%^&*(),.?":{}|<>_\-\\[\]'/+=;`~]/.test(newPassword)) {
			setError("La contraseña debe contener al menos un símbolo.");
			return;
		}

		if (!confirmPassword.trim()) {
			setError("Confirma tu nueva contraseña.");
			return;
		}

		if (newPassword !== confirmPassword) {
			setError("Las contraseñas no coinciden.");
			return;
		}

		navigate({ to: "/changePasswordVerification" });
	}

	return (
		<main className="min-h-screen bg-brand-white">
			<div className="h-20 bg-brand-mint" />

			<section className="-mt-10 min-h-[calc(100vh-5rem)] rounded-t-[40px] bg-white px-6 py-10">
				<form
					className="mx-auto flex w-full max-w-sm flex-col"
					onSubmit={handleSubmit}
				>
					<h1 className="text-center text-[32px] font-bold text-brand-mint-dark">
						Cambiar contraseña
					</h1>

					{/* Contraseña actual */}
					<div className="relative mt-10">
						<input
							id="currentPassword"
							name="currentPassword"
							type={showCurrentPassword ? "text" : "password"}
							placeholder="Contraseña actual"
							className="w-full rounded-lg border border-border px-4 py-3 pr-12 text-text-primary outline-none focus:border-2 focus:border-brand-brown"
						/>

						<button
							type="button"
							onClick={() =>
								setShowCurrentPassword(!showCurrentPassword)
							}
							className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-brand-mint-dark"
						>
							{showCurrentPassword ? <ImEye /> : <ImEyeBlocked />}
						</button>
					</div>

					{/* Nueva contraseña */}
					<div className="relative mt-5">
						<input
							id="newPassword"
							name="newPassword"
							type={showNewPassword ? "text" : "password"}
							placeholder="Nueva contraseña"
							value={newPassword}
							onChange={(event) => {
								setNewPassword(event.target.value);
								setError("");
							}}
							className="w-full rounded-lg border border-border px-4 py-3 pr-12 text-text-primary outline-none focus:border-2 focus:border-brand-brown"
						/>

						<button
							type="button"
							onClick={() =>
								setShowNewPassword(!showNewPassword)
							}
							className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-brand-mint-dark"
						>
							{showNewPassword ? <ImEye /> : <ImEyeBlocked />}
						</button>
					</div>

					{/* Confirmar contraseña */}
					<div className="relative mt-5">
						<input
							id="confirmPassword"
							name="confirmPassword"
							type={showConfirmPassword ? "text" : "password"}
							placeholder="Confirmar contraseña"
							value={confirmPassword}
							onChange={(event) => {
								setConfirmPassword(event.target.value);
								setError("");
							}}
							className="w-full rounded-lg border border-border px-4 py-3 pr-12 text-text-primary outline-none focus:border-2 focus:border-brand-brown"
						/>

						<button
							type="button"
							onClick={() =>
								setShowConfirmPassword(!showConfirmPassword)
							}
							className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-brand-mint-dark"
						>
							{showConfirmPassword ? <ImEye /> : <ImEyeBlocked />}
						</button>
					</div>

					{error && (
						<p className="mt-4 text-center text-sm text-red-600">
							{error}
						</p>
					)}

					<button
						type="submit"
						className="mt-12 w-full cursor-pointer rounded-lg bg-brand-mint-dark px-4 py-3 text-center text-base font-bold text-white hover:bg-brand-mint-dark/90"
					>
						Cambiar contraseña
					</button>

					<Link
						to="/profileSettings"
						className="mt-6 block w-full cursor-pointer rounded-lg border border-brand-mint-dark px-4 py-3 text-center text-base font-bold text-brand-mint-dark hover:bg-brand-mint-dark/10"
					>
						Cancelar
					</Link>
				</form>
			</section>
		</main>
	);
}

export default ChangePasswordForm;