export const register = async (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    code: string,
    role_id: string | number
) => {
    const response = await fetch("http://localhost:3000/api/auth/register", {
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

    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data;
};