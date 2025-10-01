import { Link } from "react-router-dom";
import QuemSomos from "../components/about-component";

export function About() {
  return (
    <main className="flex flex-col items-center px-4 py-8 ">
      <QuemSomos />
      <div className="flex flex-col items-center px-4 py-8 gap-4 w-full max-w-3xl">
      <Link to="/integrantes" className="text-lg text-center w-full max-w-3xl font-semibold py-4 rounded-2xl shadow-md bg-gradient-to-r from-teal-400 to-cyan-500 text-white 
      hover:brightness-110 hover:shadow-lg transition-all duration-300">Integrantes da Equipe</Link>
      <Link to="/contatos" className="text-lg text-center w-full max-w-3xl font-semibold py-4 rounded-2xl shadow-md bg-gradient-to-r from-teal-400 to-cyan-500 text-white 
      hover:brightness-110 hover:shadow-lg transition-all duration-300">Entre em contato</Link>
      </div>
    </main>
  );
}