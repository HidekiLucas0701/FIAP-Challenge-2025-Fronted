import { TreatmentProgressDashboard } from "../components/treatment-progress-dashboard";
import { TreatmentExpectationChart } from "../components/treatment-expectation-chart";
import { CalendarNextAppointment } from "../components/calendar-next-appointment";


export function Home() {
  const progress = 60;

  return (
    <main className="mt-8 flex flex-col items-center gap-8">
      <TreatmentProgressDashboard progress={progress} />
      <div className="w-full max-w-5xl py-1 
      flex flex-col md:flex-row gap-6">
      <CalendarNextAppointment date={new Date(2025, 9, 1)} nextLabel={progress} />
      <TreatmentExpectationChart actual={40} expected={60} />
      </div>
    </main>
  );
}