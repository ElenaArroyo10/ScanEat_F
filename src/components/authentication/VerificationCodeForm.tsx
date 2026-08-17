import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "@tanstack/react-router";
import { useSearch } from "@tanstack/react-router";
function VerificationCodeForm() {
	const [code, setCode] = useState(["", "", "", "", "", ""]);
const {email}=useSearch({from:"/accountVerification",});

	function handleChange(index: number, value: string) {
		// Solo permite un dígito
		const digit = value.replace(/\D/g, "").slice(0, 1);

		const newCode = [...code];
		newCode[index] = digit;

		setCode(newCode);

		// Pasar automáticamente al siguiente input
		if (digit && index < 5) {
			document.getElementById(`code-${index + 1}`)?.focus();
		}
	}

	function handleKeyDown(
		index: number,
		event: React.KeyboardEvent<HTMLInputElement>,
	) {
		// Si presiona Backspace y el campo está vacío,
		// vuelve al campo anterior
		if (event.key === "Backspace" && !code[index] && index > 0) {
			document.getElementById(`code-${index - 1}`)?.focus();
		}
	}

	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		const verificationCode = code.join("");

		console.log("Código ingresado:", verificationCode);
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
							Código de Verificación
						</h1>

						<p className="text-center text-text-primary">
							Hemos enviado un código de 6 dígitos a{" "}
							<span className="text-brand-mint-dark">
								{email}
							</span>
						</p>
					</div>

					{/* Código */}
					<div className="mt-14 flex justify-center gap-2">
						{code.map((digit, index) => (
							<input
								key={index}
								id={`code-${index}`}
								type="text"
								inputMode="numeric"
								maxLength={1}
								value={digit}
								onChange={(event) =>
									handleChange(index, event.target.value)
								}
								onKeyDown={(event) =>
									handleKeyDown(index, event)
								}
								className="h-12 w-10 rounded-lg border border-border text-center text-lg font-semibold text-text-primary outline-none focus:border-2 focus:border-brand-brown"
								aria-label={`Dígito ${index + 1}`}
							/>
						))}
					</div>

					<Link
						to="/resetPassword"
						className="text-center mt-14 w-full cursor-pointer rounded-lg bg-brand-mint-dark px-4 py-3 text-white"
					>
						Verificar
					</Link>

					<Link
						to="/forgotPassword"
						className="mx-auto mt-14 cursor-pointer text-brand-mint"
						aria-label="Volver a recuperar contraseña"
					>
						<BsFillArrowLeftCircleFill className="h-10 w-10" />
					</Link>
				</form>
			</section>
		</main>
	);
}

export default VerificationCodeForm;