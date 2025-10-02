import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ReportCard } from "../components/report-card";

export function ReporteDiarioDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const report = location.state?.report;

  if (!report) {
    return (
      <main className="max-w-xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-gray-600">Nenhum reporte ID: {id} encontrado</p>
          <button className="button-blue mt-6"onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-xl mx-auto px-4 py-10">
      <ReportCard report={report} />
      <button className="button-blue mt-8" onClick={() => navigate(-1)}>Voltar para Reportes</button>
    </main>
  );
}
