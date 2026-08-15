import { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "@tanstack/react-router";

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
	event.preventDefault();

	console.log(email);
	console.log(password);
}

	return (
		<main className="min-h-screen bg-white">
			<div className="h-48 bg-brand-mint" />

			<section className="-mt-10 min-h-[calc(100vh-11rem)] rounded-t-[40px] bg-white px-6 py-10">
                <form
                    onSubmit={handleSubmit}
                    className="mx-auto flex w-full max-w-sm flex-col gap-5"
                    
                >
					<h1 className="text-center text-2xl font-bold text-brand-mint-dark">
						¡Bienvenido de nuevo!
					</h1>

					<input
						id="email"
						type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
						className="w-full rounded-lg border border-border px-4 py-3 focus:border-2 focus:border-brand-brown focus:outline-none"
					/>

					<div className="flex flex-col gap-1">
						<div className="relative">
							<input
								id="password"
								type={showPassword ? "text" : "password"}
                                placeholder="Contraseña"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
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

						<button
							type="button"
							className="mb-2 cursor-pointer hover:underline self-end text-sm text-text-primary"
						>
							¿Olvidaste tu contraseña?
						</button>
					</div>

					<button
						type="submit"
						className="cursor-pointer w-full rounded-lg bg-brand-mint-dark px-4 py-3 text-white"
					>
						Iniciar sesión
					</button>

					<h3 className="mt-5 text-center text-text-primary">
						o continuar con
					</h3>

					<div className="flex justify-center gap-15 mb-5">
						<button
							type="button"
							aria-label="Iniciar sesión con Google"
							className="cursor-pointer"
						>
							<FcGoogle className="h-10 w-10" />
						</button>

						<button
							type="button"
							aria-label="Iniciar sesión con Facebook"
							className="cursor-pointer"
						>
							<FaFacebook className="h-10 w-10 text-[#1877F2]" />
						</button>
					</div>

					<h3 className="text-center text-text-primary">
						¿No tienes una cuenta?{" "}
                        <Link
                            to="/register"
                            className="text-brand-mint-dark hover:underline">
                            Regístrate aquí
                        </Link>
					</h3>
				</form>
			</section>
		</main>
	);
}

export default LoginForm;