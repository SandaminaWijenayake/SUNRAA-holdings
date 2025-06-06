import "./App.css";
import { Aboutus } from "./Components/aboutUs/Aboutus.jsx";
import { Contactus } from "./Components/Contactus";
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router";
import Layout from "./Components/Layout";
import { HelthBenifits } from "./Components/HelthBenifits";
import VeiwProduct from "./Components/Products/VeiwProduct";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact_us" element={<Contactus />} />
          <Route path="/about_us" element={<Aboutus />} />
          <Route path="/Health_Benefits" element={<HelthBenifits />} />
          <Route path="/viewProduct/:id" element={<VeiwProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
