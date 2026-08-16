import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "@tanstack/react-router";

function ResetPasswordForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState("");

	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log("Nueva contraseña:", password);
	}

	return (
		<main className="min-h-screen bg-white">
			<section className="mt-38 min-h-[calc(100vh-11rem)] rounded-t-[40px] bg-white px-6 py-10">
				<form
					onSubmit={handleSubmit}
					className="mx-auto flex w-full max-w-sm flex-col"
				>
					{/* Título y descripción */}
					<div className="flex flex-col gap-4">
						<h1 className="text-center font-bold text-brand-mint-dark">
							Cambiar contraseña
						</h1>

						<p className="text-center text-text-primary">
							Ingresa tu nueva contraseña
						</p>
					</div>

					{/* Contraseña y requisitos */}
					<div className="mt-14 flex flex-col gap-4">
						<div className="relative">
							<input
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="Nueva contraseña"
								value={password}
								onChange={(event) =>
									setPassword(event.target.value)
								}
								className="w-full rounded-lg border border-border px-4 py-3 pr-12 focus:border-2 focus:border-brand-brown focus:outline-none"
							/>

							<button
								type="button"
								onClick={() =>
									setShowPassword(!showPassword)
								}
								className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-brand-mint-dark"
								aria-label={
									showPassword
										? "Ocultar contraseña"
										: "Mostrar contraseña"
								}
							>
								{showPassword ? (
									<ImEye />
								) : (
									<ImEyeBlocked />
								)}
							</button>
						</div>

						{/* Requisitos */}
						<div className="flex flex-col gap-4">
							<div className="flex items-center justify-center gap-2">
								<FaRegCheckCircle className="text-brand-mint-dark"/>

								<p className="text-text-primary">
									Tu contraseña debe contener:
								</p>
							</div>

							<div className="mx-auto flex w-fit flex-col gap-4 text-left text-text-primary">
								<p>Al menos 8 caracteres</p>
								<p>Al menos un número</p>
								<p>Al menos un símbolo</p>
							</div>
						</div>
					</div>


                    <Link
						to="/passwordSuccess"
						className="mt-14 w-full cursor-pointer whitespace-nowrap rounded-lg bg-brand-mint-dark px-4 py-3 text-center text-white"
					>
						Cambiar contraseña
					</Link>


                    <Link
						to="/verificationCode"
						className="mx-auto mt-14 cursor-pointer text-brand-mint"
						aria-label="Volver al código de verificación"
					>
						<BsFillArrowLeftCircleFill className="h-10 w-10" />
					</Link>
				</form>
			</section>
		</main>
	);
}

export default ResetPasswordForm;