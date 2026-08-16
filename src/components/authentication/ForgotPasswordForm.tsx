import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "@tanstack/react-router";

function ForgotPasswordForm() {
	return (
		<main className="min-h-screen bg-white">
			<div className="mt-38" />

			<section className="min-h-[calc(100vh-11rem)] rounded-t-[40px] bg-white px-6 py-10">
				<form className="mx-auto flex w-full max-w-sm flex-col">

					{/* Título y descripción */}
					<div className="flex flex-col gap-4">
						<h1 className="text-center font-bold text-brand-mint-dark">
							Recuperar contraseña
						</h1>

						<p className="text-center text-text-primary">
							Ingresa tu correo electrónico para recuperar tu contraseña.
						</p>
					</div>

					{/* Correo y botón */}
					<div className="mt-14 flex flex-col gap-14">
						<input
							id="email"
							type="email"
							placeholder="Correo electrónico"
							className="w-full rounded-lg border border-border px-4 py-3 focus:border-2 focus:border-brand-brown focus:outline-none"
						/>

						<Link
							to="/verificationCode"
							className="w-full cursor-pointer rounded-lg bg-brand-mint-dark px-4 py-3 text-center text-white"
						>
							Recuperar contraseña
						</Link>
					</div>

					{/* Volver al Login */}
					<Link
						to="/login"
						className="mx-auto mt-14 cursor-pointer text-brand-mint"
						aria-label="Volver al inicio de sesión"
					>
						<BsFillArrowLeftCircleFill className="h-10 w-10" />
					</Link>

				</form>
			</section>
		</main>
	);
}

export default ForgotPasswordForm;