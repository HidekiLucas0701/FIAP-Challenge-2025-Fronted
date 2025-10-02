import { ContatoForm } from "../components/contato-form";
import { ContatoCard } from "../components/contatos-card";

export function Contato(){
     return(
     <main className="mt-8 flex flex-col items-center gap-8">
          <ContatoCard/>
          <ContatoForm/>
     </main>
     );
}