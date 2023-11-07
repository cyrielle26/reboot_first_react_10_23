import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Sub } from "./pages/Sub";
import { PageNotFound } from "./pages/PageNotFound";

export const Ex012Correction = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub/:id" element={<Sub />} />
        {/*  :변수명 */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
