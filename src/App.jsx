import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route />
        <Route />
        <Route />
        <Route />

      </Route>
    </Routes>
   </BrowserRouter>
  );
}
