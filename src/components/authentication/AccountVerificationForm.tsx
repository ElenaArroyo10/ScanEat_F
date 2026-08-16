import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "@tanstack/react-router";

function AccountVerificationForm() {
	const [code, setCode] = useState(["", "", "", "", "", ""]);

	function handleChange(index: number, value: string) {

        const digit = value.replace(/\D/g, "").slice(0, 1);

		const newCode = [...code];
		newCode[index] = digit;

		setCode(newCode);

		if (digit && index < 5) {
			document.getElementById(`code-${index + 1}`)?.focus();
		}
	}

	function handleKeyDown(
		index: number,
		event: React.KeyboardEvent<HTMLInputElement>,
	) {

		if (event.key === "Backspace" && !code[index] && index > 0) {
			document.getElementById(`code-${index - 1}`)?.focus();
		}
	}

	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		const verificationCode = code.join("");

		console.log("Código de verificación:", verificationCode);
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
						<h1 className="text-center text-2xl font-bold text-brand-mint-dark">
							Verificar cuenta
						</h1>

						<p className="text-center text-text-primary">
							Hemos enviado un código de 6 dígitos a{" "}
							<span className="text-brand-mint-dark">
								correo@gmail.com
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

					{/* Botón */}
					<Link
						to="/accountSuccess"
						className="mt-14 w-full cursor-pointer rounded-lg bg-brand-mint-dark px-4 py-3 text-center text-white"
					>
						Verificar
					</Link>

					{/* Volver al registro */}
					<Link
						to="/register"
						className="mx-auto mt-14 cursor-pointer text-brand-mint"
						aria-label="Volver al registro"
					>
						<BsFillArrowLeftCircleFill className="h-10 w-10" />
					</Link>
				</form>
			</section>
		</main>
	);
}

export default AccountVerificationForm;