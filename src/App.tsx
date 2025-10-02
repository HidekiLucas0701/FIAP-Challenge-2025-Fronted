import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/header"
import { lazy, Suspense } from "react"
import { Loading } from "./components/loading"
import { Iris } from "./components/iris"
import { AccessibilityButtons } from "./components/accessibility-buttons"
import { Footer } from "./components/footer"

const Home = lazy(() => import("./pages/home").then(module => ({default: module.Home})))
const NotFound = lazy(() => import("./pages/not-found").then(module => ({default: module.NotFound})))
const ReporteDiario  = lazy(() => import("./pages/reporte-diario").then(module => ({default: module.ReporteDiario })))
const ReporteDiarioDetalhe  = lazy(() => import("./pages/reporte-diario-detalhe").then(module => ({default: module.ReporteDiarioDetalhe })))
const Faq  = lazy(() => import("./pages/faq").then(module => ({default: module.Faq })))
const About  = lazy(() => import("./pages/about").then(module => ({default: module.About })))
const IntegrantesPage  = lazy(() => import("./pages/integrantes").then(module => ({default: module.IntegrantesPage })))
const Contato  = lazy(() => import("./pages/contato").then(module => ({default: module.Contato })))

function App() {
  return (
    <>
      <AccessibilityButtons />
      <Iris/>
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Header/>}>
              <Route index element={<Home/>}/>
              <Route path="/reporteDiario" element={<ReporteDiario/>}></Route>
              <Route path="/faq" element={<Faq/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/reporteDiarioDetalhe/:id" element={<ReporteDiarioDetalhe />} />
              <Route path="/integrantes" element={<IntegrantesPage />} />
              <Route path="/contatos" element={<Contato />} />
              <Route path="*" element={<NotFound/>}></Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
