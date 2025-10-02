import { useState } from "react";
import type { ReportDiario } from "../types/report-diario";

interface ReportFormProps {
  onAdd: (reportDiario: ReportDiario) => void;
}

export function ReportForm({ onAdd }: ReportFormProps) {
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [alimentacao, setAlimentacao] = useState("");
  const [consumoAgua, setConsumoAgua] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [observacao, setObservacoes] = useState("");

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const reportDiario: ReportDiario = {
      id: crypto.randomUUID(),
      title,
      date,
      alimentacao,
      consumoAgua,
      sintomas,
      observacao,
    };

    onAdd(reportDiario);

    setTitle("");
    setDate(new Date().toISOString().split("T")[0]);
    setAlimentacao("");
    setConsumoAgua("");
    setSintomas("");
    setObservacoes("");
    setShowForm(false);
  }

return (
  <div className="flex flex-col items-center gap-6 w-full">

    {!showForm && (
      <button
        onClick={() => setShowForm(true)}
        className="w-4/5 text-lg font-semibold py-4 rounded-2xl shadow-md  bg-gradient-to-r from-teal-400 to-cyan-500 text-white 
        hover:brightness-110 hover:shadow-lg transition-all duration-300">
        + Reporte Diário - {new Date().toLocaleDateString("pt-BR")}
      </button>
    )}


    {showForm && (
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4 w-4/5 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-2"> Reporte Diário </h2>

        <label htmlFor="report-title" className="font-medium text-gray-600">Título</label>
        <input type="text" id="report-title" placeholder="Título"
          value={title} onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"/>
                    
        <label htmlFor="report-date" className="font-medium text-gray-600">Data</label>
        <input type="date" id="report-date"
          value={date} onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition" />
        
        <label htmlFor="report-alimentacao" className="font-medium text-gray-600">Alimentação</label>
        <textarea id="report-alimentacao" placeholder="Descreva a alimentação"
          value={alimentacao} onChange={(e) => setAlimentacao(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 transition"/>
                     
        <label htmlFor="report-agua" className="font-medium text-gray-600">Consumo de Água</label>
        <input type="text" id="report-agua" placeholder="Ex: 2L"
          value={consumoAgua} onChange={(e) => setConsumoAgua(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"/>
                     
        <label htmlFor="report-sintomas" className="font-medium text-gray-600">Sintomas</label>
        <textarea id="report-sintomas" placeholder="Informe sintomas"
          value={sintomas} onChange={(e) => setSintomas(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 transition"/>
                     
        <label htmlFor="report-observacoes" className="font-medium text-gray-600">Observações</label>
        <textarea id="report-observacoes" placeholder="Observações adicionais"
          value={observacao} onChange={(e) => setObservacoes(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 transition"/>

        <div className="flex justify-between gap-3 mt-4">
          <button type="button" onClick={() => setShowForm(false)}
            className="bg-gray-200 text-gray-700 rounded-xl py-2 w-1/2 hover:bg-gray-300 transition-all">Cancelar</button>
                 
          <button type="submit"
            className="bg-gradient-to-r from-teal-400 to-cyan-500 shadow-md text-white px-4 py-2 rounded-xl w-1/2 
            hover:brightness-110 hover:shadow-lg transition-all">Adicionar</button>
        </div>
      </form>
    )}
  </div>
);
}
