import {Navbar} from "./components/Navbar";
import {FormBody} from "./components/FormBody";

export function Login() {
	return (
		<div className="flex flex-col h-screen bg-cover bg-center bg-login-gamersclub">
			<Navbar/>
			<FormBody/>
		</div>
	);
}