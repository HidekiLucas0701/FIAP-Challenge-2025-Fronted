import Logo from "../assets/img/logo_ola_medico.png";

export default function QuemSomos() {
  return (
    <main className="flex flex-col md:flex-row w-full max-w-5xl mx-auto py-8 items-center gap-6">
      <div className="flex justify-center w-full md:w-1/3 mb-4 md:mb-0">
        <img
          src={Logo}
          alt="Logo Olá Médico"
          className="h-auto md:w-80 drop-shadow-lg mx-auto"
        />
      </div>
      <section className="w-full md:w-2/3 bg-blue-950 text-white rounded-2xl p-4 md:p-8 shadow-lg flex-1 text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center md:text-left">Quem Somos?</h2>
        <p className="mb-3 md:mb-4 text-base md:text-lg leading-relaxed">
          Somos uma equipe dedicada a melhorar o acesso à saúde pública por meio da tecnologia. Desenvolvemos soluções digitais que facilitam o autoatendimento em hospitais, oferecendo mais autonomia aos pacientes e eficiência para os profissionais de saúde.
        </p>
        <p className="mb-3 md:mb-4 text-base md:text-lg leading-relaxed">
          Nossa missão é democratizar o uso de plataformas digitais no SUS, promovendo agilidade e qualidade no atendimento hospitalar.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Acreditamos que, com inovação e empatia, é possível transformar a experiência do paciente nos serviços públicos de saúde.
        </p>
      </section>
    </main>
  );
}
