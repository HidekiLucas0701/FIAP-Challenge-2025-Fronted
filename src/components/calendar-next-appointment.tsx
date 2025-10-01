
interface CalendarNextAppointmentProps {
  date: Date;
  nextLabel: number;
}

function getMonthAbbr(month: number) {
  return ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro",
     "Novembro", "Dezembro"][month];
}

export function CalendarNextAppointment({ date , nextLabel }: CalendarNextAppointmentProps) {
  const day = date.getDate();
  const month = getMonthAbbr(date.getMonth());

    function nextStepLabel(nextLabel: number): string{
    switch(nextLabel){
      case 0:
        return "FISIOTERAPIA";
      case 20:
        return "PSICOTERAPIA";
      case 40:
        return "NUTRIÇÃO";
      case 60:
        return "MÉDICO GERAL";
      case 80:
        return "PREVISÃO DE ALTA";
      case 100:
        return "Parabéns, tratamento concluido!!!";
      default:
        return "---";
    }
  }

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl shadow-2xl border border-cyan-100 
    p-8 flex flex-col items-center w-full max-w-2xl mx-auto ">
      <div className="text-xl font-extrabold text-cyan-700 mb-2 tracking-tight">PRÓXIMA CONSULTA</div>
      <div className="flex flex-col items-center justify-center bg-white rounded-2xl border border-cyan-200 w-40 h-40 mb-4 shadow-lg">
        <div className="bg-red-400 w-full rounded-t-2xl text-white text-2xl font-bold py-2 text-center tracking-wide">{month}</div>
        <div className="flex-1 flex items-center justify-center text-7xl font-extrabold text-gray-700" style={{height: '80px'}}>{day}</div>
      </div>
      <div className="text-2xl font-extrabold text-cyan-700 mt-2 text-center uppercase tracking-tight">{nextStepLabel(nextLabel)}</div>
    </div>
  );
}