import { Link, Outlet, useLocation } from "react-router-dom";

export function Layout() {
  const location = useLocation();
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/reporteDiario", label: "Reporte Diário" },
    { to: "/faq", label: "FAQ" },
    { to: "/about", label: "Sobre" },
  ];

  return (
    <div>
      <nav className="fixed top-20 left-0 w-full z-50 bg-gray-100 shadow-inner">
        <div className="flex sm:flex-row items-center p-2 sm:p-4 justify-between">
          <div className="flex-1 flex sm:flex-row justify-center gap-2 sm:gap-4">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className={`px-4 sm:px-4 py-3 sm:py-2 rounded-full text-sm sm:text-sm text-center font-medium transition-all 
                  ${location.pathname === link.to ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="mx-auto p-2 sm:p-6 min-h-screen bg-gray-200 pt-30 sm:pt-32">
        <Outlet />
      </main>
    </div>
  );
}
