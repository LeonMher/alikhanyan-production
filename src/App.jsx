import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import AvosSchool from "./projects/AvosSchool/Main";
import AlikhanyanStudio from "./projects/AlikhanyanStudio/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avosschool" element={<AvosSchool />} />
          <Route path="/alikhanyan-studio" element={<AlikhanyanStudio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
