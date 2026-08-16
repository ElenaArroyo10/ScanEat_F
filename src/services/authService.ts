//Este archivo contiene funciones para interactuar con la API de autenticación



type ApiError = {
    message?: string;
    [key: string]: unknown;
};

//Es la url base de la API de autenticación
const AUTH_BASE_URL = "http://localhost:3000/api/auth";

//Función para registrar un nuevo usuario
export const register = async (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    code: string,
    role_id: string | number,
) => {
    const response = await fetch(`${AUTH_BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            code,
            role_id,
        }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw data as ApiError;
    }

    return data as {
        message: string;
        token?: string;
        user?: Record<string, unknown>;
        verificationCode?: string;
    };
};

//Función para verificar el correo electrónico del usuario
export const verifyEmail = async (email: string, code: string) => {
    const response = await fetch(`${AUTH_BASE_URL}/verify-email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw data as ApiError;
    }

    return data as { message: string };
};

//Función para reenviar el código de verificación al correo electrónico del usuario
export const resendVerificationCode = async (email: string) => {
    const response = await fetch(`${AUTH_BASE_URL}/resend-verification-code`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw data as ApiError;
    }

    return data as { message: string; verificationCode?: string };
};

//Aqui agregas la función para iniciar sesión