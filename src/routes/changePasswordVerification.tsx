import { createFileRoute } from "@tanstack/react-router";
import ChangePasswordVerificationForm from "../components/profile/ChangePasswordVerificationForm";

export const Route = createFileRoute("/changePasswordVerification")({
	component: ChangePasswordVerificationPage,
});

function ChangePasswordVerificationPage() {
	return <ChangePasswordVerificationForm />;
}