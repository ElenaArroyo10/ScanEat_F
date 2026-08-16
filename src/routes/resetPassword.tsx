import { createFileRoute } from "@tanstack/react-router";
import ResetPasswordForm from "../components/authentication/ResetPasswordForm";

export const Route = createFileRoute("/resetPassword")({
	component: ResetPasswordPage,
});

function ResetPasswordPage() {
	return <ResetPasswordForm />;
}