import { FormBody } from "./components/FormBody";
import { Navbar } from "./components/Navbar";

export function Login() {
	return (
		<div className="bg-login-gamersclub flex h-screen flex-col bg-cover bg-center">
			<Navbar />
			<FormBody />
		</div>
	);
}
