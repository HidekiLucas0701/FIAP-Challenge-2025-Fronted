import { useCallback, useMemo, useState } from "react";
import { ReportForm } from "../components/report-form";
import type { ReportDiario } from "../types/report-diario";
import { ReportList } from "../components/report-list";

export function ReporteDiario() {
  const [ReportsDiario, setReportsDiario] = useState<ReportDiario[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const reportsPerPage = 7;
  const totalPages = useMemo(() => Math.ceil(ReportsDiario.length / reportsPerPage), [ReportsDiario.length, reportsPerPage]);

  const addReportDiaro = useCallback((reportDiario: ReportDiario) => {
    setReportsDiario((prev) => [reportDiario, ...prev]); 
    setCurrentPage(1);
  }, []);

  const startIndex = (currentPage - 1) * reportsPerPage;
  const currentReports = ReportsDiario.slice(
    startIndex,
    startIndex + reportsPerPage
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
      <section className="bg-white rounded-xl shadow p-8 md:w-1/2 w-full">
        <h1 className="text-2xl font-bold text-cyan-700 mb-4">Reporte Diário</h1>
        <ReportForm onAdd={addReportDiaro} />
      </section>
      <section className="bg-white rounded-xl shadow p-8 md:w-1/2 w-full">
        <h2 className="text-2xl font-bold text-cyan-700 mb-4">
          Histórico de Reportes
        </h2>

        <ReportList reportList={currentReports} />

        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-4">
            <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1} className={`px-3 py-1 rounded-lg text-sm font-medium shadow
                ${currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:opacity-90"
                }`}> ← Anterior</button>
          
            <span className="text-gray-700 font-semibold">
              Página {currentPage} de {totalPages}
            </span>

            <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages} className={`px-3 py-1 rounded-lg text-sm font-medium shadow
                ${currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:opacity-90"
                }`}> Próxima →</button>
          </div>
        )}
      </section>
    </main>
  );
}
