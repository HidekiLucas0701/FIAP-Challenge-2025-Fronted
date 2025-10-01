export function Footer() {
    return (
        <footer className="bg-gray-100 shadow-inner border-t border-gray-200 mt-8">
            <div className="flex flex-col items-center justify-center p-6">
                <div className="text-sm text-gray-700 font-medium mb-2">
                    &copy; {new Date().getFullYear()} Olá, Médico. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}