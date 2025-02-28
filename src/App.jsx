import { useState } from "react";

import "./App.css";
import { Aboutus } from "./Components/Aboutus";
import { Contactus } from "./Components/Contactus";
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router";
import Layout from "./Components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact_us" element={<Contactus />} />
          <Route path="/about_us" element={<Aboutus />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
