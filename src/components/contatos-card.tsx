export function ContatoCard() {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl mx-auto border border-cyan-100 flex flex-col items-center gap-4">
            <h2 className="text-2xl font-extrabold text-cyan-700 mb-2 text-center">Entre em contato conosco</h2>
            <div className="flex flex-col gap-2 w-full text-gray-700 text-base">
                <div className="flex items-center gap-2">
                    <span className="font-bold">Telefone:</span>
                    <a href="tel:+550xx112661-0000" className="text-cyan-600 hover:underline">(0xx11) 2661-0000</a>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">E-mail:</span>
                    <a href="mailto:contato@olamedico.com" className="text-cyan-600 hover:underline">contato@olamedico.com</a>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Endereço:</span>
                    <span>Av. Paulista, 1106 - São Paulo, SP</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">WhatsApp:</span>
                    <a href="https://wa.me/551935212121" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">(19) 3521-2121</a>
                </div>
            </div>
        </div>
    );
}