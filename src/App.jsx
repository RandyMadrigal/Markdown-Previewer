import { Header } from "./components/layouts/Header";
import { NavBar } from "./components/layouts/NavBar";
import { Footer } from "./components/layouts/Footer";
import { InfoContainer } from "./components/info/InfoContainer";
import { MarkDownContainer } from "./components/markdown/MarkDownContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<MarkDownContainer />} />
          <Route path="/about" element={<InfoContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
