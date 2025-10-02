export interface ReportDiario {
    id: string;
    title: string;
    date: string;
    alimentacao: string;
    consumoAgua: string;
    sintomas?: string;
    observacao?: string;
}