

import { TreatmentTimeline } from "./treatment-timeline";

interface TreatmentProgressProps {
  progress: number;
}

export function TreatmentProgressDashboard({ progress }: TreatmentProgressProps) {

  const steps = [
  { session: "Sessão 1", label: "FISIOTERAPIA", status: (progress >= 20 ? "done" : "pending") as "done" | "pending" },
  { session: "Sessão 2", label: "PSICOTERAPIA", status: (progress >= 40 ? "done" : "pending") as "done" | "pending" },
  { session: "Sessão 3", label: "NUTRIÇÃO", status: (progress >= 60 ? "done" : "pending") as "done" | "pending" },
  { session: "Sessão 4", label: "MÉDICO GERAL", status: (progress >= 80 ? "done" : "pending") as "done" | "pending" },
  { session: "Sessão 5", label: "PREVISÃO DE ALTA", status: (progress === 100 ? "done" : "pending") as "done" | "pending" },
  ];

  const lastDoneIdx = steps.map(s => s.status).lastIndexOf('done');
  const progressBarPercent = lastDoneIdx >= 0 ? ((lastDoneIdx + 1) / steps.length) * 100 : 0;

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl shadow-2xl p-2 flex flex-col items-center w-full max-w-5xl border border-cyan-100">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">🩺</span>
        <h2 className="text-2xl font-extrabold text-cyan-700 tracking-tight">Acompanhamento do Tratamento</h2>
      </div>
      <div className="w-full flex flex-col items-center mb-6 mt-2">
        <TreatmentTimeline steps={steps} progressBarPercent={progressBarPercent} />
      </div>
    </div>
  );
}
