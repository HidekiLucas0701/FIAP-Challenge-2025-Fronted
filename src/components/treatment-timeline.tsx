interface TreatmentStep {
  label: string;
  session: string;
  status: "done" | "fail" | "pending";
}

interface TreatmentTimelineProps {
  steps: TreatmentStep[];
  alert?: string;
  alertDanger?: string;
  progressBarPercent: number;
}

export function TreatmentTimeline({ steps, alert, alertDanger, progressBarPercent }: TreatmentTimelineProps) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-2 flex flex-col items-center mt-8 border border-gray-100">
      {(alert || alertDanger) && (
        <div className="mb-2 text-center">
          {alert && <div className="text-gray-700 text-sm font-medium">{alert}</div>}
          {alertDanger && <div className="text-red-600 text-base font-bold uppercase">{alertDanger}</div>}
        </div>
      )}

      {/* Desktop: horizontal timeline */}
      <div className="hidden sm:grid grid-cols-5 gap-2 w-full relative mt-2" style={{ minWidth: 0 }}>
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-4 z-0 pointer-events-none">
          <div className="w-full h-2 rounded-full bg-gray-200" />

          <div className="h-2 rounded-full absolute top-0 left-0 z-10 transition-all duration-500"
            style={{ width: `${progressBarPercent}%`, background: '#22c55e' }}/>
        </div>

        {/* Checkpoints horizontal*/}
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center z-20">
            <div className="relative flex flex-col items-center">
              {step.status === "done" && (
                <span className="bg-green-400 rounded-lg p-0.5 border-2 border-white shadow text-lg sm:text-xl md:text-2xl">✔️</span>
              )}
              {step.status === "fail" && (
                <span className="bg-white rounded-lg p-0.5 border-2 border-red-400 shadow text-lg sm:text-xl md:text-2xl">❌</span>
              )}
              {step.status === "pending" && (
                <span className="bg-gray-300 rounded-full w-6 h-6 sm:w-8 sm:h-8 border-2 border-white shadow" />
              )}
            </div>
            <div className="mt-1 text-[10px] sm:text-xs text-gray-700 font-medium">{step.session}</div>
            <div className="text-[11px] sm:text-sm font-bold mt-0.5 whitespace-pre-line text-center" style={{ color: step.status === 'fail' ? '#ef4444' : step.status === 'done' ? '#222' : '#888' }}>{step.label}</div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="sm:hidden flex flex-row w-full mt-2">
        <div className="flex flex-col items-center relative mr-2" style={{ minWidth: '40px', maxWidth: '40px', height: '220px', position: 'relative' }}>
          {/* Linha de progresso vertical reduzida */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full" style={{ height: '200px' }} />
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bg-green-500 rounded-full"
            style={{ width: '5px', height: `${progressBarPercent * 2}px`, zIndex: 10 }}/>
          
          {/* Checkpoints vertical reduzidos */}
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center z-20 mb-3" style={{ position: 'absolute', top: `${(idx / (steps.length - 1)) * 200}px`, left: '50%', transform: 'translateX(-50%)' }}>
              <div className="relative flex flex-col items-center">
                {step.status === "done" && (
                  <span className="bg-green-400 rounded-lg p-0.5 border-2 border-white shadow text-base">✔️</span>
                )}
                {step.status === "fail" && (
                  <span className="bg-white rounded-lg p-0.5 border-2 border-red-400 shadow text-base">❌</span>
                )}
                {step.status === "pending" && (
                  <span className="bg-gray-300 rounded-full w-4 h-4 border-2 border-white shadow" />
                )}
              </div>
            </div>
          ))}
        </div>

          {/* Labels vertical reduzidos */}
        <div className="flex flex-col justify-between h-[200px] ml-1">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col justify-center mb-3" style={{ minHeight: '32px' }}>
              <div className="text-[10px] text-gray-700 font-medium">{step.session}</div>
              <div className="text-[11px] font-bold whitespace-pre-line" style={{ color: step.status === 'fail' ? '#ef4444' : step.status === 'done' ? '#222' : '#888' }}>{step.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
