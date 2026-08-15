import { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Link } from "@tanstack/react-router";

function RegisterForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [role, setRole] = useState("");

	return (
		<main className="min-h-screen bg-white">
			<div className="h-20 bg-brand-mint" />

			<section className="-mt-10 min-h-[calc(100vh-11rem)] rounded-t-[40px] bg-white px-6 py-10">
				<form className="mx-auto flex w-full max-w-sm flex-col gap-5">

					<h1 className="text-center text-2xl font-bold text-brand-mint-dark">
						Crear cuenta
					</h1>

					<input
						id="firstName"
						type="text"
						placeholder="Nombre"
						className="w-full rounded-lg border border-border px-4 py-3 focus:border-2 focus:border-brand-brown focus:outline-none"
					/>

					<input
						id="lastName"
						type="text"
						placeholder="Apellido"
						className="w-full rounded-lg border border-border px-4 py-3 focus:border-2 focus:border-brand-brown focus:outline-none"
					/>

					<input
						id="email"
						type="email"
						placeholder="Correo electrónico"
						className="w-full rounded-lg border border-border px-4 py-3 focus:border-2 focus:border-brand-brown focus:outline-none"
					/>

					<div className="relative">
						<input
							id="password"
							type={showPassword ? "text" : "password"}
							placeholder="Contraseña"
							className="w-full rounded-lg border border-border px-4 py-3 pr-12 focus:border-2 focus:border-brand-brown focus:outline-none"
						/>

						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-brand-mint-dark"
							aria-label={
								showPassword
									? "Ocultar contraseña"
									: "Mostrar contraseña"
							}
						>
							{showPassword ? <ImEye /> : <ImEyeBlocked />}
						</button>
					</div>

					<div className="relative">
						<input
							id="confirmPassword"
							type={showConfirmPassword ? "text" : "password"}
							placeholder="Confirmar contraseña"
							className="w-full rounded-lg border border-border px-4 py-3 pr-12 focus:border-2 focus:border-brand-brown focus:outline-none"
						/>

						<button
							type="button"
							onClick={() =>
								setShowConfirmPassword(!showConfirmPassword)
							}
							className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-brand-mint-dark"
							aria-label={
								showConfirmPassword
									? "Ocultar contraseña"
									: "Mostrar contraseña"
							}
						>
							{showConfirmPassword ? <ImEye /> : <ImEyeBlocked />}
						</button>
					</div>

					<select
						id="role"
						value={role}
						onChange={(event) => setRole(event.target.value)}
						className="w-full cursor-pointer rounded-lg border border-border bg-white px-4 py-3 text-text-primary focus:border-2 focus:border-brand-brown focus:outline-none"
					>
						<option value="" disabled>
							Tipo de empleado
						</option>

						<option value="waiter">
							Mesero
						</option>

						<option value="cook">
							Cocinero
						</option>

						<option value="owner">
							Propietario
						</option>
					</select>

					<input
						id="authorizationCode"
						type="text"
						placeholder="Código de autorización"
						className="w-full rounded-lg border border-border px-4 py-3 focus:border-2 focus:border-brand-brown focus:outline-none"
					/>

					<button
						type="submit"
						className="w-full cursor-pointer rounded-lg bg-brand-mint-dark px-4 py-3 text-white"
					>
						Crear cuenta
					</button>

					<p className="text-center text-text-primary">
						¿Ya tienes una cuenta?{" "}
                        <Link
                            to="/login"
                            className="text-brand-mint-dark hover:underline">
                            Inicia sesión
                        </Link>
					</p>
				</form>
			</section>
		</main>
	);
}

export default RegisterForm;