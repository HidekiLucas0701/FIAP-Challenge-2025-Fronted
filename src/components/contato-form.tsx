import { useState } from "react";

export function ContatoForm() {
    const [mensagem, setMensagem] = useState("");
    const [enviado, setEnviado] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setEnviado(true);
        setMensagem("");
        setTimeout(() => setEnviado(false), 3000);
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl mx-auto border border-cyan-100 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-cyan-700 mb-2 text-center">Envie uma pergunta para nós</h2>
            <textarea className="border border-cyan-200 rounded-lg p-3 w-full min-h-[100px] text-gray-700 focus:outline-cyan-400"
             placeholder="Digite sua mensagem..." value={mensagem} onChange={e => setMensagem(e.target.value)} required/>

            <button type="submit" className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold px-6 py-2 
            rounded-full shadow-md hover:scale-105 transition-all">Enviar</button>

            {enviado && (
                <div className="text-green-600 text-center font-semibold mt-2 animate-pulse">
                    Mensagem enviada com sucesso!
                </div>
            )}
        </form>
    );
}