import { createFileRoute } from "@tanstack/react-router";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";

export const Route = createFileRoute("/changePassword")({
	component: ChangePasswordPage,
});

function ChangePasswordPage() {
	return <ChangePasswordForm />;
}