import { Link } from "react-router-dom";
import ImageErro from "../assets/img/404 nao encontrada.png"

export function NotFound(){
    return(
        <div className="text-center py-20 flex flex-col items-center">
            <p className="text-gray-600 mb-6">Ops! Parece que você se perdeu</p>
            <img src={ImageErro} alt="Imagem Olá, Médico, página não encontrada" className="w-150"/>
            <Link className="text-white bg-cyan-500 p-2 rounded hover:underline" 
            to="/">Voltar para o início</Link>
        </div>
    );
}