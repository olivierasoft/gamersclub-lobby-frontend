import { FaRegEnvelope } from "react-icons/fa";

import light from "../../../assets/light.svg";
import { RcInput } from "../../../components/RcInput";

export function FormBody() {
	return (
		<form className="font-sora flex grow flex-col items-center justify-center p-6">
			<div className="w-540px h-14 p-6 text-2xl text-white">
				<h1 className="top-6 font-bold">Junte-se e compita hoje</h1>
			</div>
			<div className="w-540px h-14 p-6 text-2xl text-white">
				<h1 className="font-bold">Iniciar sessão</h1>
			</div>
			<div className="w-540px h-657px p-6">
				<div
					className="flex justify-between rounded-md border-l-2 
					border-blue-400 bg-white/5 py-3 text-white"
				>
					<img className="m-3"
						src={light} />
					<div className="rounded-sm">
						<h2 className="font-archivo mb-1 text-sm font-bold text-blue-600">
							Sua conta agora é GC ID!
						</h2>
						<p className="font-archivo text-xs leading-relaxed tracking-widest">
							Pensando em uma melhor experiência para você, o seu jeito de fazer
							login e criar conta mudou! Se você já tem uma conta GC, faça login
							usando e-mail e senha, Steam ou Facebook.
						</p>
					</div>
				</div>
				<RcInput
					icon={FaRegEnvelope}
					title="E-mail"
					required={true}
					placeholder="Seu e-mail de cadastro"
					value="Valor"
				></RcInput>
			</div>
		</form>
	);
}
