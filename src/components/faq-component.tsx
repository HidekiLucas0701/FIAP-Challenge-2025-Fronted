import { useState } from "react";

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {pergunta: "Como faço para agendar uma consulta?",
      resposta: 'Acesse o site, vá até a seção "Agendamentos" e escolha a especialidade, data e horário disponíveis.'},
    
    {pergunta: "Preciso estar logado para ver meus exames?",
      resposta: "Sim. É necessário acessar sua conta para garantir a segurança dos dados."},
    
    {pergunta: "Consigo remarcar uma consulta pelo autoatendimento?",
      resposta: "Sim. Caso a consulta ainda não tenha acontecido, você pode remarcar." },
    
    {pergunta: "O que faço se esqueci minha senha?",
      resposta:'Use a opção "Esqueci minha senha" na tela de login para redefinir.'},
    
    {pergunta: "O sistema pode ser acessado em qualquer horário?",
      resposta: "Sim. A plataforma online funciona 24 horas por dia, permitindo agendamentos e consultas a qualquer momento."}
    ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-3xl mx-auto p-[8px] bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl shadow-xl mt-9">
      <section className="bg-sky-50 rounded-3xl px-6 py-12 space-y-6">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">FAQ</h1>
        <h2 className="text-xl font-medium text-center text-gray-600">Perguntas Frequentes Autoatendimento</h2>
        <div className="space-y-4 mt-8">
          {faqs.map((faq, index) => (
            <div
              key={index} className="border border-gray-200 rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
              <button
                className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 
                hover:from-teal-100 hover:to-cyan-100 transition-all"
                onClick={() => toggleFAQ(index)}>
                <span className="font-medium text-gray-700">{faq.pergunta}</span>
                <span
                  className={`transform transition-transform duration-300 text-gray-500 text-xl`}
                  style={{display: "inline-block",transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",}}>+  
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out 
                  ${openIndex === index ? "max-h-40 opacity-100": "max-h-0 opacity-0"}
                     overflow-hidden bg-white border-t border-gray-100`}>
                <p className="p-4 text-gray-600">{faq.resposta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
