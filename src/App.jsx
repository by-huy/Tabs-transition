import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Gallery from "./pages/Gallery";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="gallery" element={<Gallery/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}
