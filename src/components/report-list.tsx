import type { ReportDiario } from "../types/report-diario";
import { ReportResume } from "./report-resume";

interface ReportListProps {
  reportList: ReportDiario[];
}

export function ReportList({ reportList }: ReportListProps) {
  const orderedList =  [...reportList];

  return (
    <main className="flex flex-col items-center max-w-3xl mx-auto p-[8px] bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl shadow-xl">
      {orderedList.map((value) => (
        <ReportResume key={value.id} reportDiario={value} />
      ))}

      {/* Exemplos com dados estáticos */}
      <ReportResume
        reportDiario={{
          id: "997",
          title: "Noite - Assisti TV",
          date: "2025-09-21",
          alimentacao: "Arroz, feijão e frango",
          consumoAgua: "2L",
        }}/>
      
      <ReportResume
        reportDiario={{
          id: "998",
          title: "Tarde - Fisioterapia",
          date: "2025-09-21",
          alimentacao: "Arroz, feijão e salada",
          consumoAgua: "1.8L",
        }}/>
      
      <ReportResume
        reportDiario={{
          id: "999",
          title: "Manhã - Natação",
          date: "2025-09-21",
          alimentacao: "Arroz, feijão e carne",
          consumoAgua: "1.5L",
        }}/>
    </main>
  );
}
