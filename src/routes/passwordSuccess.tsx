import { createFileRoute } from "@tanstack/react-router";
import PasswordSuccessForm from "../components/authentication/PasswordSuccessForm";

export const Route = createFileRoute("/passwordSuccess")({
	component: PasswordSuccessPage,
});

function PasswordSuccessPage() {
	return <PasswordSuccessForm />;
}