import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Sobre from "./pages/Sobre/Sobre"
import Projetos from "./pages/Projetos/Projetos"
import Contato from "./pages/Contato/Contato"
import Header from "./components/Header/Header"

export default function Rotas() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="projetos" element={<Projetos />} />
                    <Route path="contato" element={<Contato />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
