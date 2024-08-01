import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { InfoContainer } from "./components/info/InfoContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<InfoContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
