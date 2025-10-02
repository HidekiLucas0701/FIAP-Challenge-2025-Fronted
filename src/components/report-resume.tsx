import { Link } from "react-router-dom";
import type { ReportDiario } from "../types/report-diario";

interface ReportResumeProps {
  reportDiario: ReportDiario;
}

export function ReportResume({ reportDiario }: ReportResumeProps) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-md px-6 py-5 flex flex-col gap-3 mb-4 
         hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg text-gray-700">{reportDiario.title}</h2>
        <Link to={`/reporteDiarioDetalhe/${reportDiario.id}`} state={{ report: reportDiario }}
          className="px-4 py-2 text-sm rounded-full font-medium bg-gradient-to-r from-teal-400 to-cyan-500 text-white
          shadow hover:shadow-md hover:brightness-110 transition-all" >Detalhes</Link>
      </div>
      <p className="text-gray-500 text-sm">
        <span className="font-medium">{reportDiario.date}</span>
      </p>
    </div>
  );
}
