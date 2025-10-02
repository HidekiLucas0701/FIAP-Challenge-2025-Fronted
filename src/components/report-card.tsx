
import type { ReportDiario } from "../types/report-diario";
interface ReportCardProps {
  report: ReportDiario;
}

export function ReportCard({ report }: ReportCardProps) {
    return(
      <section className="bg-white rounded-xl shadow p-8 border border-gray-100">
        <h1 className="text-2xl font-bold text-cyan-700 mb-4">Detalhes do Reporte Diário</h1>
        <div className="flex flex-col gap-2 text-gray-700">
          <div><span className="font-semibold">Título:</span> {report.title}</div>
          <div><span className="font-semibold">Data:</span> {report.date}</div>
          <div><span className="font-semibold">Alimentação:</span> {report.alimentacao}</div>
          <div><span className="font-semibold">Consumo de Água:</span> {report.consumoAgua}</div>
          <div><span className="font-semibold">Sintomas:</span> {report.sintomas}</div>
          <div><span className="font-semibold">Observações:</span> {report.observacao}</div>
        </div>
      </section>
    );
}