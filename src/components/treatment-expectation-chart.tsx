
interface TreatmentExpectationChartProps {
  actual: number; 
  expected: number; 
}

export function TreatmentExpectationChart({ actual, expected }: TreatmentExpectationChartProps) {
  return (
    <div className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl shadow-2xl border border-cyan-100 
    p-8 flex flex-col items-center w-full max-w-2xl mx-auto ">
    <div className="bg-teal-400 rounded-3xl shadow-2xl p-6 w-full max-w-2xl mx-auto border border-cyan-100 flex flex-col gap-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">📊</span>
        <h2 className="text-xl font-extrabold text-white tracking-tight">Comparativo de Evolução</h2>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center w-full">
          <span className="font-bold text-white text-sm min-w-[70px]">META</span>
          <div className="relative flex-1 flex items-center">
            <div className="w-full h-8 rounded-md bg-white/40 relative flex items-center">
              <div className="h-8 rounded-md bg-red-400 flex items-center justify-end transition-all duration-500"
                style={{ width: `${expected}%` }}>
                <span className="text-white font-bold text-sm ml-2">{expected}%</span>
              </div>
             
              <div className="absolute top-0 h-8 w-2 bg-white rounded-full shadow-lg" style={{ left: `calc(${expected}% - 1px)` }}/>

            </div>
          </div>
          <span className="font-bold text-white text-sm ml-2 min-w-[40px]">{expected * 10}</span>
        </div>


        <div className="flex items-center w-full mt-2">
          <span className="font-bold text-white text-sm min-w-[70px]">ATUAL</span>
          <div className="relative flex-1 flex items-center">
            <div className="w-full h-8 rounded-md bg-white/40 relative flex items-center">
              <div className="h-8 rounded-md bg-cyan-400 flex items-center justify-end transition-all duration-500"
                style={{ width: `${actual}%` }}>
                <span className="text-white font-bold text-sm ml-2">{actual}%</span>
              </div>

              <div className="absolute top-0 h-8 w-2 bg-white rounded-full shadow-lg" style={{ left: `calc(${actual}% - 1px)` }}/>
                 
            </div>
          </div>
          <span className="font-bold text-white text-sm ml-2 min-w-[40px]">{actual * 10}</span>
        </div>


      </div>
    </div>
      {actual < expected && (
        <div className="mt-2 text-center text-sm text-red-600 font-semibold animate-pulse">
          Atenção: O progresso está abaixo do esperado!</div>
      )}
  </div>
  );
}
