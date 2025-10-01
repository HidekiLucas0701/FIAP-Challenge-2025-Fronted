import Logo from "../assets/img/ola-medico-selo.png"
import { Layout } from "./layout";

export function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center items-center bg-gradient-to-r 
      from-teal-400 to-cyan-500 h-20 sm:h-24 shadow-lg px-2 sm:px-0">
        <img src={Logo} alt="Logo Olá, Médico" className="fixed left-0 w-20 sm:w-24"/>
      <h1 className="hidden sm:block text-3xl font-bold text-white tracking-wide">Olá, Médico </h1>
      </header>
      <Layout />
    </>
  );
}