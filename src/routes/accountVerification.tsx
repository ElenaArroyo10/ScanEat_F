import { createFileRoute } from "@tanstack/react-router";
import AccountVerificationForm from "../components/authentication/AccountVerificationForm";

export const Route = createFileRoute("/accountVerification")({
	component: AccountVerificationPage,
});

function AccountVerificationPage() {
	return <AccountVerificationForm />;
}