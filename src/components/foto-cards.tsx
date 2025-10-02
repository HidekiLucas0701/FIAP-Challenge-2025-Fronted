import FotoLucas from "../assets/img/hideki.jpg";
import FotoBira from "../assets/img/Foto-Bira.jpeg";
import FotoArthur from "../assets/img/Perfil Arthur.jpeg";

export default function Integrantes() {
  const integrantes = [
    { nome: "Lucas Hideki",
      rm: "565355",
      img: FotoLucas,
      alt: "Lucas, um rapaz jovem com cabelo escuro e liso, em pé sobre uma passarela, vestindo camisa polo preta, com uma avenida movimentada e árvores floridas roxas ao fundo, sob um céu parcialmente nublado.",
      linkedin: "https://www.linkedin.com/in/lucas-hideki-p-s-de-souza-a79461317/",
      github: "https://github.com/HidekiLucas0701"},
    
    { nome: "Ubirajara Lavor",
      rm: "565463",
      img: FotoBira,
      alt: "Ubirajara em close preto e branco, com barba curta, cabelo levemente bagunçado e óculos de armação grossa. Ele olha para a câmera com expressão pensativa, em um ambiente iluminado suavemente.",
      linkedin: "https://www.linkedin.com/in/bira-lavor/",
      github: "https://github.com/biralavor"},
    
    { nome: "Arthur Graciani",
      rm: "561728",
      img: FotoArthur,
      alt: "Arthur, um rapaz jovem com cabelo castanho curto e ondulado, usando óculos de armação preta e uma blusa preta, posando em frente a uma parede branca.",
      linkedin: "https://www.linkedin.com/in/arthur-graciani-bezerra-187719367",
      github: "https://github.com/ArthurGracianiBez"}
  ];

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">Integrantes do Projeto</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrantes.map((i, idx) => (
          <div key={idx}className="bg-blue-950 text-white rounded-2xl shadow-5lg overflow-hidden border border-gray-700 
            hover:scale-105 hover:shadow-xl transition-transform duration-300 flex flex-col">
            
            <img src={i.img} alt={i.alt} className="w-full h-64 object-cover object-top"/>

            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-bold uppercase">{i.nome}</h3>
                <p className="text-gray-200">RM {i.rm}</p>
                <p className="text-gray-200">Turma 1TDSPX</p>
              </div>

              <div className="flex justify-center space-x-4 mt-4">
                <a href={i.linkedin} target="_blank"  rel="noopener noreferrer" className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.768 1.75-1.768s1.75.794 1.75 1.768c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.06-1.865-3.06-1.868 0-2.155 1.46-2.155 2.967v5.697h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.56 2.84-1.56 3.039 0 3.6 2.002 3.6 4.604v5.589z" />
                  </svg>
                </a>

                <a href={i.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.123-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.242 2.872.119 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.624-5.476 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .321.216.694.825.576 4.765-1.587 8.2-6.083 8.2-11.385 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
