
export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-3">
      <div className="w-8 h-8 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 animate-pulse">Carregando...</p>
    </div>
  );
}